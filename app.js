
"use strict";

/* =========================================
   SUOMI VALO300986
   Finnish • English • Vietnamese
========================================= */

/* 1. TRANSLATIONS */

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
        chooseTopic: "Choose a topic",
        chooseLevel: "Choose your level",
        listen: "Listen",
        write: "Write what you hear:",
        answer: "Your answer",
        check: "Check Answer",
        next: "Next Exercise",
        back: "Back",
        correct: "Correct! Well done!",
        incorrect: "Not quite. Try again!",
        completed: "You completed this level!",
        exercise: "Exercise",
        noLessons: "No lessons available yet.",
        comingSoon: "More lessons are coming soon!",
        tryAgain: "Try again",
        home: "Home",
        beginner: "Beginner",
        elementary: "Elementary",
        preIntermediate: "Pre-intermediate",
        moduleMessage: "This learning section is being prepared.",
        correctAnswer: "Correct answer"
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
        chooseTopic: "Chọn chủ đề",
        chooseLevel: "Chọn trình độ",
        listen: "Nghe",
        write: "Hãy viết câu bạn nghe được:",
        answer: "Câu trả lời của bạn",
        check: "Kiểm tra đáp án",
        next: "Bài tiếp theo",
        back: "Quay lại",
        correct: "Chính xác! Làm tốt lắm!",
        incorrect: "Chưa chính xác. Hãy thử lại!",
        completed: "Bạn đã hoàn thành cấp độ này!",
        exercise: "Bài tập",
        noLessons: "Chưa có bài học.",
        comingSoon: "Các bài học tiếp theo đang được chuẩn bị!",
        tryAgain: "Thử lại",
        home: "Trang chủ",
        beginner: "Sơ cấp",
        elementary: "Sơ cấp nâng cao",
        preIntermediate: "Tiền trung cấp",
        moduleMessage: "Mục học tập này đang được chuẩn bị.",
        correctAnswer: "Đáp án đúng"
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
        chooseTopic: "Valitse aihe",
        chooseLevel: "Valitse taso",
        listen: "Kuuntele",
        write: "Kirjoita kuulemasi lause:",
        answer: "Vastauksesi",
        check: "Tarkista vastaus",
        next: "Seuraava harjoitus",
        back: "Takaisin",
        correct: "Oikein! Hienosti tehty!",
        incorrect: "Ei aivan oikein. Yritä uudelleen!",
        completed: "Olet suorittanut tämän tason!",
        exercise: "Harjoitus",
        noLessons: "Oppitunteja ei vielä ole.",
        comingSoon: "Lisää harjoituksia tulossa pian!",
        tryAgain: "Yritä uudelleen",
        home: "Etusivu",
        beginner: "Alkeistaso",
        elementary: "Perustaso",
        preIntermediate: "Alempi keskitaso",
        moduleMessage: "Tätä osiota valmistellaan.",
        correctAnswer: "Oikea vastaus"
    }
};


/* 2. APP STATE */

let currentLanguage = "en";
let currentScreen = "home";
let currentModule = "";
let selectedTopic = null;
let selectedLevel = null;
let activeLessons = [];
let currentLesson = 0;
let answerChecked = false;


/* 3. TOPICS */

const dictationTopics = [
    { id: "greetings", fi: "Tervehdykset", en: "Greetings", vi: "Chào hỏi" },
    { id: "family", fi: "Perhe", en: "Family", vi: "Gia đình" },
    { id: "home", fi: "Koti", en: "Home", vi: "Nhà cửa" },
    { id: "food", fi: "Ruoka", en: "Food", vi: "Thức ăn" },
    { id: "work", fi: "Työ ja ammatti", en: "Work and profession", vi: "Công việc và nghề nghiệp" },
    { id: "daily", fi: "Arkipäivä", en: "Daily life", vi: "Sinh hoạt hằng ngày" },
    { id: "weather", fi: "Sää", en: "Weather", vi: "Thời tiết" },
    { id: "shopping", fi: "Kauppa", en: "Shopping", vi: "Mua sắm" }
];


/* 4. DICTATION LESSONS
   Every lesson must have:
   topic, level, fi, en, vi
*/

const dictationLessons = [

    // GREETINGS

    {
        topic: "greetings", level: "A1.1",
        fi: "Hei! Mitä kuuluu?",
        en: "Hi! How are you?",
        vi: "Xin chào! Bạn khỏe không?"
    },
    {
        topic: "greetings", level: "A1.1",
        fi: "Hyvää huomenta!",
        en: "Good morning!",
        vi: "Chào buổi sáng!"
    },
    {
        topic: "greetings", level: "A1.1",
        fi: "Minun nimeni on Anna.",
        en: "My name is Anna.",
        vi: "Tên tôi là Anna."
    },

    {
        topic: "greetings", level: "A1.2",
        fi: "Hauska tutustua sinuun.",
        en: "Nice to meet you.",
        vi: "Rất vui được làm quen với bạn."
    },
    {
        topic: "greetings", level: "A1.2",
        fi: "Mistä sinä olet kotoisin?",
        en: "Where are you from?",
        vi: "Bạn đến từ đâu?"
    },
    {
        topic: "greetings", level: "A1.2",
        fi: "Olen kotoisin Vietnamista.",
        en: "I am from Vietnam.",
        vi: "Tôi đến từ Việt Nam."
    },

    {
        topic: "greetings", level: "A2",
        fi: "Olen asunut Suomessa kaksi vuotta.",
        en: "I have lived in Finland for two years.",
        vi: "Tôi đã sống ở Phần Lan được hai năm."
    },
    {
        topic: "greetings", level: "A2",
        fi: "Mitä aiot tehdä viikonloppuna?",
        en: "What are you going to do at the weekend?",
        vi: "Bạn dự định làm gì vào cuối tuần?"
    },
    {
        topic: "greetings", level: "A2",
        fi: "Oli mukava keskustella kanssasi.",
        en: "It was nice talking with you.",
        vi: "Rất vui được trò chuyện với bạn."
    },


    // FAMILY

    {
        topic: "family", level: "A1.1",
        fi: "Minulla on pieni perhe.",
        en: "I have a small family.",
        vi: "Tôi có một gia đình nhỏ."
    },
    {
        topic: "family", level: "A1.2",
        fi: "Perheessäni on neljä ihmistä.",
        en: "There are four people in my family.",
        vi: "Gia đình tôi có bốn người."
    },
    {
        topic: "family", level: "A2",
        fi: "Vietämme viikonloput usein yhdessä.",
        en: "We often spend weekends together.",
        vi: "Chúng tôi thường dành những ngày cuối tuần bên nhau."
    },


    // HOME

    {
        topic: "home", level: "A1.1",
        fi: "Minä asun Porissa.",
        en: "I live in Pori.",
        vi: "Tôi sống ở Pori."
    },
    {
        topic: "home", level: "A1.2",
        fi: "Asunnossani on kaksi makuuhuonetta.",
        en: "My apartment has two bedrooms.",
        vi: "Căn hộ của tôi có hai phòng ngủ."
    },
    {
        topic: "home", level: "A2",
        fi: "Keittiössä on suuri ruokapöytä.",
        en: "There is a large dining table in the kitchen.",
        vi: "Trong bếp có một chiếc bàn ăn lớn."
    },


    // FOOD

    {
        topic: "food", level: "A1.1",
        fi: "Minä syön omenan.",
        en: "I eat an apple.",
        vi: "Tôi ăn một quả táo."
    },
    {
        topic: "food", level: "A1.2",
        fi: "Syön yleensä lounasta kello kaksitoista.",
        en: "I usually eat lunch at twelve.",
        vi: "Tôi thường ăn trưa lúc mười hai giờ."
    },
    {
        topic: "food", level: "A2",
        fi: "Pidän vihanneksista ja tuoreista hedelmistä.",
        en: "I like vegetables and fresh fruits.",
        vi: "Tôi thích rau và trái cây tươi."
    },


    // WORK

    {
        topic: "work", level: "A1.1",
        fi: "Minä olen opiskelija.",
        en: "I am a student.",
        vi: "Tôi là học sinh / sinh viên."
    },
    {
        topic: "work", level: "A1.2",
        fi: "Hän työskentelee sairaalassa.",
        en: "He or she works in a hospital.",
        vi: "Anh ấy / cô ấy làm việc ở bệnh viện."
    },
    {
        topic: "work", level: "A2",
        fi: "Etsin parhaillaan uutta työpaikkaa.",
        en: "I am currently looking for a new job.",
        vi: "Hiện tại tôi đang tìm một công việc mới."
    },


    // DAILY LIFE

    {
        topic: "daily", level: "A1.1",
        fi: "Minä herään aamulla kello seitsemän.",
        en: "I wake up at seven in the morning.",
        vi: "Tôi thức dậy lúc bảy giờ sáng."
    },
    {
        topic: "daily", level: "A1.2",
        fi: "Menen joka päivä suomen kielen kurssille.",
        en: "I go to Finnish class every day.",
        vi: "Tôi đi học tiếng Phần Lan mỗi ngày."
    },
    {
        topic: "daily", level: "A2",
        fi: "Opiskelen suomea yleensä illalla kotona.",
        en: "I usually study Finnish at home in the evening.",
        vi: "Tôi thường học tiếng Phần Lan ở nhà vào buổi tối."
    },


    // WEATHER

    {
        topic: "weather", level: "A1.1",
        fi: "Tänään on kylmä sää.",
        en: "The weather is cold today.",
        vi: "Hôm nay thời tiết lạnh."
    },
    {
        topic: "weather", level: "A1.2",
        fi: "Ulkona sataa lunta.",
        en: "It is snowing outside.",
        vi: "Ngoài trời đang có tuyết rơi."
    },
    {
        topic: "weather", level: "A2",
        fi: "Huomenna sää on lämpimämpi kuin tänään.",
        en: "Tomorrow the weather will be warmer than today.",
        vi: "Ngày mai thời tiết sẽ ấm hơn hôm nay."
    },


    // SHOPPING

    {
        topic: "shopping", level: "A1.1",
        fi: "Missä on lähin kauppa?",
        en: "Where is the nearest shop?",
        vi: "Cửa hàng gần nhất ở đâu?"
    },
    {
        topic: "shopping", level: "A1.2",
        fi: "Paljonko tämä omena maksaa?",
        en: "How much does this apple cost?",
        vi: "Quả táo này giá bao nhiêu?"
    },
    {
        topic: "shopping", level: "A2",
        fi: "Voinko maksaa ostokset pankkikortilla?",
        en: "Can I pay for the shopping by bank card?",
        vi: "Tôi có thể thanh toán bằng thẻ ngân hàng không?"
    }
];


/* 5. HELPER FUNCTIONS */

function getText(key) {
    return translations[currentLanguage][key] || key;
}

function getElement(id) {
    return document.getElementById(id);
}

function scrollToLesson() {
    const lesson = getElement("lesson");
    if (lesson) {
        lesson.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}


/* 6. LANGUAGE SWITCHING */

function setLanguage(language) {
    if (!translations[language]) return;

    currentLanguage = language;
    document.documentElement.lang = language;

    const t = translations[language];

    getElement("welcome").textContent = t.welcome;
    getElement("subtitle").textContent = t.subtitle;

    const menuItems = [
        ["dictation", "dictationDesc"],
        ["vocabulary", "vocabularyDesc"],
        ["grammar", "grammarDesc"],
        ["listening", "listeningDesc"],
        ["yki", "ykiDesc"]
    ];

    menuItems.forEach(([name, description]) => {
        getElement("menu-" + name).textContent = t[name];
        getElement("desc-" + name).textContent = t[description];
    });

    renderCurrentScreen();
}


/* 7. SCREEN RENDERING */

function renderCurrentScreen() {
    switch (currentScreen) {
        case "topics":
            showDictationTopics();
            break;

        case "levels":
            showDictationLevels();
            break;

        case "exercise":
            showDictation();
            break;

        case "completed":
            showCompleted();
            break;

        case "comingSoon":
            showComingSoon();
            break;

        case "module":
            showModule(currentModule);
            break;

        default:
            showHome();
    }
}

function showHome() {
    currentScreen = "home";

    const lesson = getElement("lesson");
    lesson.dataset.type = "";

    lesson.innerHTML = `
        <h2>🇫🇮 Aloitetaan!</h2>
        <p>${getText("choose")}</p>
    `;
}


/* 8. DICTATION TOPICS */

function showDictationTopics() {
    currentScreen = "topics";

    const lesson = getElement("lesson");
    lesson.dataset.type = "dictation";

    let html = `
        <h2>🎧 ${getText("dictation")}</h2>
        <h3>${getText("chooseTopic")}</h3>
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
    scrollToLesson();
}

function selectDictationTopic(topicId) {
    const exists = dictationTopics.some(topic => topic.id === topicId);
    if (!exists) return;

    selectedTopic = topicId;
    selectedLevel = null;
    activeLessons = [];
    currentLesson = 0;

    showDictationLevels();
}


/* 9. LEVEL SELECTION */

function showDictationLevels() {
    currentScreen = "levels";

    const lesson = getElement("lesson");
    lesson.dataset.type = "dictation";

    lesson.innerHTML = `
        <h2>🎧 ${getText("chooseLevel")}</h2>

        <button onclick="selectDictationLevel('A1.1')">
            A1.1 – ${getText("beginner")}
        </button>

        <button onclick="selectDictationLevel('A1.2')">
            A1.2 – ${getText("elementary")}
        </button>

        <button onclick="selectDictationLevel('A2')">
            A2 – ${getText("preIntermediate")}
        </button>

        <button onclick="showDictationTopics()">
            ← ${getText("back")}
        </button>
    `;

    scrollToLesson();
}

function selectDictationLevel(level) {
    const allowedLevels = ["A1.1", "A1.2", "A2"];
    if (!allowedLevels.includes(level)) return;

    selectedLevel = level;

    activeLessons = dictationLessons.filter(item =>
        item.topic === selectedTopic &&
        item.level === selectedLevel
    );

    currentLesson = 0;

    if (activeLessons.length === 0) {
        showComingSoon();
        return;
    }

    showDictation();
}


/* 10. COMING SOON */

function showComingSoon() {
    currentScreen = "comingSoon";

    const lesson = getElement("lesson");
    lesson.dataset.type = "dictation";

    lesson.innerHTML = `
        <h2>📚 ${getText("comingSoon")}</h2>
        <p>${getText("noLessons")}</p>
        <button onclick="showDictationLevels()">
            ← ${getText("back")}
        </button>
        <button onclick="showDictationTopics()">
            ${getText("chooseTopic")}
        </button>
    `;

    scrollToLesson();
}


/* 11. SHOW EXERCISE */

function showDictation() {
    if (!activeLessons.length || !activeLessons[currentLesson]) {
        showComingSoon();
        return;
    }

    currentScreen = "exercise";
    answerChecked = false;

    const t = translations[currentLanguage];
    const lesson = getElement("lesson");
    const current = activeLessons[currentLesson];

    lesson.dataset.type = "dictation";

    lesson.innerHTML = `
        <h2>🎧 ${t.dictation}</h2>

        <p>
            ${t.exercise}
            ${currentLesson + 1} / ${activeLessons.length}
        </p>

        <button onclick="speakFinnish()">
            🔊 ${t.listen}
        </button>

        <p>${t.write}</p>

        <textarea
            id="answer"
            placeholder="${t.answer}..."
            rows="3"
            style="width:100%;padding:12px;border-radius:10px;font-size:16px;"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
        ></textarea>

        <button id="check-button" onclick="checkAnswer()">
            ✓ ${t.check}
        </button>

        <div id="result"></div>

        <button id="next-button" onclick="nextLesson()" disabled>
            ➜ ${t.next}
        </button>

        <button onclick="showDictationLevels()">
            ← ${t.back}
        </button>
    `;

    scrollToLesson();
}


/* 12. FINNISH SPEECH */

function speakFinnish() {
    const current = activeLessons[currentLesson];

    if (!current) return;

    if (!("speechSynthesis" in window)) {
        alert("Speech is not supported by this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(current.fi);
    speech.lang = "fi-FI";
    speech.rate = 0.8;
    speech.pitch = 1;

    const voices = window.speechSynthesis.getVoices();

    const finnishVoice = voices.find(voice =>
        voice.lang.toLowerCase() === "fi-fi"
    ) || voices.find(voice =>
        voice.lang.toLowerCase().startsWith("fi")
    );

    if (finnishVoice) {
        speech.voice = finnishVoice;
    }

    window.speechSynthesis.speak(speech);
}


/* 13. ANSWER CHECKING */

function normalizeAnswer(value) {
    return value
        .trim()
        .toLocaleLowerCase("fi-FI")
        .replace(/[.!?]+$/g, "")
        .replace(/\s+/g, " ");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return replacements[character];
    });
}

function checkAnswer() {
    const current = activeLessons[currentLesson];
    const answerInput = getElement("answer");
    const result = getElement("result");

    if (!current || !answerInput || !result) return;

    const typedAnswer = normalizeAnswer(answerInput.value);
    const correctAnswer = normalizeAnswer(current.fi);

    if (!typedAnswer) {
        result.innerHTML = `
            <p>${getText("incorrect")}</p>
        `;
        return;
    }

    const isCorrect = typedAnswer === correctAnswer;

    if (isCorrect) {
        answerChecked = true;

        result.innerHTML = `
            <hr>
            <h3>🎉 ${getText("correct")}</h3>
            <p><strong>🇫🇮 ${escapeHTML(current.fi)}</strong></p>
            <p>🇬🇧 ${escapeHTML(current.en)}</p>
            <p>🇻🇳 ${escapeHTML(current.vi)}</p>
        `;

        getElement("next-button").disabled = false;
        getElement("check-button").disabled = true;

        return;
    }

    const typedWords = typedAnswer.split(" ");
    const correctWords = correctAnswer.split(" ");

    let resultHTML = "";

    const maxWords = Math.max(
        typedWords.length,
        correctWords.length
    );

    for (let i = 0; i < maxWords; i++) {
        const typed = typedWords[i] || "";
        const expected = correctWords[i] || "";

        if (typed === expected && expected !== "") {
            resultHTML += `
                <span class="word-correct">
                    ${escapeHTML(expected)}
                </span>
            `;
        } else {
            let masked = "";

            for (let j = 0; j < expected.length; j++) {
                masked += typed[j] === expected[j]
                    ? expected[j]
                    : "*";
            }

            if (!expected) {
                masked = "*";
            }

            resultHTML += `
                <span class="word-wrong">
                    ${escapeHTML(masked)}
                </span>
            `;
        }

        resultHTML += " ";
    }

    result.innerHTML = `
        <hr>
        <h3>💪 ${getText("incorrect")}</h3>
        <p>${resultHTML}</p>
        <p>${getText("tryAgain")}</p>
    `;

    getElement("next-button").disabled = true;
}


/* 14. NEXT EXERCISE */

function nextLesson() {
    if (!answerChecked) return;

    if (currentLesson < activeLessons.length - 1) {
        currentLesson++;
        showDictation();
    } else {
        showCompleted();
    }
}


/* 15. COMPLETED SCREEN */

function showCompleted() {
    currentScreen = "completed";

    const lesson = getElement("lesson");
    lesson.dataset.type = "dictation";

    lesson.innerHTML = `
        <h2>🎉 ${getText("completed")}</h2>

        <button onclick="showDictationLevels()">
            ← ${getText("back")}
        </button>

        <button onclick="showDictationTopics()">
            ${getText("chooseTopic")}
        </button>
    `;

    scrollToLesson();
}


/* 16. OTHER LEARNING MODULES */

function showModule(name) {
    currentScreen = "module";
    currentModule = name;

    const lesson = getElement("lesson");
    lesson.dataset.type = name;

    const title = getText(name);

    lesson.innerHTML = `
        <h2>${title}</h2>
        <p>${getText("moduleMessage")}</p>
        <button onclick="showHome()">
            ← ${getText("home")}
        </button>
    `;

    scrollToLesson();
}


/* 17. OPEN MENU */

function openLesson(name) {
    if (name === "dictation") {
        selectedTopic = null;
        selectedLevel = null;
        activeLessons = [];
        currentLesson = 0;

        showDictationTopics();
        return;
    }

    const allowedModules = [
        "vocabulary",
        "grammar",
        "listening",
        "yki"
    ];

    if (!allowedModules.includes(name)) return;

    showModule(name);
}


/* 18. MAKE FUNCTIONS AVAILABLE TO HTML */

window.setLanguage = setLanguage;
window.openLesson = openLesson;
window.showHome = showHome;

window.showDictationTopics = showDictationTopics;
window.selectDictationTopic = selectDictationTopic;
window.showDictationLevels = showDictationLevels;
window.selectDictationLevel = selectDictationLevel;

window.showDictation = showDictation;
window.showComingSoon = showComingSoon;
window.showCompleted = showCompleted;

window.speakFinnish = speakFinnish;
window.checkAnswer = checkAnswer;
window.nextLesson = nextLesson;


/* 19. START APP */

document.addEventListener("DOMContentLoaded", () => {
    setLanguage("en");
    showHome();
});
