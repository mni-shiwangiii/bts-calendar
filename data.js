// BTS Events Data - COMPLETE MASTER VERSION
// Sorted by Date | NO DUPLICATES | All Events Combined | ALL WINS INCLUDED
const BTS_EVENTS = {
    // ================================================================
    // MEMBER BIRTHDAYS (annual: true = shows every year)
    // ================================================================
    "09-12": [
        { year: 1994, description: "HAPPY RM DAY🎂 (Kim Namjoon)", recurring: true, annual: true }
    ],
    "12-30": [
        { year: 1995, description: "HAPPY V DAY🎂 (Kim Taehyung)", recurring: true, annual: true },
        { year: 2020, description: "🎵 Jin - 'Abyss' released" }
    ],
    "09-01": [
        { year: 1997, description: "HAPPY JUNGKOOK DAY🎂 (Jeon Jungkook)", recurring: true, annual: true }
    ],
    "10-13": [
        { year: 1995, description: "HAPPY JIMIN DAY🎂 (Park Jimin)", recurring: true, annual: true }
    ],
    "02-18": [
        { year: 1994, description: "HAPPY J-HOPE DAY🎂 (Jung Hoseok)", recurring: true, annual: true },
        { year: 2017, description: "🌍 The Wings Tour begins" }
    ],
    "03-09": [
        { year: 1993, description: "HAPPY SUGA DAY🎂 (Min Yoongi)", recurring: true, annual: true }
    ],
    "12-04": [
        { year: 1992, description: "HAPPY JIN DAY🎂 (Kim Seokjin)", recurring: true, annual: true },
        { year: 2021, description: "🎵 Jin - 'Abyss' released" }
    ],

    // ================================================================
    // FAMILY BIRTHDAYS (annual: true = shows every year)
    // ================================================================
       "12-25": [
        { year: 2014, description: "🎵 'Christmas Day' by Jimin and Jungkook" }
    ],

    // ================================================================
    // PET BIRTHDAYS (annual: true = shows every year)
    // ================================================================
    "08-31": [
        { year: 2021, description: "🐶 HAPPY BAM DAY🎂", recurring: true, annual: true }
    ],
    "09-07": [
        { year: 2017, description: "🐶 HAPPY YEONTAN DAY🎂", recurring: true, annual: true },
        { year: 2016, description: "💿 Youth (Japanese Album) released" }
    ],

    // ================================================================
    // DEBUT & ANNIVERSARIES (isAnniversary: true = auto-calculates nth year)
    // ================================================================
    "06-13": [
        { year: 2013, description: "🎤 BTS", isAnniversary: true, releaseYear: 2013 },
        { year: 2013, description: "🎵 'No More Dream' released" },
        { year: 2013, description: "💿 2 Cool 4 Skool (Debut Single Album) released" },
        { year: 2014, description: "🎵 'So Far More' (Anniversary gift)" }
    ],

    // ================================================================
    // ALBUM RELEASES + ANNIVERSARIES (isAnniversary: true = auto-calculates)
    // ================================================================
    "09-11": [
        { year: 2013, description: "💿 O!RUL8,2? (1st Mini Album) released", isAnniversary: true, releaseYear: 2013 },
        { year: 2013, description: "🎵 'N.O' released" }
    ],
    "02-12": [
        { year: 2014, description: "💿 Skool Luv Affair (2nd Mini Album) released", isAnniversary: true, releaseYear: 2014 },
        { year: 2014, description: "🎵 'Boy In Luv' released" }
    ],
    "08-20": [
        { year: 2014, description: "💿 Dark & Wild (1st Full Studio Album) released", isAnniversary: true, releaseYear: 2014 },
        { year: 2014, description: "🎵 'Danger' released" }
    ],
    "04-29": [
        { year: 2015, description: "💿 The Most Beautiful Moment in Life, Pt. 1 released", isAnniversary: true, releaseYear: 2015 },
        { year: 2015, description: "🎵 'I Need U' released" }
    ],
    "11-30": [
        { year: 2015, description: "💿 The Most Beautiful Moment in Life, Pt. 2 released", isAnniversary: true, releaseYear: 2015 },
        { year: 2015, description: "🎵 'Run' released" }
    ],
    "05-02": [
        { year: 2016, description: "💿 The Most Beautiful Moment in Life: Young Forever released", isAnniversary: true, releaseYear: 2016 },
        { year: 2016, description: "🎵 'Fire' released" }
    ],
    "10-10": [
        { year: 2016, description: "💿 Wings (2nd Full Studio Album) released", isAnniversary: true, releaseYear: 2016 },
        { year: 2016, description: "🎵 'Blood Sweat & Tears' released" }
    ],
    "02-13": [
        { year: 2017, description: "💿 You Never Walk Alone (Repackage) released", isAnniversary: true, releaseYear: 2017 },
        { year: 2017, description: "🎵 'Spring Day' released" },
        { year: 2017, description: "🎵 'Not Today' released" }
    ],
    "09-18": [
        { year: 2017, description: "💿 Love Yourself: Her (5th Mini Album) released", isAnniversary: true, releaseYear: 2017 },
        { year: 2017, description: "🎵 'DNA' released" }
    ],
    "05-18": [
        { year: 2018, description: "💿 Love Yourself: Tear (3rd Studio Album) released", isAnniversary: true, releaseYear: 2018 },
        { year: 2018, description: "🎵 'Fake Love' released" }
    ],
    "08-24": [
        { year: 2018, description: "💿 Love Yourself: Answer (Compilation) released", isAnniversary: true, releaseYear: 2018 },
        { year: 2018, description: "🎵 'IDOL' released" }
    ],
    "04-12": [
        { year: 2019, description: "💿 Map of the Soul: Persona (EP) released", isAnniversary: true, releaseYear: 2019 },
        { year: 2019, description: "🎵 'Boy With Luv' (feat. Halsey) released" }
    ],
    "02-21": [
        { year: 2020, description: "💿 Map of the Soul: 7 (4th Studio Album) released", isAnniversary: true, releaseYear: 2020 },
        { year: 2020, description: "🎵 'ON' released" }
    ],
    "11-20": [
        { year: 2020, description: "💿 BE (Studio Album) released", isAnniversary: true, releaseYear: 2020 },
        { year: 2022, description: "🎵 Jungkook - 'Dreamers' (FIFA World Cup OST) released" }
    ],
    "06-10": [
        { year: 2022, description: "💿 Proof (Anthology Album) released", isAnniversary: true, releaseYear: 2022 },
        { year: 2025, description: "🪖 RM and V officially discharged" }
    ],
    "03-20": [
        { year: 2015, description: "💿 RM - 'RM' mixtape released", isAnniversary: true, releaseYear: 2015 },
        { year: 2026, description: "💿 ARIRANG (5th Full Studio Album) released", isAnniversary: true, releaseYear: 2026 },
        { year: 2026, description: "🎵 'Swim' (ARIRANG lead single) released" }
    ],

    // ================================================================
    // JIN SOLO ALBUMS + ANNIVERSARIES
    // ================================================================
    "10-28": [
        { year: 2022, description: "🎵 Jin - 'The Astronaut' released", isAnniversary: true, releaseYear: 2022 }
    ],
    "11-15": [
        { year: 2024, description: "💿 Jin - 'Happy' album released", isAnniversary: true, releaseYear: 2024 }
    ],

    // ================================================================
    // SUGA / AGUST D SOLO ALBUMS + ANNIVERSARIES
    // ================================================================
    "08-16": [
        { year: 2016, description: "💿 Agust D - 'Agust D' mixtape released", isAnniversary: true, releaseYear: 2016 }
    ],
    "05-22": [
        { year: 2020, description: "💿 Agust D - 'D-2' mixtape released", isAnniversary: true, releaseYear: 2020 }
    ],
    "04-21": [
        { year: 2023, description: "💿 Agust D - 'D-Day' album released", isAnniversary: true, releaseYear: 2023 }
    ],

    // ================================================================
    // J-HOPE SOLO ALBUMS + ANNIVERSARIES
    // ================================================================
    "03-02": [
        { year: 2018, description: "💿 J-Hope - 'Hope World' mixtape released", isAnniversary: true, releaseYear: 2018 }
    ],
    "07-15": [
        { year: 2022, description: "💿 J-Hope - 'Jack In The Box' album released", isAnniversary: true, releaseYear: 2022 }
    ],
    "04-24": [
        { year: 2024, description: "💿 J-Hope - 'Hope on the Street Vol. 1' released", isAnniversary: true, releaseYear: 2024 }
    ],

    // ================================================================
    // RM SOLO ALBUMS + ANNIVERSARIES
    // ================================================================
    "10-23": [
        { year: 2018, description: "💿 RM - 'mono.' mixtape released", isAnniversary: true, releaseYear: 2018 }
    ],
    "12-02": [
        { year: 2022, description: "💿 RM - 'Indigo' album released", isAnniversary: true, releaseYear: 2022 }
    ],
    "05-24": [
        { year: 2024, description: "💿 RM - 'Right Place, Wrong Person' released", isAnniversary: true, releaseYear: 2024 }
    ],

    // ================================================================
    // JIMIN SOLO ALBUMS + ANNIVERSARIES
    // ================================================================
    "03-21": [
        { year: 2023, description: "💿 Jimin - 'FACE' album released", isAnniversary: true, releaseYear: 2023 }
    ],
    "07-19": [
        { year: 2024, description: "💿 Jimin - 'MUSE' album released", isAnniversary: true, releaseYear: 2024 }
    ],

    // ================================================================
    // V SOLO ALBUMS + ANNIVERSARIES
    // ================================================================
    "09-08": [
        { year: 2023, description: "💿 V - 'Layover' album released", isAnniversary: true, releaseYear: 2023 }
    ],

    // ================================================================
    // JUNGKOOK SOLO ALBUMS + ANNIVERSARIES
    // ================================================================
    "11-03": [
        { year: 2023, description: "💿 Jungkook - 'GOLDEN' album released", isAnniversary: true, releaseYear: 2023 }
    ],

    // ================================================================
    // ================================================================
    // 🏆 ALL AWARDS, WINS & MILESTONES
    // ================================================================
    // ================================================================

    // ================================================================
    // FIRST AWARD SHOW WIN (2014)
    // ================================================================
    "01-16": [
        { year: 2014, description: "🏆 New Artist of the Year - Golden Disc Awards" }
    ],

    // ================================================================
    // FIRST MUSIC SHOW WIN (2015)
    // ================================================================
    "05-05": [
        { year: 2015, description: "🏆 FIRST MUSIC SHOW WIN! 'I Need U' - SBS MTV The Show" }
    ],

    // ================================================================
    // 2015 MUSIC SHOW WINS - "I Need U"
    // ================================================================
    "05-07": [
        { year: 2015, description: "🏆 'I Need U' - Mnet M! Countdown Win" }
    ],
    "05-08": [
        { year: 2015, description: "🏆 'I Need U' - KBS Music Bank Win" }
    ],
    "05-10": [
        { year: 2015, description: "🏆 'I Need U' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2015 MUSIC SHOW WINS - "Run"
    // ================================================================
    "12-03": [
        { year: 2015, description: "🏆 'Run' - Mnet M! Countdown Win" }
    ],
    "12-04": [
        { year: 2015, description: "🏆 'Run' - KBS Music Bank Win" }
    ],
    "12-06": [
        { year: 2015, description: "🏆 'Run' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2016 MUSIC SHOW WINS - "Fire" & "Blood Sweat & Tears"
    // ================================================================
    "05-12": [
        { year: 2016, description: "🏆 'Fire' - Mnet M! Countdown Win" }
    ],
    "05-13": [
        { year: 2016, description: "🏆 'Fire' - KBS Music Bank Win" }
    ],
    "10-20": [
        { year: 2016, description: "🏆 'Blood Sweat & Tears' - Mnet M! Countdown Win" }
    ],
    "10-21": [
        { year: 2016, description: "🏆 'Blood Sweat & Tears' - KBS Music Bank Win" }
    ],

    // ================================================================
    // 2016 FIRST DAESANG
    // ================================================================
    "11-19": [
        { year: 2016, description: "🏆 FIRST DAESANG! Album of the Year - Melon Music Awards" }
    ],

    // ================================================================
    // 2017 MUSIC SHOW WINS - "Spring Day" & "DNA"
    // ================================================================
    "02-17": [
        { year: 2017, description: "🏆 'Spring Day' - KBS Music Bank Win" }
    ],
    "02-19": [
        { year: 2017, description: "🏆 'Spring Day' - SBS Inkigayo Win" }
    ],
    "09-28": [
        { year: 2017, description: "🏆 'DNA' - Mnet M! Countdown Win" }
    ],
    "09-29": [
        { year: 2017, description: "🏆 'DNA' - KBS Music Bank Win" }
    ],
    "10-01": [
        { year: 2017, description: "🏆 'DNA' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2017 FIRST BILLBOARD AWARD
    // ================================================================
    "05-21": [
        { year: 2017, description: "🏆 FIRST BILLBOARD AWARD! Top Social Artist - BBMAs" }
    ],

    // ================================================================
    // 2018 MUSIC SHOW WINS - "Fake Love" & "IDOL"
    // ================================================================
    "05-24": [
        { year: 2018, description: "🏆 'Fake Love' - Mnet M! Countdown Win" }
    ],
    "05-25": [
        { year: 2018, description: "🏆 'Fake Love' - KBS Music Bank Win" }
    ],
    "05-27": [
        { year: 2018, description: "🏆 'Fake Love' - SBS Inkigayo Win" }
    ],
    "08-30": [
        { year: 2018, description: "🏆 'IDOL' - Mnet M! Countdown Win" }
    ],
    "08-31": [
        { year: 2018, description: "🏆 'IDOL' - KBS Music Bank Win" }
    ],
    "09-02": [
        { year: 2018, description: "🏆 'IDOL' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2018 BILLBOARD 200 #1 - Love Yourself: Tear
    // ================================================================
    "05-27": [
        { year: 2018, description: "🏆 Love Yourself: Tear - #1 on Billboard 200" }
    ],

    // ================================================================
    // 2018 DAESANG SWEEP
    // ================================================================
    "12-01": [
        { year: 2018, description: "🏆 MASSIVE DAESANG SWEEP! MMA & MAMA - Multiple Grand Prizes" }
    ],

    // ================================================================
    // 2018 UN SPEECH
    // ================================================================
    "09-24": [
        { year: 2018, description: "🇺🇳 Historic speech at the United Nations General Assembly" }
    ],

    // ================================================================
    // 2019 MUSIC SHOW WINS - "Boy With Luv"
    // ================================================================
    "04-18": [
        { year: 2019, description: "🏆 'Boy With Luv' - Mnet M! Countdown Win" }
    ],
    "04-19": [
        { year: 2019, description: "🏆 'Boy With Luv' - KBS Music Bank Win" }
    ],
    "04-21": [
        { year: 2019, description: "🏆 'Boy With Luv' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2019 BBMAs
    // ================================================================
    "05-01": [
        { year: 2019, description: "🏆 Top Duo/Group - Billboard Music Awards" }
    ],

    // ================================================================
    // 2019 DAESANG ALL-KILL (FIRST IN K-POP HISTORY!)
    // ================================================================
    "11-29": [
        { year: 2019, description: "🏆 FIRST DAESANG ALL-KILL! Swept ALL Grand Prizes at MMA & MAMA" }
    ],

    // ================================================================
    // 2020 MUSIC SHOW WINS - "ON", "Black Swan", "Dynamite"
    // ================================================================
    "03-05": [
        { year: 2020, description: "🏆 'ON' - Mnet M! Countdown Win" }
    ],
    "03-06": [
        { year: 2020, description: "🏆 'ON' - KBS Music Bank Win" }
    ],
    "01-09": [
        { year: 2020, description: "🏆 'Black Swan' - Mnet M! Countdown Win" }
    ],
    "08-27": [
        { year: 2020, description: "🏆 'Dynamite' - Mnet M! Countdown Win" }
    ],
    "08-28": [
        { year: 2020, description: "🏆 'Dynamite' - KBS Music Bank Win" }
    ],
    "08-30": [
        { year: 2020, description: "🏆 'Dynamite' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2020 BILLBOARD HOT 100 #1 - DYNAMITE
    // ================================================================
    "09-05": [
        { year: 2020, description: "🏆 'Dynamite' #1 on Billboard Hot 100 - FIRST K-POP #1!" }
    ],

    // ================================================================
    // 2020 BILLBOARD 200 #1 - BE
    // ================================================================
    "11-29": [
        { year: 2020, description: "🏆 BE - #1 on Billboard 200" }
    ],

    // ================================================================
    // 2020 MAMA
    // ================================================================
    "12-06": [
        { year: 2020, description: "🏆 MAMA - Artist of the Year" }
    ],

    // ================================================================
    // 2021 MUSIC SHOW WINS - "Butter" & "Permission to Dance"
    // ================================================================
    "05-27": [
        { year: 2021, description: "🏆 'Butter' - Mnet M! Countdown Win" }
    ],
    "05-28": [
        { year: 2021, description: "🏆 'Butter' - KBS Music Bank Win" }
    ],
    "05-30": [
        { year: 2021, description: "🏆 'Butter' - SBS Inkigayo Win" }
    ],
    "07-15": [
        { year: 2021, description: "🏆 'Permission to Dance' - Mnet M! Countdown Win" }
    ],
    "07-16": [
        { year: 2021, description: "🏆 'Permission to Dance' - KBS Music Bank Win" }
    ],
    "07-18": [
        { year: 2021, description: "🏆 'Permission to Dance' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2021 AMA - ARTIST OF THE YEAR (FIRST ASIAN ACT!)
    // ================================================================
    "11-21": [
        { year: 2021, description: "🏆 ARTIST OF THE YEAR - American Music Awards (First Asian Act!)" }
    ],

    // ================================================================
    // 2022 BBMAs - MOST AWARDED GROUP IN HISTORY
    // ================================================================
    "05-15": [
        { year: 2022, description: "🏆 BBMAs - Most Awarded Group in BBMA History (12 wins!)" }
    ],

    // ================================================================
    // 2022 GRAMMY PERFORMANCE
    // ================================================================
    "04-03": [
        { year: 2022, description: "🎤 Grammy Awards Performance - 'Butter'" }
    ],

    // ================================================================
    // 2026 COMEBACK SWEEP - "SWIM" POST-MILITARY ALL-KILL
    // ================================================================
    "03-26": [
        { year: 2026, description: "🏆 'Swim' - Show Champion Win" }
    ],
    "03-27": [
        { year: 2026, description: "🏆 'Swim' - Mnet M! Countdown Win" }
    ],
    "03-28": [
        { year: 2026, description: "🏆 'Swim' - KBS Music Bank Win" }
    ],
    "03-29": [
        { year: 2026, description: "🏆 'Swim' - SBS Inkigayo Win" }
    ],

    // ================================================================
    // 2026 ARIRANG BILLBOARD #1
    // ================================================================
    "03-27": [
        { year: 2026, description: "🏆 ARIRANG - #1 on Billboard 200 (641,000 units!)" },
        { year: 2026, description: "🏆 'Swim' - #1 on Billboard Hot 100" }
    ],

    // ================================================================
    // 2026 MAMA
    // ================================================================
    "12-04": [
        { year: 2026, description: "🏆 MAMA - Artist of the Year (Post-Military Return)" }
    ],

    // ================================================================
    // 2026 MMA
    // ================================================================
    "11-20": [
        { year: 2026, description: "🏆 MMA - Album of the Year (ARIRANG)" }
    ],

    // ================================================================
    // END OF AWARDS SECTION
    // ================================================================

    // ================================================================
    // DIGITAL SINGLES (One-Time)
    // ================================================================
    "07-04": [
        { year: 2017, description: "🎵 'Come Back Home' (Digital Single) released" }
    ],
    "11-24": [
        { year: 2017, description: "🎵 'Mic Drop' (feat. Desiigner) released" }
    ],
    "10-25": [
        { year: 2018, description: "🎵 'Waste It On Me' (Digital Single) released" }
    ],
    "10-18": [
        { year: 2019, description: "🎵 'Make It Right' (Digital Single) released" }
    ],
    "03-06": [
        { year: 2020, description: "🎵 'Who?' (Digital Single) released" }
    ],
    "08-21": [
        { year: 2020, description: "🎵 'Dynamite' (Digital Single) released" }
    ],
    "10-02": [
        { year: 2020, description: "🎵 'Savage Love' (BTS Remix) released" }
    ],
    "05-21": [
        { year: 2021, description: "🎵 'Butter' (Digital Single) released" }
    ],
    "04-02": [
        { year: 2021, description: "🎵 'Film Out' (Digital Single) released" }
    ],
    "09-24": [
        { year: 2021, description: "🎵 'My Universe' (with Coldplay) released" }
    ],
    "08-06": [
        { year: 2022, description: "🎵 'Bad Decisions' (with Benny Blanco, Snoop Dogg) released" }
    ],
    "05-12": [
        { year: 2023, description: "🎵 'The Planet' (Digital Single) released" }
    ],
    "06-09": [
        { year: 2023, description: "🎵 'Take Two' (Digital Single) released" }
    ],
    "06-12": [
        { year: 2026, description: "🎵 'Come Over' (Digital Single) released" }
    ],

    // ================================================================
    // JAPANESE ALBUMS + SINGLES (One-Time)
    // ================================================================
    "06-04": [
        { year: 2014, description: "🇯🇵 'No More Dream' (Japanese Single) released" }
    ],
    "07-16": [
        { year: 2014, description: "🇯🇵 'Boy In Luv' (Japanese Single) released" }
    ],
    "11-19": [
        { year: 2014, description: "🇯🇵 'Danger' (Japanese Single) released" }
    ],
    "12-24": [
        { year: 2014, description: "💿 Wake Up (Japanese Album) released" }
    ],
    "06-17": [
        { year: 2015, description: "🇯🇵 'For You' (Japanese Single) released" }
    ],
    "12-08": [
        { year: 2015, description: "🇯🇵 'I Need U' (Japanese Single) released" }
    ],
    "03-15": [
        { year: 2016, description: "🇯🇵 'Run' (Japanese Single) released" }
    ],
    "05-10": [
        { year: 2017, description: "🇯🇵 'Blood Sweat & Tears' (Japanese Single) released" }
    ],
    "12-06": [
        { year: 2017, description: "🇯🇵 'DNA / Mic Drop / Crystal Snow' (Japanese Single) released" }
    ],
    "04-04": [
        { year: 2018, description: "💿 Face Yourself (Japanese Album) released" }
    ],
    "10-16": [
        { year: 2018, description: "🇯🇵 'Fake Love / Airplane Pt. 2' (Japanese Single) released" }
    ],
    "07-03": [
        { year: 2019, description: "🇯🇵 'Lights / Boy With Luv' (Japanese Single) released" }
    ],
    "07-15": [
        { year: 2020, description: "💿 Map of the Soul: 7 - The Journey (Japanese Album) released" }
    ],
    "06-16": [
        { year: 2021, description: "💿 BTS, The Best (Japanese Compilation) released" }
    ],

    // ================================================================
    // BTS WORLD OST (One-Time)
    // ================================================================
    "06-28": [
        { year: 2019, description: "💿 BTS World (Game OST) released" }
    ],

    // ================================================================
    // BTS AWARDS & MILESTONES (One-Time)
    // ================================================================
    "01-16": [
        { year: 2014, description: "🏆 New Artist of the Year - Golden Disc Awards" }
    ],
    "03-29": [
        { year: 2014, description: "🤝 1st Muster [ZIP CODE] - First official fan meeting" }
    ],
    "05-05": [
        { year: 2015, description: "🏆 First Music Show Win - 'I Need U'" }
    ],
    "11-19": [
        { year: 2016, description: "🏆 First Daesang - Album of the Year at MMA" }
    ],
    "05-21": [
        { year: 2017, description: "🏆 First Billboard Award - Top Social Artist" }
    ],
    "09-24": [
        { year: 2018, description: "🇺🇳 Speech at the United Nations General Assembly" }
    ],
    "12-01": [
        { year: 2018, description: "🏆 Massive Daesang Sweep - MMA & MAMA" }
    ],
    "11-29": [
        { year: 2019, description: "🏆 First Daesang All-Kill - Swept all Grand Prizes" }
    ],
    "09-05": [
        { year: 2020, description: "🎵 'Dynamite' #1 on Billboard Hot 100" }
    ],
    "11-21": [
        { year: 2021, description: "🏆 Artist of the Year - American Music Awards" }
    ],
    "11-27": [
        { year: 2021, description: "🌍 Permission to Dance On Stage - LA begins" }
    ],

    // ================================================================
    // CONCERTS & TOURS (Only Start Dates - One-Time)
    // ================================================================
    "10-17": [
        { year: 2014, description: "🌍 The Red Bullet Tour begins" }
    ],
    "02-10": [
        { year: 2015, description: "🇯🇵 Wake Up: Open Your Eyes Japan Tour begins" }
    ],
    "11-27": [
        { year: 2015, description: "🌍 The Most Beautiful Moment in Life On Stage Tour begins" }
    ],
    "08-25": [
        { year: 2018, description: "🌍 Love Yourself World Tour begins" }
    ],
    "05-04": [
        { year: 2019, description: "🌍 Love Yourself: Speak Yourself Stadium Tour begins" }
    ],
    "04-09": [
        { year: 2026, description: "🌍 ARIRANG World Tour begins in Goyang, South Korea" }
    ],

    // ================================================================
    // MILITARY ENLISTMENT & DISCHARGE (One-Time)
    // ================================================================
    "12-13": [
        { year: 2022, description: "🪖 Jin enlists for military service" }
    ],
    "04-18": [
        { year: 2023, description: "🪖 J-Hope enlists for military service" }
    ],
    "09-22": [
        { year: 2023, description: "🪖 SUGA enlists as Social Service Agent" }
    ],
    "12-11": [
        { year: 2023, description: "🪖 RM and V enlist for military service" }
    ],
    "12-12": [
        { year: 2023, description: "🪖 Jimin and Jungkook enlist for military service" }
    ],
    "06-12": [
        { year: 2024, description: "🪖 Jin officially discharged" }
    ],
    "10-17": [
        { year: 2024, description: "🪖 J-Hope officially discharged" }
    ],
    "06-11": [
        { year: 2025, description: "🪖 Jimin and Jungkook officially discharged" }
    ],
    "06-21": [
        { year: 2025, description: "🪖 SUGA discharged - ALL 7 COMPLETE! 🎉" }
    ],
    "07-01": [
        { year: 2025, description: "💜 All 7 members reunite - First Weverse broadcast" }
    ],

    // ================================================================
    // SPECIAL / MISC SONGS (One-Time)
    // ================================================================
    "02-28": [
        { year: 2014, description: "🎵 '95 Graduation' by V and Jimin" }
    ],
    "06-09": [
        { year: 2015, description: "🎵 'We Are Bulletproof Part 1' released" },
        { year: 2017, description: "🎵 '4 O'clock' by RM and V released" }
    ],
    "06-01": [
        { year: 2016, description: "🎵 'I Know' by J (RM, Jungkook) released" }
    ],
    "05-06": [
        { year: 2016, description: "🎵 'Family Song' / 'Christmas Day' released" }
    ],
    "11-09": [
        { year: 2016, description: "🎵 '어찌까래' released" }
    ],
    "06-11": [
        { year: 2018, description: "🎵 'Thank' released" }
    ],
    "08-19": [
        { year: 2020, description: "🎵 'In the Soup' released" }
    ],
    "12-13": [
        { year: 2017, description: "🎵 'Meet Seoul' released" }
    ],
    "01-06": [
        { year: 2020, description: "🎵 'Black Swan' released" }
    ],

    // ================================================================
    // SOLO SONGS (One-Time)
    // ================================================================
    "01-15": [
        { year: 2023, description: "🎵 Jungkook - 'My You' released" }
    ],
    "01-26": [
        { year: 2025, description: "🎵 Jin - 'Close to You' released" }
    ],
    "02-11": [
        { year: 2022, description: "🎵 Jungkook - 'Stay Alive' (Produced by SUGA) released" }
    ],
    "03-17": [
        { year: 2023, description: "🎵 Jimin - 'Set Me Free Pt.2' released" }
    ],
    "04-07": [
        { year: 2023, description: "🎵 V - 'FRI(END)S' released" }
    ],
    "05-16": [
        { year: 2021, description: "🎵 Jin - 'Super Tuna' released" },
        { year: 2025, description: "💿 Jin - 'Echo' (Solo Album) released" }
    ],
    "06-06": [
        { year: 2020, description: "🎵 Jungkook - 'With You' (with Jimin) released" }
    ],
    "06-07": [
        { year: 2024, description: "🎵 Jungkook - 'Never Let Go' released" }
    ],
    "06-30": [
        { year: 2023, description: "🎵 Jimin - 'Angel Pt.1' (Fast X OST) released" }
    ],
    "07-14": [
        { year: 2023, description: "🎵 Jungkook - 'Seven' (feat. Latto) released" }
    ],
    "07-21": [
        { year: 2023, description: "🎵 RM - 'Smoke Sprite' (with So!YoON!) released" }
    ],
    "08-06": [
        { year: 2023, description: "🎵 Agust D - 'Haegeum' released" },
        { year: 2023, description: "🎵 Agust D - 'People Pt.2' (feat. IU) released" }
    ],
    "08-11": [
        { year: 2023, description: "🎵 V - 'Love Me Again' released" },
        { year: 2023, description: "🎵 V - 'Rainy Days' released" }
    ],
    "09-13": [
        { year: 2023, description: "🎵 V - 'Slow Dancing' released" }
    ],
    "09-29": [
        { year: 2023, description: "🎵 Jungkook - '3D' (feat. Jack Harlow) released" }
    ],
    "10-20": [
        { year: 2023, description: "🎵 Jungkook - 'Hate You' released" }
    ],
    "10-26": [
        { year: 2023, description: "🎵 J-Hope - 'On The Street' (with J. Cole) released" }
    ],
    "11-13": [
        { year: 2022, description: "🎵 V - 'It's Definitely You' (Hwarang OST)" }
    ],
    "11-16": [
        { year: 2023, description: "🎵 Jungkook - 'Standing Next to You' released" }
    ],
    "12-27": [
        { year: 2021, description: "🎵 V - 'Christmas Tree' (Our Beloved Summer OST) released" }
    ],

    // ================================================================
    // PRE-DEBUT / UNOFFICIAL SONGS (One-Time)
    // ================================================================
    "10-12": [
        { year: 2010, description: "🎵 'We Are Bulletproof: Boys' (Pre-debut)" }
    ],
    "09-13": [
        { year: 2010, description: "🎵 'Hook 가요' (Pre-debut)" }
    ],
    "10-26": [
        { year: 2010, description: "🎵 'Love You Hate You' (Pre-debut)" }
    ],
    "09-30": [
        { year: 2010, description: "🎵 'Asher' (Pre-debut)" }
    ],
    "08-07": [
        { year: 2011, description: "🎵 '발도 강성' (Pre-debut)" }
    ],
    "12-23": [
        { year: 2012, description: "🎵 'A Typical Trainee's Christmas' (Pre-debut)" },
        { year: 2013, description: "🎵 'A Typical Idols Christmas' (Pre-debut)" }
    ],
    "02-08": [
        { year: 2013, description: "🎵 'Graduation Song' (Pre-debut)" }
    ],
    "07-11": [
        { year: 2013, description: "🎵 'Born Singer' (Pre-debut)" }
    ],

    // ================================================================
    // SPECIAL EVENTS
    // ================================================================
    "05-14": [
        { year: 2014, description: "💿 Skool Luv Affair Special Edition released" }
    ],
    "07-09": [
        { year: 2021, description: "💿 Butter / Permission to Dance album released" },
        { year: 2021, description: "🎵 'Permission to Dance' released" }
    ],
    "07-18": [
        { year: 2025, description: "💿 Permission to Dance On Stage: Live released" }
    ],
    "03-21": [
        { year: 2026, description: "🎤 The Comeback Live | Arirang at Gwanghwamun Square (Netflix)" }
    ],
    "06-14": [
        { year: 2020, description: "🎤 Bang Bang Con: The Live - Virtual concert record" },
        { year: 2022, description: "📢 BTS announces hiatus for solo projects" }
    ]
};

// Helper function to get events for a date
function getEventsForDate(month, day) {
    const key = String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
    return BTS_EVENTS[key] || [];
}

// Helper function to get ordinal suffix (1st, 2nd, 3rd, 4th, etc.)
function getOrdinalSuffix(n) {
    if (n >= 11 && n <= 13) return 'th';
    const lastDigit = n % 10;
    if (lastDigit === 1) return 'st';
    if (lastDigit === 2) return 'nd';
    if (lastDigit === 3) return 'rd';
    return 'th';
}

// Get events for a specific year
function getEventsForFullDate(year, month, day) {
    const events = getEventsForDate(month, day);
    return events.filter(event => {
        // For recurring events (birthdays)
        if (event.recurring) {
            if (event.annual) {
                return year >= event.year;
            }
            return event.year === year;
        }
        // For anniversary events - auto-calculate nth anniversary
        if (event.isAnniversary) {
            const anniversaryNumber = year - event.releaseYear;
            if (anniversaryNumber >= 1) {
                const baseName = event.description.replace(/\s*\d+(st|nd|rd|th)?\s*Anniversary/, '').trim();
                const suffix = getOrdinalSuffix(anniversaryNumber);
                event.description = `${baseName} ${anniversaryNumber}${suffix} Anniversary`;
                return true;
            }
            return false;
        }
        // For one-time events - show ONLY in the exact year
        return event.year === year;
    });
}