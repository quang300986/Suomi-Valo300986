
const dictationLessons = [
    {
        fi: "Minä asun Porissa.",
        vi: "Tôi sống ở Pori.",
        en: "I live in Pori."
    },
    {
        fi: "Tänään on kylmä sää.",
        vi: "Hôm nay thời tiết lạnh.",
        en: "Today the weather is cold."
    },
    {
        fi: "Minä opiskelen suomea joka päivä.",
        vi: "Tôi học tiếng Phần Lan mỗi ngày.",
        en: "I study Finnish every day."
    },
    {
        fi: "Perheeni asuu Suomessa.",
        vi: "Gia đình tôi sống ở Phần Lan.",
        en: "My family lives in Finland."
    },
    {
        fi: "Minä menen aamulla kouluun.",
        vi: "Tôi đi học vào buổi sáng.",
        en: "I go to school in the morning."
    }
];

let currentLesson = 0;

function speakFinnish() {
    const lesson = dictationLessons[currentLesson];

    if (!("speechSynthesis" in window)) {
        alert("Trình duyệt không hỗ trợ đọc giọng nói.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(lesson.fi);
    speech.lang = "fi-FI";
    speech.rate = 0.8;
    speech.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const finnishVoice = voices.find(v =>
        v.lang.toLowerCase().startsWith("fi")
    );

    if (finnishVoice) {
        speech.voice = finnishVoice;
    }

    window.speechSynthesis.speak(speech);
}

function showDictation() {
    const lesson = dictationLessons[currentLesson];

    document.getElementById("lesson").innerHTML = `
        <h2>🎧 Daily Dictation</h2>
        <p>Listen and write in Finnish!</p>

        <p>Harjoitus ${currentLesson + 1} / ${dictationLessons.length}</p>

        <button onclick="speakFinnish()">
            🔊 Kuuntele (Nghe)
        </button>

        <p>✍️ Kirjoita kuulemasi lause:</p>

        <textarea id="answer"
            placeholder="Kirjoita suomeksi..."
            rows="3"
            style="width:100%;padding:12px;
            border-radius:10px;font-size:16px;">
        </textarea>

        <button onclick="checkAnswer()">
            ✓ Tarkista (Kiểm tra)
        </button>

        <div id="result"></div>

        <button onclick="nextLesson()">
            ➜ Seuraava (Tiếp theo)
        </button>
    `;
}

function checkAnswer() {
    const answer = document.getElementById("answer").value
        .trim()
        .toLowerCase()
        .replace(/[.!?]+$/g, "")
        .replace(/\s+/g, " ");

    const lesson = dictationLessons[currentLesson];

    const correct = lesson.fi.toLowerCase()
        .replace(/[.!?]+$/g, "")
        .replace(/\s+/g, " ");

    const result = document.getElementById("result");

    if (answer === correct) {
        result.innerHTML = `
            <h3>🎉 Oikein! Chính xác!</h3>
        `;
    } else {
        result.innerHTML = `
            <h3>💪 Yritä uudelleen! Hãy thử lại!</h3>
        `;
    }

    result.innerHTML += `
        <hr>
        <p>🇫🇮 ${lesson.fi}</p>
        <p>🇻🇳 ${lesson.vi}</p>
        <p>🇬🇧 ${lesson.en}</p>
    `;
}

function nextLesson() {
    currentLesson =
        (currentLesson + 1) % dictationLessons.length;

    showDictation();
}

function openLesson(lesson) {
    if (lesson === "dictation") {
        showDictation();
        return;
    }

    const titles = {
        vocabulary: "📚 Vocabulary",
        grammar: "✏️ Grammar",
        listening: "🔊 Listening",
        yki: "🎓 YKI Preparation"
    };

    document.getElementById("lesson").innerHTML = `
        <h2>${titles[lesson]}</h2>
        <p>Oppiminen alkaa tästä!</p>
        <p>Phần học này sẽ được phát triển tiếp.</p>
    `;

    document.getElementById("lesson")
        .scrollIntoView({ behavior: "smooth" });
}
