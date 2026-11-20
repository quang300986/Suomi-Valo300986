
const translations = {
    en: {
        welcome: "Welcome Back!",
        subtitle: "Choose your learning activity.",
        dictation: "Daily Dictation",
        dictationDesc: "Listen and Write",
        vocabulary: "Vocabulary",
        vocabularyDesc: "Learn New Words",
        grammar: "Grammar",
        grammarDesc: "Learn Finnish Grammar",
        listening: "Listening & Speaking",
        listeningDesc: "Improve Your Skills",
        yki: "YKI Preparation",
        ykiDesc: "Prepare for YKI",
        choose: "Choose a lesson to start.",
        listen: "Listen",
        write: "Write what you hear:",
        check: "Check Answer",
        next: "Next Exercise",
        correct: "Correct! Well done!",
        incorrect: "Try again!",
        answer: "Your answer",
        exercise: "Exercise",
        finnish: "Finnish",
        english: "English",
        vietnamese: "Vietnamese"
    },
    vi: {
        welcome: "Chào mừng bạn trở lại!",
        subtitle: "Hãy chọn hoạt động học tập.",
        dictation: "Luyện nghe viết",
        dictationDesc: "Nghe và viết",
        vocabulary: "Từ vựng",
        vocabularyDesc: "Học từ mới",
        grammar: "Ngữ pháp",
        grammarDesc: "Học ngữ pháp Phần Lan",
        listening: "Nghe và nói",
        listeningDesc: "Cải thiện kỹ năng",
        yki: "Luyện thi YKI",
        ykiDesc: "Chuẩn bị kỳ thi YKI",
        choose: "Chọn một bài học để bắt đầu.",
        listen: "Nghe",
        write: "Viết câu bạn nghe được:",
        check: "Kiểm tra đáp án",
        next: "Bài tiếp theo",
        correct: "Chính xác! Làm tốt lắm!",
        incorrect: "Hãy thử lại nhé!",
        answer: "Câu trả lời của bạn",
        exercise: "Bài tập",
        finnish: "Tiếng Phần Lan",
        english: "Tiếng Anh",
        vietnamese: "Tiếng Việt"
    },
    fi: {
        welcome: "Tervetuloa takaisin!",
        subtitle: "Valitse harjoitus.",
        dictation: "Saneluharjoitus",
        dictationDesc: "Kuuntele ja kirjoita",
        vocabulary: "Sanasto",
        vocabularyDesc: "Opiskele uusia sanoja",
        grammar: "Kielioppi",
        grammarDesc: "Opiskele suomen kielioppia",
        listening: "Kuuntelu ja puhuminen",
        listeningDesc: "Harjoittele taitojasi",
        yki: "YKI-harjoittelu",
        ykiDesc: "Valmistaudu YKI-kokeeseen",
        choose: "Valitse oppitunti.",
        listen: "Kuuntele",
        write: "Kirjoita kuulemasi lause:",
        check: "Tarkista vastaus",
        next: "Seuraava harjoitus",
        correct: "Oikein! Hienosti tehty!",
        incorrect: "Yritä uudelleen!",
        answer: "Vastauksesi",
        exercise: "Harjoitus",
        finnish: "Suomi",
        english: "Englanti",
        vietnamese: "Vietnam"
    }
};

let currentLanguage = "en";
let currentLesson = 0;

const dictationLessons = [
    {
        fi: "Minä asun Porissa.",
        en: "I live in Pori.",
        vi: "Tôi sống ở Pori."
    },
    {
        fi: "Tänään on kylmä sää.",
        en: "Today the weather is cold.",
        vi: "Hôm nay thời tiết lạnh."
    },
    {
        fi: "Minä opiskelen suomea joka päivä.",
        en: "I study Finnish every day.",
        vi: "Tôi học tiếng Phần Lan mỗi ngày."
    },
    {
        fi: "Perheeni asuu Suomessa.",
        en: "My family lives in Finland.",
        vi: "Gia đình tôi sống ở Phần Lan."
    },
    {
        fi: "Minä menen aamulla kouluun.",
        en: "I go to school in the morning.",
        vi: "Tôi đi học vào buổi sáng."
    }
];

function setLanguage(language) {
    currentLanguage = language;

    const t = translations[language];

    document.documentElement.lang = language;

    document.getElementById("welcome").textContent = t.welcome;
    document.getElementById("subtitle").textContent = t.subtitle;

    const sections = [
        ["dictation", "dictationDesc"],
        ["vocabulary", "vocabularyDesc"],
        ["grammar", "grammarDesc"],
        ["listening", "listeningDesc"],
        ["yki", "ykiDesc"]
    ];

    sections.forEach(([name, desc]) => {
        document.getElementById("menu-" + name).textContent = t[name];
        document.getElementById("desc-" + name).textContent = t[desc];
    });

    const lesson = document.getElementById("lesson");

    if (lesson.dataset.type === "dictation") {
        showDictation();
    } else {
        lesson.innerHTML = `
            <h2>🇫🇮 Aloitetaan!</h2>
            <p>${t.choose}</p>
        `;
        lesson.dataset.type = "";
    }
}

function showDictation() {
    const t = translations[currentLanguage];
    const lesson = document.getElementById("lesson");

    lesson.dataset.type = "dictation";

    lesson.innerHTML = `
        <h2>🎧 ${t.dictation}</h2>
        <p>${t.exercise} ${currentLesson + 1} / ${dictationLessons.length}</p>

        <button onclick="speakFinnish()">🔊 ${t.listen}</button>

        <p>${t.write}</p>

        <textarea id="answer"
            placeholder="${t.answer}..."
            rows="3"
            style="width:100%;padding:12px;border-radius:10px;font-size:16px;">
        </textarea>

        <button onclick="checkAnswer()">✓ ${t.check}</button>

        <div id="result"></div>

        <button onclick="nextLesson()">➜ ${t.next}</button>
    `;
}

function checkAnswer() {
    const t = translations[currentLanguage];

    const answer = document.getElementById("answer").value
        .trim().toLowerCase()
        .replace(/[.!?]+$/g, "")
        .replace(/\s+/g, " ");

    const correct = dictationLessons[currentLesson].fi
        .toLowerCase().replace(/[.!?]+$/g, "")
        .replace(/\s+/g, " ");

    const lesson = dictationLessons[currentLesson];

    document.getElementById("result").innerHTML = `
        <hr>
        <h3>${answer === correct ? "🎉 " + t.correct : "💪 " + t.incorrect}</h3>
        <p>🇫🇮 ${lesson.fi}</p>
        <p>🇬🇧 ${lesson.en}</p>
        <p>🇻🇳 ${lesson.vi}</p>
    `;
}

function nextLesson() {
    currentLesson = (currentLesson + 1) % dictationLessons.length;
    showDictation();
}

function openLesson(name) {
    if (name === "dictation") {
        showDictation();
        return;
    }

    const t = translations[currentLanguage];

    const titles = {
        vocabulary: t.vocabulary,
        grammar: t.grammar,
        listening: t.listening,
        yki: t.yki
    };

    const lesson = document.getElementById("lesson");
    lesson.dataset.type = name;

    lesson.innerHTML = `
        <h2>${titles[name]}</h2>
        <p>${t.choose}</p>
    `;

    lesson.scrollIntoView({ behavior: "smooth" });
}
