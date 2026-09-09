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
    // EVENT FILTER FUNCTION - WITH ANNIVERSARY CALCULATION
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

    // Get the current date
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    // Get elements
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
    // RENDER CALENDAR
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

        // ================================================================
        // PREVIOUS MONTH DAYS (Padding)
        // ================================================================
        const prevMonthStart = daysInPrevMonth - firstDay + 1;
        for (let i = prevMonthStart; i <= daysInPrevMonth; i++) {
            const cell = document.createElement('div');
            cell.className = 'date-cell empty';
            cell.textContent = i;
            grid.appendChild(cell);
        }

        // ================================================================
        // CURRENT MONTH DAYS
        // ================================================================
        for (let i = 1; i <= daysInMonth; i++) {
            const cell = document.createElement('div');
            cell.className = 'date-cell';
            cell.textContent = i;

            // Check if today
            if (
                i === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
            ) {
                cell.classList.add('today');
            }

            // Check for BTS events
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

                // Tooltip on hover
                cell.addEventListener('mouseenter', function (e) {
                    const freshEvents = getEventsForFullDate(currentYear, currentMonth + 1, i);
                    showTooltip(e, freshEvents);
                });
                cell.addEventListener('mouseleave', function (e) {
                    hideTooltip();
                });
            }

            // Check for saved notes
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

            // Click to open note popup
            cell.addEventListener('click', function () {
                openNotePopup(currentYear, currentMonth + 1, i);
            });

            grid.appendChild(cell);
        }

        // ================================================================
        // NEXT MONTH DAYS (Padding to complete the grid)
        // ================================================================
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

        // Show BTS events
        // Check for BTS events
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

            // Tooltip on hover (Desktop)
            cell.addEventListener('mouseenter', function (e) {
                const freshEvents = getEventsForFullDate(currentYear, currentMonth + 1, i);
                showTooltip(e, freshEvents);
            });
            cell.addEventListener('mouseleave', function (e) {
                hideTooltip();
            });

            // Long press / Hard press for mobile
            let pressTimer = null;
            cell.addEventListener('touchstart', function (e) {
                pressTimer = setTimeout(function () {
                    const freshEvents = getEventsForFullDate(currentYear, currentMonth + 1, i);
                    showTooltip(e, freshEvents);
                }, 500); // 500ms = long press
            });
            cell.addEventListener('touchend', function (e) {
                clearTimeout(pressTimer);
            });
            cell.addEventListener('touchmove', function (e) {
                clearTimeout(pressTimer);
            });
        }
        // Load and display notes
        renderNotesList(year, month, day);

        // Clear input and reset height
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

            // Delete button
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

    // Auto-expand textarea on input
    if (noteInput) {
        noteInput.addEventListener('input', function () {
            autoExpand(this);
        });
    }

    // Enter key to add note (with Shift+Enter for new line)
    if (noteInput) {
        noteInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAddNote();
            }
        });
    }

    // Keyboard shortcut: Escape to close
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

        const cell = event.currentTarget;
        const rect = cell.getBoundingClientRect();

        let left = rect.left + rect.width / 2 - 140;
        let top = rect.top - 80;

        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (left < 10) left = 10;
        if (left + 280 > viewportWidth - 10) {
            left = viewportWidth - 290;
        }
        if (top < 10) {
            top = rect.bottom + 10;
        }

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    function hideTooltip() {
        tooltip.classList.remove('visible');
    }

    // ================================================================
    // INITIAL RENDER
    // ================================================================

    renderCalendar();
    // ================================================================
    // THEME TOGGLE
    // ================================================================

    const themeToggle = document.getElementById('themeToggle');

    // Check for saved theme preference
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
}); // END OF DOMContentLoaded
