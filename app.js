
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
        back: "Back",
        chooseTopic: "Choose a topic",
        chooseLevel: "Choose your level",
        comingSoon: "Lessons coming soon!",
        completed: "You completed this level!"
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
        back: "Quay lại",
        chooseTopic: "Chọn chủ đề",
        chooseLevel: "Chọn trình độ",
        comingSoon: "Bài học đang được chuẩn bị!",
        completed: "Bạn đã hoàn thành cấp độ này!"
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
        back: "Takaisin",
        chooseTopic: "Valitse aihe",
        chooseLevel: "Valitse taso",
        comingSoon: "Harjoitukset tulossa pian!",
        completed: "Olet suorittanut tämän tason!"
    }
};

let currentLanguage = "en";
let currentLesson = 0;
let selectedTopic = null;
let selectedLevel = null;
let activeLessons = [];

const dictationTopics = [
    { id: "greetings", fi: "Tervehdykset", en: "Greetings", vi: "Chào hỏi" },
    { id: "family", fi: "Perhe", en: "Family", vi: "Gia đình" },
    { id: "home", fi: "Koti", en: "Home", vi: "Nhà cửa" },
    { id: "food", fi: "Ruoka", en: "Food", vi: "Thức ăn" },
    { id: "work", fi: "Työ ja ammatti", en: "Work and profession", vi: "Công việc" },
    { id: "daily", fi: "Arkipäivä", en: "Daily life", vi: "Sinh hoạt hằng ngày" },
    { id: "weather", fi: "Sää", en: "Weather", vi: "Thời tiết" },
    { id: "shopping", fi: "Kauppa", en: "Shopping", vi: "Mua sắm" }
];

const dictationLessons = [
    {
        topic: "home",
        level: "A1.1",
        fi: "Minä asun Porissa.",
        en: "I live in Pori.",
        vi: "Tôi sống ở Pori."
    },
    {
        topic: "weather",
        level: "A1.1",
        fi: "Tänään on kylmä sää.",
        en: "Today the weather is cold.",
        vi: "Hôm nay thời tiết lạnh."
    },
    {
        topic: "daily",
        level: "A1.2",
        fi: "Minä opiskelen suomea joka päivä.",
        en: "I study Finnish every day.",
        vi: "Tôi học tiếng Phần Lan mỗi ngày."
    },
    {
        topic: "family",
        level: "A1.1",
        fi: "Perheeni asuu Suomessa.",
        en: "My family lives in Finland.",
        vi: "Gia đình tôi sống ở Phần Lan."
    },
    {
        topic: "daily",
        level: "A1.1",
        fi: "Minä menen aamulla kouluun.",
        en: "I go to school in the morning.",
        vi: "Tôi đi học vào buổi sáng."
    }
] 
{ topic: "greetings", level: "A1.1", text: "Hei!" },
{ topic: "greetings", level: "A1.1", text: "Hyvää huomenta!" },
{ topic: "greetings", level: "A1.1", text: "Hyvää päivää!" },
{ topic: "greetings", level: "A1.1", text: "Hyvää iltaa!" },
{ topic: "greetings", level: "A1.1", text: "Hyvää yötä!" },
{ topic: "greetings", level: "A1.1", text: "Moi, mitä kuuluu?" },
{ topic: "greetings", level: "A1.1", text: "Kiitos, hyvää." },
{ topic: "greetings", level: "A1.1", text: "Entä sinulle?" },
{ topic: "greetings", level: "A1.1", text: "Näkemiin!" },
{ topic: "greetings", level: "A1.1", text: "Hei hei!" },

{ topic: "greetings", level: "A1.2", text: "Hauska tutustua." },
{ topic: "greetings", level: "A1.2", text: "Mikä sinun nimesi on?" },
{ topic: "greetings", level: "A1.2", text: "Minun nimeni on Anna." },
{ topic: "greetings", level: "A1.2", text: "Mistä sinä olet kotoisin?" },
{ topic: "greetings", level: "A1.2", text: "Olen Vietnamista." },
{ topic: "greetings", level: "A1.2", text: "Missä sinä asut?" },
{ topic: "greetings", level: "A1.2", text: "Asun Porissa." },
{ topic: "greetings", level: "A1.2", text: "Kuinka vanha sinä olet?" },
{ topic: "greetings", level: "A1.2", text: "Olen kolmekymmentä vuotta vanha." },
{ topic: "greetings", level: "A1.2", text: "Nähdään huomenna!" },

{ topic: "greetings", level: "A2", text: "Mitä sinulle kuuluu tänään?" },
{ topic: "greetings", level: "A2", text: "Minulla menee ihan hyvin." },
{ topic: "greetings", level: "A2", text: "Onpa mukava nähdä sinua!" },
{ topic: "greetings", level: "A2", text: "En ole nähnyt sinua pitkään aikaan." },
{ topic: "greetings", level: "A2", text: "Mitä olet tehnyt viime aikoina?" },
{ topic: "greetings", level: "A2", text: "Olen opiskellut suomea joka päivä." },
{ topic: "greetings", level: "A2", text: "Oletko asunut Suomessa kauan?" },
{ topic: "greetings", level: "A2", text: "Olen asunut täällä vuoden." },
{ topic: "greetings", level: "A2", text: "Toivottavasti nähdään pian uudelleen." },
{ topic: "greetings", level: "A2", text: "Mukavaa päivänjatkoa!" },;

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
        if (activeLessons.length > 0) {
            showDictation();
        } else if (selectedTopic) {
            showDictationLevels();
        } else {
            showDictationTopics();
        }
    } else {
        lesson.innerHTML = `
            <h2>🇫🇮 Aloitetaan!</h2>
            <p>${t.choose}</p>
        `;
        lesson.dataset.type = "";
    }
}

function showDictationTopics() {
    const t = translations[currentLanguage];
    const lesson = document.getElementById("lesson");

    lesson.dataset.type = "dictation";

    let html = `
        <h2>🎧 ${t.dictation}</h2>
        <h3>${t.chooseTopic}</h3>
        <div class="topic-list">
    `;

    dictationTopics.forEach(topic => {
        html += `
            <button onclick="selectDictationTopic('${topic.id}')">
                🇫🇮 ${topic.fi}<br>
                🇬🇧 ${topic.en}<br>
                🇻🇳 ${topic.vi}
            </button>
        `;
    });

    html += `</div>`;

    lesson.innerHTML = html;
    lesson.scrollIntoView({ behavior: "smooth" });
}

function selectDictationTopic(topicId) {
    selectedTopic = topicId;
    selectedLevel = null;
    activeLessons = [];

    showDictationLevels();
}

function showDictationLevels() {
    const t = translations[currentLanguage];
    const lesson = document.getElementById("lesson");

    lesson.dataset.type = "dictation";

    lesson.innerHTML = `
        <h2>🎧 ${t.chooseLevel}</h2>

        <button onclick="selectDictationLevel('A1.1')">
            A1.1 – Beginner
        </button>

        <button onclick="selectDictationLevel('A1.2')">
            A1.2 – Elementary
        </button>

        <button onclick="selectDictationLevel('A2')">
            A2 – Pre-intermediate
        </button>

        <button onclick="showDictationTopics()">
            ← ${t.back}
        </button>
    `;

    lesson.scrollIntoView({ behavior: "smooth" });
}

function selectDictationLevel(level) {
    selectedLevel = level;

    activeLessons = dictationLessons.filter(item =>
        item.topic === selectedTopic &&
        item.level === selectedLevel
    );

    currentLesson = 0;

    if (activeLessons.length === 0) {
        const t = translations[currentLanguage];

        document.getElementById("lesson").innerHTML = `
            <h2>📚 ${t.comingSoon}</h2>
            <button onclick="showDictationLevels()">
                ← ${t.back}
            </button>
        `;

        return;
    }

    showDictation();
}

function showDictation() {
    const t = translations[currentLanguage];
    const lesson = document.getElementById("lesson");
    const current = activeLessons[currentLesson];

    if (!current) return;

    lesson.dataset.type = "dictation";

    lesson.innerHTML = `
        <h2>🎧 ${t.dictation}</h2>
        <p>${t.exercise} ${currentLesson + 1} / ${activeLessons.length}</p>

        <button onclick="speakFinnish()">
            🔊 ${t.listen}
        </button>

        <p>${t.write}</p>

        <textarea id="answer"
            placeholder="${t.answer}..."
            rows="3"
            style="width:100%;padding:12px;border-radius:10px;font-size:16px;">
        </textarea>

        <button onclick="checkAnswer()">✓ ${t.check}</button>

        <div id="result"></div>

        <button onclick="nextLesson()">➜ ${t.next}</button>

        <button onclick="showDictationLevels()">← ${t.back}</button>
    `;

    lesson.scrollIntoView({ behavior: "smooth" });
}

function speakFinnish() {
    const current = activeLessons[currentLesson];

    if (!current || !("speechSynthesis" in window)) {
        alert("Speech is not supported by this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(current.fi);
    speech.lang = "fi-FI";
    speech.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const finnishVoice = voices.find(voice =>
        voice.lang.toLowerCase().startsWith("fi")
    );

    if (finnishVoice) {
        speech.voice = finnishVoice;
    }

    window.speechSynthesis.speak(speech);
}

function checkAnswer() {
    const t = translations[currentLanguage];
    const current = activeLessons[currentLesson];
    const answerInput = document.getElementById("answer");

    if (!current || !answerInput) return;

    const normalize = text => text
        .trim()
        .toLowerCase()
        .replace(/[.!?]+$/g, "")
        .replace(/\s+/g, " ");

    const answer = normalize(answerInput.value);
    const correct = normalize(current.fi);

    const isCorrect = answer === correct;

    const answerWords = answer.split(" ");
    const correctWords = correct.split(" ");

    let resultHTML = "";

    if (isCorrect) {
        resultHTML = current.fi;
    } else {
        const maxWords = Math.max(
            answerWords.length,
            correctWords.length
        );

        for (let i = 0; i < maxWords; i++) {
            const typed = answerWords[i] || "";
            const expected = correctWords[i] || "";

            if (typed === expected && expected !== "") {
                resultHTML += `<span class="word-correct">${typed}</span> `;
            } else {
                let masked = "";

                for (let j = 0; j < expected.length; j++) {
                    masked += typed[j] === expected[j]
                        ? expected[j]
                        : "*";
                }

                resultHTML += `<span class="word-wrong">${masked}</span> `;
            }
        }
    }

    document.getElementById("result").innerHTML = `
        <hr>
        <h3>${isCorrect ? "🎉 " + t.correct : "💪 " + t.incorrect}</h3>
        <div class="masked-answer">${resultHTML}</div>

        ${isCorrect ? `
            <p>🇬🇧 ${current.en}</p>
            <p>🇻🇳 ${current.vi}</p>
        ` : ""}
    `;
}

function nextLesson() {
    if (currentLesson < activeLessons.length - 1) {
        currentLesson++;
        showDictation();
    } else {
        const t = translations[currentLanguage];

        document.getElementById("lesson").innerHTML = `
            <h2>🎉 ${t.completed}</h2>
            <button onclick="showDictationLevels()">
                ← ${t.back}
            </button>
            <button onclick="showDictationTopics()">
                Choose another topic
            </button>
        `;
    }
}

function openLesson(name) {
    if (name === "dictation") {
        selectedTopic = null;
        selectedLevel = null;
        activeLessons = [];
        currentLesson = 0;

        showDictationTopics();
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
window.setLanguage = setLanguage;
window.openLesson = openLesson;
