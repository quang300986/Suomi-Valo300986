
function openLesson(lesson) {
    const area = document.getElementById("lesson");

    const lessons = {
        dictation: {
            title: "🎧 Daily Dictation",
            text: "Kuuntele ja kirjoita!",
            desc: "Nghe tiếng Phần Lan và viết lại câu."
        },
        vocabulary: {
            title: "📚 Vocabulary",
            text: "Uusi sana joka päivä!",
            desc: "Học từ vựng Phần Lan mỗi ngày."
        },
        grammar: {
            title: "✏️ Grammar",
            text: "Opitaan kielioppia!",
            desc: "Cùng học ngữ pháp tiếng Phần Lan."
        },
        listening: {
            title: "🔊 Listening",
            text: "Kuuntele tarkasti!",
            desc: "Luyện nghe tiếng Phần Lan."
        },
        yki: {
            title: "🎓 YKI Preparation",
            text: "Harjoitellaan YKI-koetta!",
            desc: "Chuẩn bị cho kỳ thi YKI."
        }
    };

    const selected = lessons[lesson];

    area.innerHTML = `
        <h2>${selected.title}</h2>
        <h3>${selected.text}</h3>
        <p>${selected.desc}</p>
        <p>Tervetuloa opiskelemaan!</p>
    `;

    area.scrollIntoView({ behavior: "smooth" });
}
