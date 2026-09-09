// ================================================================
// WRAP EVERYTHING IN DOMContentLoaded
// ================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    // ================================================================
    // AUTO-EXPAND TEXTAREA
    // ================================================================

    function autoExpand(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px';
    }

    // ================================================================
    // HELPER: Get Ordinal Suffix (1st, 2nd, 3rd, 4th, etc.)
    // ================================================================

    function getOrdinalSuffix(n) {
        if (n >= 11 && n <= 13) return 'th';
        const lastDigit = n % 10;
        if (lastDigit === 1) return 'st';
        if (lastDigit === 2) return 'nd';
        if (lastDigit === 3) return 'rd';
        return 'th';
    }

    // ================================================================
    // EVENT FILTER FUNCTION
    // ================================================================

    function getEventsForFullDate(year, month, day) {
        const events = getEventsForDate(month, day);
        return events.filter((event) => {
            if (event.recurring) {
                if (event.annual) {
                    return year >= event.year;
                }
                return event.year === year;
            }
            if (event.isAnniversary) {
                const anniversaryNumber = year - event.releaseYear;
                if (anniversaryNumber >= 1) {
                    let baseName = event.description;
                    baseName = baseName.replace(/\s*\d+(st|nd|rd|th)?\s*Anniversary\s*/, '');
                    baseName = baseName.trim();
                    const suffix = getOrdinalSuffix(anniversaryNumber);
                    event.description = `${baseName} ${anniversaryNumber}${suffix} Anniversary`;
                    return true;
                }
                return false;
            }
            return event.year === year;
        });
    }

    // ================================================================
    // NOTES FUNCTIONS
    // ================================================================

    function getNotesKey(year, month, day) {
        return `notes_${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }

    function getNotesForDate(year, month, day) {
        const key = getNotesKey(year, month, day);
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    function saveNotesForDate(year, month, day, notes) {
        const key = getNotesKey(year, month, day);
        if (notes.length === 0) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(notes));
        }
    }

    function addNote(year, month, day, noteText) {
        const notes = getNotesForDate(year, month, day);
        notes.push({
            id: Date.now(),
            text: noteText.trim(),
            createdAt: new Date().toLocaleString(),
        });
        saveNotesForDate(year, month, day, notes);
        return notes;
    }

    function deleteNote(year, month, day, noteId) {
        let notes = getNotesForDate(year, month, day);
        notes = notes.filter((note) => note.id !== noteId);
        saveNotesForDate(year, month, day, notes);
        return notes;
    }

    function clearAllNotesForDate(year, month, day) {
        const key = getNotesKey(year, month, day);
        localStorage.removeItem(key);
        return [];
    }

    // ================================================================
    // BTS Calendar - Main JavaScript
    // ================================================================

    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    const grid = document.getElementById('calendarGrid');
    const monthDisplay = document.getElementById('monthDisplay');
    const yearDisplay = document.getElementById('yearDisplay');

    // ================================================================
    // NOTES POPUP ELEMENTS
    // ================================================================

    const notePopup = document.getElementById('notePopup');
    const overlay = document.getElementById('overlay');
    const closeNotePopup = document.getElementById('closeNotePopup');
    const noteDateTitle = document.getElementById('noteDateTitle');
    const noteEvents = document.getElementById('noteEvents');
    const noteInput = document.getElementById('noteInput');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notesList = document.getElementById('notesList');
    const noteCount = document.getElementById('noteCount');
    const clearAllNotesBtn = document.getElementById('clearAllNotesBtn');

    let currentSelectedDate = null;

    // ================================================================
    // RENDER CALENDAR - COMPLETE FIXED VERSION
    // ================================================================

    function renderCalendar() {
        grid.innerHTML = '';

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        monthDisplay.textContent = months[currentMonth];
        yearDisplay.textContent = currentYear;

        // PREVIOUS MONTH DAYS (Padding)
        const prevMonthStart = daysInPrevMonth - firstDay + 1;
        for (let i = prevMonthStart; i <= daysInPrevMonth; i++) {
            const cell = document.createElement('div');
            cell.className = 'date-cell empty';
            cell.textContent = i;
            grid.appendChild(cell);
        }

        // CURRENT MONTH DAYS
        for (let i = 1; i <= daysInMonth; i++) {
            const cell = document.createElement('div');
            cell.className = 'date-cell';
            cell.textContent = i;

            // Today
            if (
                i === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
            ) {
                cell.classList.add('today');
            }

            // BTS Events
            const events = getEventsForFullDate(currentYear, currentMonth + 1, i);
            if (events.length > 0) {
                const indicator = document.createElement('span');
                indicator.className = 'event-indicator';
                indicator.style.cssText = `
                    width: 6px;
                    height: 6px;
                    background: #7c4dff;
                    border-radius: 50%;
                    margin-top: 4px;
                    box-shadow: 0 0 12px rgba(124, 77, 255, 0.4);
                `;
                cell.appendChild(indicator);
            }

            // Saved Notes
            const notes = getNotesForDate(currentYear, currentMonth + 1, i);
            if (notes.length > 0) {
                const noteIndicator = document.createElement('span');
                noteIndicator.className = 'note-indicator';
                noteIndicator.style.cssText = `
                    width: 6px;
                    height: 6px;
                    background: #ffab40;
                    border-radius: 2px;
                    margin-top: 2px;
                    box-shadow: 0 0 12px rgba(255, 171, 64, 0.3);
                `;
                cell.appendChild(noteIndicator);
                cell.dataset.hasNote = 'true';
            }

            // HOVER - Tooltip (Desktop)
            cell.addEventListener('mouseenter', function (e) {
                const evts = getEventsForFullDate(currentYear, currentMonth + 1, i);
                if (evts.length > 0) {
                    showTooltip(e, evts);
                }
            });
            cell.addEventListener('mouseleave', function (e) {
                hideTooltip();
            });

            // LONG PRESS - Tooltip (Mobile)
            let pressTimer = null;
            cell.addEventListener('touchstart', function (e) {
                const evts = getEventsForFullDate(currentYear, currentMonth + 1, i);
                if (evts.length > 0) {
                    pressTimer = setTimeout(function () {
                        e.preventDefault();
                        const fakeEvent = {
                            currentTarget: cell,
                            target: cell,
                            touches: e.touches,
                            clientX: e.touches ? e.touches[0].clientX : 0,
                            clientY: e.touches ? e.touches[0].clientY : 0,
                        };
                        showTooltip(fakeEvent, evts);
                    }, 800);
                }
            });
            cell.addEventListener('touchmove', function (e) {
                clearTimeout(pressTimer);
            });
            cell.addEventListener('touchend', function (e) {
                clearTimeout(pressTimer);
            });

            // CLICK - Opens Note Popup
            cell.addEventListener('click', function (e) {
                clearTimeout(pressTimer);
                hideTooltip();
                openNotePopup(currentYear, currentMonth + 1, i);
            });

            grid.appendChild(cell);
        }

        // NEXT MONTH DAYS (Padding)
        const totalCells = grid.children.length;
        const remainingCells = 42 - totalCells;
        for (let i = 1; i <= remainingCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'date-cell empty';
            cell.textContent = i;
            grid.appendChild(cell);
        }
    }

    // ================================================================
    // NOTES POPUP FUNCTIONS
    // ================================================================

    function openNotePopup(year, month, day) {
        currentSelectedDate = { year, month, day };
        const dateObj = new Date(year, month - 1, day);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        noteDateTitle.textContent = `📝 ${dateObj.toLocaleDateString('en-US', options)}`;

        // Show BTS events for this date
        const events = getEventsForFullDate(year, month, day);
        noteEvents.innerHTML = '';
        if (events.length === 0) {
            noteEvents.innerHTML = '<p class="no-events">🎵 No BTS events on this day</p>';
        } else {
            events.forEach((ev) => {
                const item = document.createElement('div');
                item.className = 'event-item';
                item.textContent = ev.description;
                noteEvents.appendChild(item);
            });
        }

        // Load saved notes
        renderNotesList(year, month, day);

        // Clear input
        noteInput.value = '';
        noteInput.style.height = 'auto';

        notePopup.classList.add('visible');
        overlay.classList.add('visible');
    }

    function renderNotesList(year, month, day) {
        const notes = getNotesForDate(year, month, day);
        noteCount.textContent = notes.length;
        notesList.innerHTML = '';

        if (notes.length === 0) {
            notesList.innerHTML = '<p class="no-notes">No notes saved for this day</p>';
            clearAllNotesBtn.style.display = 'none';
            return;
        }

        clearAllNotesBtn.style.display = 'block';

        notes.forEach((note) => {
            const noteItem = document.createElement('div');
            noteItem.className = 'note-item';
            noteItem.innerHTML = `
                <span class="note-text">📌 ${note.text}</span>
                <button class="note-delete-btn" data-note-id="${note.id}">✕</button>
            `;

            const deleteBtn = noteItem.querySelector('.note-delete-btn');
            deleteBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                const noteId = parseInt(this.dataset.noteId);
                deleteNote(year, month, day, noteId);
                renderNotesList(year, month, day);
                renderCalendar();
            });

            notesList.appendChild(noteItem);
        });
    }

    function closeNotePopupFn() {
        notePopup.classList.remove('visible');
        overlay.classList.remove('visible');
        currentSelectedDate = null;
    }

    function handleAddNote() {
        if (!currentSelectedDate) return;
        const { year, month, day } = currentSelectedDate;
        const noteText = noteInput.value.trim();

        if (noteText) {
            addNote(year, month, day, noteText);
            renderNotesList(year, month, day);
            renderCalendar();
            noteInput.value = '';
            noteInput.style.height = 'auto';
        }
    }

    function handleClearAllNotes() {
        if (!currentSelectedDate) return;
        const { year, month, day } = currentSelectedDate;

        if (confirm('Are you sure you want to delete ALL notes for this date?')) {
            clearAllNotesForDate(year, month, day);
            renderNotesList(year, month, day);
            renderCalendar();
        }
    }

    // ================================================================
    // NAVIGATION
    // ================================================================

    document.getElementById('prevMonth').addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar();
    });

    document.getElementById('todayBtn').addEventListener('click', () => {
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        renderCalendar();
    });

    // ================================================================
    // YEAR EDITING
    // ================================================================

    yearDisplay.addEventListener('blur', function () {
        let newYear = parseInt(this.textContent);
        if (isNaN(newYear)) {
            this.textContent = currentYear;
            return;
        }
        if (newYear < 1992) newYear = 1992;
        if (newYear > 2100) newYear = 2100;
        currentYear = newYear;
        this.textContent = currentYear;
        renderCalendar();
    });

    yearDisplay.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.blur();
        }
    });

    yearDisplay.addEventListener('click', function () {
        const range = document.createRange();
        range.selectNodeContents(this);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    });

    // ================================================================
    // NOTES POPUP EVENT LISTENERS
    // ================================================================

    closeNotePopup.addEventListener('click', closeNotePopupFn);
    overlay.addEventListener('click', closeNotePopupFn);
    addNoteBtn.addEventListener('click', handleAddNote);
    clearAllNotesBtn.addEventListener('click', handleClearAllNotes);

    if (noteInput) {
        noteInput.addEventListener('input', function () {
            autoExpand(this);
        });
    }

    if (noteInput) {
        noteInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAddNote();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNotePopupFn();
        }
    });

    // ================================================================
    // TOOLTIP FUNCTIONS
    // ================================================================

    function showTooltip(event, events) {
        let html = '';
        events.forEach((ev) => {
            html += `
            <div class="event-title">📌 ${ev.description}</div>
            <span class="event-year">${ev.year}</span>
        `;
        });

        tooltip.innerHTML = html;
        tooltip.classList.add('visible');

        // Get the cell element
        let cell = event.currentTarget;
        if (!cell && event.target) {
            cell = event.target.closest ? event.target.closest('.date-cell') : null;
        }
        if (!cell) {
            const touch = event.touches ? event.touches[0] : null;
            if (touch) {
                const elements = document.elementsFromPoint(touch.clientX, touch.clientY);
                for (let el of elements) {
                    if (el.classList && el.classList.contains('date-cell')) {
                        cell = el;
                        break;
                    }
                }
            }
        }
        if (!cell) {
            cell = event.target;
        }

        if (!cell) {
            hideTooltip();
            return;
        }

        // Get the cell position
        const rect = cell.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Position tooltip ABOVE the cell - CENTERED
        let left = rect.left + rect.width / 2 - 90;
        let top = rect.top - 65;

        // Make sure tooltip stays in viewport
        if (left < 10) left = 10;
        if (left + 180 > viewportWidth - 10) {
            left = viewportWidth - 190;
        }

        // If not enough space above, show below
        if (top < 10) {
            top = rect.bottom + 10;
            tooltip.classList.add('below');
        } else {
            tooltip.classList.remove('below');
        }

        // Apply position
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    function hideTooltip() {
        tooltip.classList.remove('visible');
        tooltip.classList.remove('below');
    }

    // ================================================================
    // THEME TOGGLE
    // ================================================================

    const themeToggle = document.getElementById('themeToggle');

    const savedTheme = localStorage.getItem('bts-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('light-theme');

        if (document.body.classList.contains('light-theme')) {
            this.textContent = '☀️';
            localStorage.setItem('bts-theme', 'light');
        } else {
            this.textContent = '🌙';
            localStorage.setItem('bts-theme', 'dark');
        }
    });

    // ================================================================
    // INITIAL RENDER
    // ================================================================

    renderCalendar();
});
