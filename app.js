
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
let dictationAttempts = 0;
let selectedVocabularyTopic = null;
let selectedVocabularyLevel = null;
let activeVocabularyWords = [];
let currentVocabularyIndex = 0;

/* 3. TOPICS */


const dictationTopics = [
    { id: "greetings", fi: "Tervehdykset", en: "Greetings", vi: "Chào hỏi" },
    { id: "family", fi: "Perhe", en: "Family", vi: "Gia đình" },
    { id: "home", fi: "Koti", en: "Home", vi: "Nhà cửa" },
    { id: "food", fi: "Ruoka", en: "Food", vi: "Thức ăn" },
    { id: "work", fi: "Työ ja ammatti", en: "Work and profession", vi: "Công việc và nghề nghiệp" },
    { id: "daily", fi: "Arkipäivä", en: "Daily life", vi: "Sinh hoạt hằng ngày" },
    { id: "weather", fi: "Sää", en: "Weather", vi: "Thời tiết" },
    { id: "shopping", fi: "Kauppa", en: "Shopping", vi: "Mua sắm" },
    { id: "travel", fi: "Matkailu ", en: "Travel ", vi: "Du lịch " }
];


/* 4. DICTATION LESSONS
   Every lesson must have:
   topic, level, fi, en, vi
*/


const dictationLessons = [

    // =================================
    // 1. GREETINGS — CHÀO HỎI
    // =================================

    ["greetings","A1.1","Hei! Mitä kuuluu?","Hi! How are you?","Xin chào! Bạn khỏe không?"],
    ["greetings","A1.1","Hyvää huomenta!","Good morning!","Chào buổi sáng!"],
    ["greetings","A1.1","Hyvää iltaa!","Good evening!","Chào buổi tối!"],
    ["greetings","A1.1","Minun nimeni on Anna.","My name is Anna.","Tên tôi là Anna."],
    ["greetings","A1.1","Mikä sinun nimesi on?","What is your name?","Tên bạn là gì?"],
    ["greetings","A1.1","Minä olen Vietnamista.","I am from Vietnam.","Tôi đến từ Việt Nam."],
    ["greetings","A1.1","Asun Porissa.","I live in Pori.","Tôi sống ở Pori."],
    ["greetings","A1.1","Hauska tutustua!","Nice to meet you!","Rất vui được làm quen!"],
    ["greetings","A1.1","Kiitos, hyvää kuuluu.","Thanks, I am fine.","Cảm ơn, tôi khỏe."],
    ["greetings","A1.1","Näkemiin! Hyvää päivänjatkoa!","Goodbye! Have a nice day!","Tạm biệt! Chúc bạn một ngày tốt lành!"],

    ["greetings","A1.2","Mitä sinä teet työksesi?","What do you do for a living?","Bạn làm nghề gì?"],
    ["greetings","A1.2","Opiskelen suomen kieltä.","I study Finnish.","Tôi học tiếng Phần Lan."],
    ["greetings","A1.2","Kuinka kauan olet asunut Suomessa?","How long have you lived in Finland?","Bạn đã sống ở Phần Lan bao lâu rồi?"],
    ["greetings","A1.2","Olen asunut täällä yhden vuoden.","I have lived here for one year.","Tôi đã sống ở đây một năm."],
    ["greetings","A1.2","Mitä kieliä sinä puhut?","What languages do you speak?","Bạn nói những ngôn ngữ nào?"],
    ["greetings","A1.2","Puhun vietnamia ja vähän suomea.","I speak Vietnamese and a little Finnish.","Tôi nói tiếng Việt và một chút tiếng Phần Lan."],
    ["greetings","A1.2","Mitä sinä harrastat vapaa-ajalla?","What are your hobbies in your free time?","Bạn có sở thích gì khi rảnh?"],
    ["greetings","A1.2","Tykkään kävellä metsässä.","I like walking in the forest.","Tôi thích đi bộ trong rừng."],
    ["greetings","A1.2","Missä sinä opiskelet suomea?","Where do you study Finnish?","Bạn học tiếng Phần Lan ở đâu?"],
    ["greetings","A1.2","Nähdään huomenna kurssilla!","See you tomorrow in class!","Hẹn gặp bạn ngày mai ở lớp!"],

    ["greetings","A2","Olen muuttanut Suomeen perheeni kanssa.","I have moved to Finland with my family.","Tôi đã chuyển đến Phần Lan cùng gia đình."],
    ["greetings","A2","Haluan oppia puhumaan suomea paremmin.","I want to learn to speak Finnish better.","Tôi muốn học nói tiếng Phần Lan tốt hơn."],
    ["greetings","A2","Suomen opiskelu on joskus vaikeaa.","Studying Finnish is sometimes difficult.","Việc học tiếng Phần Lan đôi khi khó."],
    ["greetings","A2","Yritän harjoitella suomea joka päivä.","I try to practise Finnish every day.","Tôi cố gắng luyện tiếng Phần Lan mỗi ngày."],
    ["greetings","A2","Mitä aiot tehdä viikonloppuna?","What are you going to do at the weekend?","Bạn dự định làm gì vào cuối tuần?"],
    ["greetings","A2","Aion mennä metsään kävelemään.","I am going to go for a walk in the forest.","Tôi dự định đi dạo trong rừng."],
    ["greetings","A2","Oli mukava keskustella kanssasi.","It was nice talking with you.","Rất vui được trò chuyện với bạn."],
    ["greetings","A2","Voimmeko tavata uudelleen ensi viikolla?","Can we meet again next week?","Chúng ta có thể gặp lại vào tuần tới không?"],
    ["greetings","A2","Minusta on mukavaa tutustua uusiin ihmisiin.","I enjoy meeting new people.","Tôi thích làm quen với những người mới."],
    ["greetings","A2","Toivottavasti näemme pian uudelleen.","I hope we will see each other again soon.","Hy vọng chúng ta sẽ sớm gặp lại."],


    // =================================
    // 2. FAMILY — GIA ĐÌNH
    // =================================

    ["family","A1.1","Tässä on minun perheeni.","Here is my family.","Đây là gia đình tôi."],
    ["family","A1.1","Minulla on kaksi lasta.","I have two children.","Tôi có hai người con."],
    ["family","A1.1","Minulla on yksi veli.","I have one brother.","Tôi có một người anh/em trai."],
    ["family","A1.1","Äitini asuu Vietnamissa.","My mother lives in Vietnam.","Mẹ tôi sống ở Việt Nam."],
    ["family","A1.1","Isäni on kotona.","My father is at home.","Bố tôi đang ở nhà."],
    ["family","A1.1","Tyttäreni käy koulua.","My daughter goes to school.","Con gái tôi đi học."],
    ["family","A1.1","Poikani on yksitoista vuotta vanha.","My son is eleven years old.","Con trai tôi mười một tuổi."],
    ["family","A1.1","Me asumme yhdessä.","We live together.","Chúng tôi sống cùng nhau."],
    ["family","A1.1","Perheeni on tärkeä minulle.","My family is important to me.","Gia đình rất quan trọng đối với tôi."],
    ["family","A1.1","Me syömme yhdessä.","We eat together.","Chúng tôi ăn cùng nhau."],

    ["family","A1.2","Perheessäni on neljä ihmistä.","There are four people in my family.","Gia đình tôi có bốn người."],
    ["family","A1.2","Vaimoni opiskelee Suomessa.","My wife studies in Finland.","Vợ tôi học tập ở Phần Lan."],
    ["family","A1.2","Lapset menevät kouluun aamulla.","The children go to school in the morning.","Các con đi học vào buổi sáng."],
    ["family","A1.2","Autan lapsia heidän läksyissään.","I help the children with their homework.","Tôi giúp các con làm bài tập."],
    ["family","A1.2","Viikonloppuna olemme usein kotona.","At the weekend we are often at home.","Cuối tuần chúng tôi thường ở nhà."],
    ["family","A1.2","Isoäitini asuu toisessa kaupungissa.","My grandmother lives in another city.","Bà tôi sống ở một thành phố khác."],
    ["family","A1.2","Veljeni käy usein meillä.","My brother often visits us.","Anh/em trai tôi thường đến thăm chúng tôi."],
    ["family","A1.2","Pidämme yhdessä elokuvien katsomisesta.","We like watching films together.","Chúng tôi thích xem phim cùng nhau."],
    ["family","A1.2","Lapset auttavat kotitöissä.","The children help with housework.","Các con giúp làm việc nhà."],
    ["family","A1.2","Soitamme sukulaisille sunnuntaisin.","We call our relatives on Sundays.","Chúng tôi gọi điện cho họ hàng vào Chủ nhật."],

    ["family","A2","Muutimme Suomeen koko perheen kanssa.","We moved to Finland with the whole family.","Chúng tôi chuyển đến Phần Lan cùng cả gia đình."],
    ["family","A2","Haluamme oppia suomalaista kulttuuria.","We want to learn about Finnish culture.","Chúng tôi muốn tìm hiểu văn hóa Phần Lan."],
    ["family","A2","Yritämme viettää enemmän aikaa yhdessä.","We try to spend more time together.","Chúng tôi cố gắng dành nhiều thời gian bên nhau hơn."],
    ["family","A2","Lapset ovat saaneet uusia ystäviä koulussa.","The children have made new friends at school.","Các con đã có những người bạn mới ở trường."],
    ["family","A2","Autamme toisiamme arjen asioissa.","We help each other with everyday matters.","Chúng tôi giúp đỡ nhau trong cuộc sống hằng ngày."],
    ["family","A2","Käymme joskus yhdessä kirjastossa.","We sometimes go to the library together.","Đôi khi chúng tôi cùng nhau đến thư viện."],
    ["family","A2","Perheeni viettää lomaa usein luonnossa.","My family often spends holidays in nature.","Gia đình tôi thường nghỉ lễ giữa thiên nhiên."],
    ["family","A2","Lapset opettavat minulle uusia suomen sanoja.","The children teach me new Finnish words.","Các con dạy tôi những từ tiếng Phần Lan mới."],
    ["family","A2","Haluamme rakentaa hyvän elämän Suomessa.","We want to build a good life in Finland.","Chúng tôi muốn xây dựng một cuộc sống tốt đẹp ở Phần Lan."],
    ["family","A2","Olemme onnellisia, kun olemme yhdessä.","We are happy when we are together.","Chúng tôi hạnh phúc khi ở bên nhau."],


    // =================================
    // 3. HOME — NHÀ CỬA
    // =================================

    ["home","A1.1","Minä asun Porissa.","I live in Pori.","Tôi sống ở Pori."],
    ["home","A1.1","Tämä on minun kotini.","This is my home.","Đây là nhà của tôi."],
    ["home","A1.1","Asunnossa on kolme huonetta.","There are three rooms in the apartment.","Căn hộ có ba phòng."],
    ["home","A1.1","Keittiö on pieni.","The kitchen is small.","Nhà bếp nhỏ."],
    ["home","A1.1","Olohuoneessa on sohva.","There is a sofa in the living room.","Trong phòng khách có một chiếc ghế sofa."],
    ["home","A1.1","Makuuhuoneessa on sänky.","There is a bed in the bedroom.","Trong phòng ngủ có một chiếc giường."],
    ["home","A1.1","Pöytä on ikkunan vieressä.","The table is next to the window.","Cái bàn ở cạnh cửa sổ."],
    ["home","A1.1","Kengät ovat oven edessä.","The shoes are in front of the door.","Giày ở phía trước cửa."],
    ["home","A1.1","Jääkaappi on keittiössä.","The fridge is in the kitchen.","Tủ lạnh ở trong bếp."],
    ["home","A1.1","Minä siivoan kotona.","I clean at home.","Tôi dọn dẹp ở nhà."],

    ["home","A1.2","Asunnossani on kaksi makuuhuonetta.","My apartment has two bedrooms.","Căn hộ của tôi có hai phòng ngủ."],
    ["home","A1.2","Olohuoneessa on suuri ikkuna.","There is a large window in the living room.","Phòng khách có một cửa sổ lớn."],
    ["home","A1.2","Laitan ruokaa keittiössä joka päivä.","I cook in the kitchen every day.","Tôi nấu ăn trong bếp mỗi ngày."],
    ["home","A1.2","Pesukone on kylpyhuoneessa.","The washing machine is in the bathroom.","Máy giặt ở trong phòng tắm."],
    ["home","A1.2","Kirjat ovat hyllyllä.","The books are on the shelf.","Sách ở trên kệ."],
    ["home","A1.2","Matto on pöydän alla.","The rug is under the table.","Tấm thảm ở dưới bàn."],
    ["home","A1.2","Meillä on pieni parveke.","We have a small balcony.","Chúng tôi có một ban công nhỏ."],
    ["home","A1.2","Käytävä on pitkä ja kapea.","The hallway is long and narrow.","Hành lang dài và hẹp."],
    ["home","A1.2","Imuroin lattian kerran viikossa.","I vacuum the floor once a week.","Tôi hút bụi sàn nhà mỗi tuần một lần."],
    ["home","A1.2","Naapurimme asuu yläkerrassa.","Our neighbour lives upstairs.","Hàng xóm của chúng tôi sống ở tầng trên."],

    ["home","A2","Keittiön pöydän ääressä syömme yhdessä.","We eat together at the kitchen table.","Chúng tôi ăn cùng nhau bên bàn bếp."],
    ["home","A2","Asuntomme sijaitsee rauhallisella alueella.","Our apartment is in a quiet area.","Căn hộ của chúng tôi nằm trong một khu vực yên tĩnh."],
    ["home","A2","Pidän siitä, että kotona on paljon valoa.","I like that there is a lot of light at home.","Tôi thích nhà có nhiều ánh sáng."],
    ["home","A2","Siivoamme koko asunnon lauantaisin.","We clean the whole apartment on Saturdays.","Chúng tôi dọn dẹp toàn bộ căn hộ vào thứ Bảy."],
    ["home","A2","Talvella pidämme verhot usein kiinni.","In winter we often keep the curtains closed.","Vào mùa đông chúng tôi thường kéo rèm lại."],
    ["home","A2","Parvekkeella on kesällä paljon kukkia.","There are many flowers on the balcony in summer.","Vào mùa hè có nhiều hoa trên ban công."],
    ["home","A2","Haluaisin joskus asua omakotitalossa.","I would like to live in a detached house someday.","Một ngày nào đó tôi muốn sống trong một ngôi nhà riêng."],
    ["home","A2","Lähin ruokakauppa on kävelymatkan päässä.","The nearest grocery store is within walking distance.","Cửa hàng thực phẩm gần nhất nằm trong khoảng cách đi bộ."],
    ["home","A2","Yritämme pitää kotimme siistinä joka päivä.","We try to keep our home tidy every day.","Chúng tôi cố gắng giữ nhà cửa gọn gàng mỗi ngày."],
    ["home","A2","Viihdyn hyvin tässä asunnossa.","I feel comfortable in this apartment.","Tôi cảm thấy thoải mái trong căn hộ này."],


    // =================================
    // 4. FOOD — THỨC ĂN
    // =================================

    ["food","A1.1","Minä syön omenan.","I eat an apple.","Tôi ăn một quả táo."],
    ["food","A1.1","Juon vettä.","I drink water.","Tôi uống nước."],
    ["food","A1.1","Pidän banaaneista.","I like bananas.","Tôi thích chuối."],
    ["food","A1.1","Leipä on pöydällä.","The bread is on the table.","Bánh mì ở trên bàn."],
    ["food","A1.1","Minä syön riisiä.","I eat rice.","Tôi ăn cơm."],
    ["food","A1.1","Kahvi on kuumaa.","The coffee is hot.","Cà phê nóng."],
    ["food","A1.1","Haluan yhden kananmunan.","I want one egg.","Tôi muốn một quả trứng."],
    ["food","A1.1","Tämä keitto on hyvää.","This soup is delicious.","Món súp này ngon."],
    ["food","A1.1","Ostan maitoa kaupasta.","I buy milk from the shop.","Tôi mua sữa ở cửa hàng."],
    ["food","A1.1","Syön aamupalaa kotona.","I eat breakfast at home.","Tôi ăn sáng ở nhà."],

    ["food","A1.2","Syön yleensä lounasta kello kaksitoista.","I usually eat lunch at twelve.","Tôi thường ăn trưa lúc mười hai giờ."],
    ["food","A1.2","Pidän vihanneksista ja hedelmistä.","I like vegetables and fruits.","Tôi thích rau và trái cây."],
    ["food","A1.2","Valmistan päivällisen koko perheelle.","I prepare dinner for the whole family.","Tôi chuẩn bị bữa tối cho cả gia đình."],
    ["food","A1.2","Lisään keittoon vähän suolaa.","I add a little salt to the soup.","Tôi thêm một ít muối vào súp."],
    ["food","A1.2","Ostan kaupasta tuoreita tomaatteja.","I buy fresh tomatoes from the shop.","Tôi mua cà chua tươi ở cửa hàng."],
    ["food","A1.2","Syömme kalaa yleensä perjantaisin.","We usually eat fish on Fridays.","Chúng tôi thường ăn cá vào thứ Sáu."],
    ["food","A1.2","Lapset haluavat syödä jäätelöä.","The children want to eat ice cream.","Các con muốn ăn kem."],
    ["food","A1.2","Minä juon teetä ilman sokeria.","I drink tea without sugar.","Tôi uống trà không đường."],
    ["food","A1.2","Mitä haluat syödä tänään?","What do you want to eat today?","Hôm nay bạn muốn ăn gì?"],
    ["food","A1.2","Ruoka tuoksuu todella hyvältä.","The food smells really good.","Thức ăn có mùi rất thơm."],

    ["food","A2","Yritän syödä monipuolisesti joka päivä.","I try to eat a varied diet every day.","Tôi cố gắng ăn uống đa dạng mỗi ngày."],
    ["food","A2","Valmistan usein ruokaa tuoreista aineksista.","I often cook with fresh ingredients.","Tôi thường nấu ăn bằng nguyên liệu tươi."],
    ["food","A2","Torilta voi ostaa paikallisia vihanneksia.","You can buy local vegetables at the market.","Bạn có thể mua rau địa phương ở chợ."],
    ["food","A2","Pakastan marjoja talvea varten.","I freeze berries for the winter.","Tôi đông lạnh các loại quả mọng để dùng vào mùa đông."],
    ["food","A2","En käytä ruoanlaitossa kovin paljon suolaa.","I do not use much salt when cooking.","Tôi không dùng nhiều muối khi nấu ăn."],
    ["food","A2","Kokeilen mielelläni uusia suomalaisia ruokia.","I like trying new Finnish dishes.","Tôi thích thử những món ăn Phần Lan mới."],
    ["food","A2","Aterian jälkeen juomme usein kahvia.","After the meal we often drink coffee.","Sau bữa ăn chúng tôi thường uống cà phê."],
    ["food","A2","Ruokakaupassa vertailen usein tuotteiden hintoja.","At the grocery store I often compare product prices.","Ở cửa hàng thực phẩm tôi thường so sánh giá sản phẩm."],
    ["food","A2","Kasvikset kannattaa pestä ennen syömistä.","Vegetables should be washed before eating.","Nên rửa rau trước khi ăn."],
    ["food","A2","Haluan oppia valmistamaan lisää suomalaisia ruokia.","I want to learn to prepare more Finnish dishes.","Tôi muốn học cách nấu thêm nhiều món ăn Phần Lan."],


    // =================================
    // 5. WORK — CÔNG VIỆC
    // =================================

    ["work","A1.1","Minä olen opiskelija.","I am a student.","Tôi là học sinh / sinh viên."],
    ["work","A1.1","Hän työskentelee sairaalassa.","He or she works in a hospital.","Anh ấy / cô ấy làm việc ở bệnh viện."],
    ["work","A1.1","Missä sinä olet töissä?","Where do you work?","Bạn làm việc ở đâu?"],
    ["work","A1.1","Minä etsin työtä.","I am looking for work.","Tôi đang tìm việc."],
    ["work","A1.1","Työ alkaa aamulla.","Work starts in the morning.","Công việc bắt đầu vào buổi sáng."],
    ["work","A1.1","Minulla on tänään vapaapäivä.","I have a day off today.","Hôm nay tôi được nghỉ."],
    ["work","A1.1","Opettaja on luokassa.","The teacher is in the classroom.","Giáo viên ở trong lớp học."],
    ["work","A1.1","Lääkäri auttaa potilasta.","The doctor helps the patient.","Bác sĩ giúp bệnh nhân."],
    ["work","A1.1","Minä opiskelen suomea.","I study Finnish.","Tôi học tiếng Phần Lan."],
    ["work","A1.1","Työpaikka on lähellä kotia.","The workplace is near home.","Nơi làm việc gần nhà."],

    ["work","A1.2","Työskentelen yleensä maanantaista perjantaihin.","I usually work from Monday to Friday.","Tôi thường làm việc từ thứ Hai đến thứ Sáu."],
    ["work","A1.2","Etsin uutta työpaikkaa Porista.","I am looking for a new job in Pori.","Tôi đang tìm việc mới ở Pori."],
    ["work","A1.2","Minulla ei ole vielä työkokemusta Suomessa.","I do not have work experience in Finland yet.","Tôi chưa có kinh nghiệm làm việc ở Phần Lan."],
    ["work","A1.2","Työkaverini ovat ystävällisiä.","My colleagues are friendly.","Đồng nghiệp của tôi thân thiện."],
    ["work","A1.2","Pidän työstä, jossa saan auttaa ihmisiä.","I like work where I can help people.","Tôi thích công việc mà tôi có thể giúp đỡ mọi người."],
    ["work","A1.2","Tarvitsen suomen kieltä työelämässä.","I need Finnish in working life.","Tôi cần tiếng Phần Lan trong công việc."],
    ["work","A1.2","Haen työpaikkaa internetin kautta.","I apply for jobs online.","Tôi tìm việc qua Internet."],
    ["work","A1.2","Työhaastattelu alkaa kello yhdeksän.","The job interview starts at nine.","Buổi phỏng vấn xin việc bắt đầu lúc chín giờ."],
    ["work","A1.2","Minun pitää lähettää työhakemus.","I have to send a job application.","Tôi phải gửi đơn xin việc."],
    ["work","A1.2","Haluan oppia uusia työtehtäviä.","I want to learn new work tasks.","Tôi muốn học những nhiệm vụ công việc mới."],

    ["work","A2","Etsin parhaillaan sopivaa työpaikkaa.","I am currently looking for a suitable job.","Hiện tại tôi đang tìm một công việc phù hợp."],
    ["work","A2","Aikaisempi työkokemukseni on ulkomailta.","My previous work experience is from abroad.","Kinh nghiệm làm việc trước đây của tôi là ở nước ngoài."],
    ["work","A2","Haluan kehittää suomen kielen taitoani työssä.","I want to improve my Finnish skills at work.","Tôi muốn cải thiện tiếng Phần Lan trong công việc."],
    ["work","A2","Työntekijän pitää noudattaa työpaikan sääntöjä.","An employee must follow workplace rules.","Nhân viên phải tuân thủ nội quy nơi làm việc."],
    ["work","A2","Työpäivän jälkeen menen yleensä kotiin bussilla.","After work I usually go home by bus.","Sau giờ làm tôi thường về nhà bằng xe buýt."],
    ["work","A2","Hyvä työilmapiiri on minulle tärkeä.","A good working atmosphere is important to me.","Môi trường làm việc tốt rất quan trọng đối với tôi."],
    ["work","A2","Kysyn työkaverilta apua, jos en ymmärrä tehtävää.","I ask a colleague for help if I do not understand a task.","Tôi hỏi đồng nghiệp giúp đỡ nếu không hiểu nhiệm vụ."],
    ["work","A2","Haluan löytää työn, jossa voin oppia lisää.","I want to find a job where I can learn more.","Tôi muốn tìm công việc mà tôi có thể học hỏi thêm."],
    ["work","A2","Työhaastattelussa kerron aikaisemmasta kokemuksestani.","In the job interview I talk about my previous experience.","Trong buổi phỏng vấn tôi kể về kinh nghiệm trước đây."],
    ["work","A2","Työn ja perhe-elämän tasapaino on tärkeää.","The balance between work and family life is important.","Sự cân bằng giữa công việc và gia đình rất quan trọng."],


    // =================================
    // 6. DAILY LIFE — SINH HOẠT HẰNG NGÀY
    // =================================

    ["daily","A1.1","Minä herään kello seitsemän.","I wake up at seven.","Tôi thức dậy lúc bảy giờ."],
    ["daily","A1.1","Peseydyn aamulla.","I wash myself in the morning.","Tôi vệ sinh cá nhân vào buổi sáng."],
    ["daily","A1.1","Syön aamupalaa kotona.","I eat breakfast at home.","Tôi ăn sáng ở nhà."],
    ["daily","A1.1","Menen kouluun bussilla.","I go to school by bus.","Tôi đi học bằng xe buýt."],
    ["daily","A1.1","Juon kahvia aamulla.","I drink coffee in the morning.","Tôi uống cà phê vào buổi sáng."],
    ["daily","A1.1","Palaan kotiin iltapäivällä.","I return home in the afternoon.","Tôi trở về nhà vào buổi chiều."],
    ["daily","A1.1","Teen ruokaa illalla.","I cook in the evening.","Tôi nấu ăn vào buổi tối."],
    ["daily","A1.1","Katson televisiota kotona.","I watch television at home.","Tôi xem tivi ở nhà."],
    ["daily","A1.1","Menemme nukkumaan kello kymmenen.","We go to bed at ten.","Chúng tôi đi ngủ lúc mười giờ."],
    ["daily","A1.1","Tänään on maanantai.","Today is Monday.","Hôm nay là thứ Hai."],

    ["daily","A1.2","Menen joka päivä suomen kielen kurssille.","I go to Finnish class every day.","Tôi đi học tiếng Phần Lan mỗi ngày."],
    ["daily","A1.2","Käyn kaupassa koulun jälkeen.","I go shopping after school.","Tôi đi mua sắm sau giờ học."],
    ["daily","A1.2","Teen kotitehtävät ennen illallista.","I do my homework before dinner.","Tôi làm bài tập trước bữa tối."],
    ["daily","A1.2","Siivoan keittiön ruoanlaiton jälkeen.","I clean the kitchen after cooking.","Tôi dọn bếp sau khi nấu ăn."],
    ["daily","A1.2","Kävelen usein puistossa iltapäivällä.","I often walk in the park in the afternoon.","Tôi thường đi bộ trong công viên vào buổi chiều."],
    ["daily","A1.2","Luen kirjaa ennen nukkumaanmenoa.","I read a book before going to sleep.","Tôi đọc sách trước khi đi ngủ."],
    ["daily","A1.2","Soitan ystävälleni viikonloppuna.","I call my friend at the weekend.","Tôi gọi điện cho bạn vào cuối tuần."],
    ["daily","A1.2","Pesen pyykkiä yleensä sunnuntaisin.","I usually do laundry on Sundays.","Tôi thường giặt quần áo vào Chủ nhật."],
    ["daily","A1.2","Minulla on paljon tekemistä tänään.","I have a lot to do today.","Hôm nay tôi có nhiều việc phải làm."],
    ["daily","A1.2","Vapaa-ajalla kuuntelen musiikkia.","In my free time I listen to music.","Khi rảnh tôi nghe nhạc."],

    ["daily","A2","Herään aikaisin, koska kurssi alkaa aamulla.","I wake up early because the course starts in the morning.","Tôi thức dậy sớm vì khóa học bắt đầu vào buổi sáng."],
    ["daily","A2","Yritän suunnitella päiväni etukäteen.","I try to plan my day in advance.","Tôi cố gắng lên kế hoạch cho ngày mới trước."],
    ["daily","A2","Jos sää on hyvä, käyn kävelyllä ulkona.","If the weather is good, I go for a walk outside.","Nếu thời tiết đẹp, tôi đi dạo bên ngoài."],
    ["daily","A2","Viikonloppuisin meillä on enemmän aikaa levätä.","At weekends we have more time to rest.","Vào cuối tuần chúng tôi có nhiều thời gian nghỉ ngơi hơn."],
    ["daily","A2","Käytän aamulla hetken suomen opiskeluun.","I spend a little time studying Finnish in the morning.","Buổi sáng tôi dành một chút thời gian học tiếng Phần Lan."],
    ["daily","A2","Teen ostoslistan ennen kauppaan lähtemistä.","I make a shopping list before going to the store.","Tôi lập danh sách mua sắm trước khi đi cửa hàng."],
    ["daily","A2","Kun olen väsynyt, menen aikaisemmin nukkumaan.","When I am tired, I go to bed earlier.","Khi mệt, tôi đi ngủ sớm hơn."],
    ["daily","A2","Yritän löytää aikaa sekä opiskelulle että perheelle.","I try to find time for both studying and family.","Tôi cố gắng dành thời gian cho cả việc học và gia đình."],
    ["daily","A2","Teen usein seuraavan päivän suunnitelmat illalla.","I often make plans for the next day in the evening.","Tôi thường lên kế hoạch cho ngày hôm sau vào buổi tối."],
    ["daily","A2","Pienet päivittäiset harjoitukset auttavat oppimaan kieltä.","Small daily exercises help with learning a language.","Những bài luyện tập nhỏ hằng ngày giúp học ngôn ngữ."],


    // =================================
    // 7. WEATHER — THỜI TIẾT
    // =================================

    ["weather","A1.1","Tänään on kylmä sää.","The weather is cold today.","Hôm nay thời tiết lạnh."],
    ["weather","A1.1","Aurinko paistaa.","The sun is shining.","Mặt trời đang chiếu sáng."],
    ["weather","A1.1","Ulkona sataa vettä.","It is raining outside.","Ngoài trời đang mưa."],
    ["weather","A1.1","Nyt sataa lunta.","It is snowing now.","Bây giờ trời đang có tuyết."],
    ["weather","A1.1","Tuulee paljon tänään.","It is very windy today.","Hôm nay trời nhiều gió."],
    ["weather","A1.1","Taivas on pilvinen.","The sky is cloudy.","Bầu trời nhiều mây."],
    ["weather","A1.1","Kesällä on lämmintä.","It is warm in summer.","Mùa hè trời ấm."],
    ["weather","A1.1","Talvella on usein pakkasta.","In winter it is often freezing.","Mùa đông thường có băng giá."],
    ["weather","A1.1","Ulkona on kaunis sää.","The weather is beautiful outside.","Ngoài trời thời tiết đẹp."],
    ["weather","A1.1","Minulla on lämmin takki.","I have a warm coat.","Tôi có một chiếc áo khoác ấm."],

    ["weather","A1.2","Ulkona sataa räntää.","It is sleeting outside.","Ngoài trời đang mưa tuyết."],
    ["weather","A1.2","Lämpötila on tänään viisi astetta.","The temperature is five degrees today.","Nhiệt độ hôm nay là năm độ."],
    ["weather","A1.2","Aamulla oli sumua.","It was foggy in the morning.","Buổi sáng có sương mù."],
    ["weather","A1.2","Iltapäivällä aurinko tulee esiin.","The sun will come out in the afternoon.","Buổi chiều mặt trời sẽ ló ra."],
    ["weather","A1.2","Laitoin pipon päähän ennen ulosmenoa.","I put a hat on before going outside.","Tôi đội mũ trước khi ra ngoài."],
    ["weather","A1.2","Syksyllä lehdet muuttuvat keltaisiksi.","In autumn the leaves turn yellow.","Vào mùa thu lá chuyển sang màu vàng."],
    ["weather","A1.2","Keväällä lumi alkaa sulaa.","In spring the snow begins to melt.","Vào mùa xuân tuyết bắt đầu tan."],
    ["weather","A1.2","Sää muuttuu nopeasti syksyllä.","The weather changes quickly in autumn.","Thời tiết thay đổi nhanh vào mùa thu."],
    ["weather","A1.2","En halua mennä ulos sateella.","I do not want to go outside in the rain.","Tôi không muốn ra ngoài khi trời mưa."],
    ["weather","A1.2","Huomenna voi olla aurinkoista.","Tomorrow it may be sunny.","Ngày mai có thể trời nắng."],

    ["weather","A2","Huomenna sää on lämpimämpi kuin tänään.","Tomorrow the weather will be warmer than today.","Ngày mai thời tiết sẽ ấm hơn hôm nay."],
    ["weather","A2","Talvella päivät ovat lyhyitä ja yöt pitkiä.","In winter the days are short and the nights are long.","Mùa đông ngày ngắn và đêm dài."],
    ["weather","A2","Lumisateen jälkeen tiet voivat olla liukkaita.","After snowfall the roads can be slippery.","Sau khi tuyết rơi, đường có thể trơn trượt."],
    ["weather","A2","Pidän syksystä, koska metsän värit ovat kauniita.","I like autumn because the colours of the forest are beautiful.","Tôi thích mùa thu vì màu sắc của rừng rất đẹp."],
    ["weather","A2","Sääennusteen mukaan viikonloppuna sataa vettä.","According to the weather forecast, it will rain at the weekend.","Theo dự báo thời tiết, cuối tuần trời sẽ mưa."],
    ["weather","A2","Pakkasella kannattaa pukeutua lämpimästi.","When it is freezing, it is a good idea to dress warmly.","Khi trời giá rét, nên mặc quần áo ấm."],
    ["weather","A2","Kevään ensimmäiset lämpimät päivät tuntuvat mukavilta.","The first warm days of spring feel pleasant.","Những ngày ấm áp đầu tiên của mùa xuân thật dễ chịu."],
    ["weather","A2","Voimakas tuuli saa ilman tuntumaan kylmemmältä.","Strong wind makes the air feel colder.","Gió mạnh khiến không khí có cảm giác lạnh hơn."],
    ["weather","A2","Kesällä nautimme pitkistä ja valoisista illoista.","In summer we enjoy long and bright evenings.","Mùa hè chúng tôi tận hưởng những buổi tối dài và sáng."],
    ["weather","A2","Tarkistan sääennusteen ennen metsäretkeä.","I check the weather forecast before a trip to the forest.","Tôi kiểm tra dự báo thời tiết trước chuyến đi rừng."],


    // =================================
    // 8. SHOPPING — MUA SẮM
    // =================================

    ["shopping","A1.1","Missä on lähin kauppa?","Where is the nearest shop?","Cửa hàng gần nhất ở đâu?"],
    ["shopping","A1.1","Paljonko tämä maksaa?","How much does this cost?","Cái này giá bao nhiêu?"],
    ["shopping","A1.1","Haluan ostaa leipää.","I want to buy bread.","Tôi muốn mua bánh mì."],
    ["shopping","A1.1","Missä maito on?","Where is the milk?","Sữa ở đâu?"],
    ["shopping","A1.1","Tarvitsen yhden pussin.","I need one bag.","Tôi cần một cái túi."],
    ["shopping","A1.1","Voinko maksaa kortilla?","Can I pay by card?","Tôi có thể thanh toán bằng thẻ không?"],
    ["shopping","A1.1","Tämä omena on punainen.","This apple is red.","Quả táo này màu đỏ."],
    ["shopping","A1.1","Ostan kaksi banaania.","I buy two bananas.","Tôi mua hai quả chuối."],
    ["shopping","A1.1","Kauppa on tänään auki.","The shop is open today.","Hôm nay cửa hàng mở cửa."],
    ["shopping","A1.1","Kiitos paljon!","Thank you very much!","Cảm ơn rất nhiều!"],

    ["shopping","A1.2","Paljonko tämä omena maksaa?","How much does this apple cost?","Quả táo này giá bao nhiêu?"],
    ["shopping","A1.2","Etsin uusia talvikenkiä.","I am looking for new winter shoes.","Tôi đang tìm giày mùa đông mới."],
    ["shopping","A1.2","Onko tämä paita saatavilla isompana?","Is this shirt available in a larger size?","Áo này có cỡ lớn hơn không?"],
    ["shopping","A1.2","Haluaisin ostaa tuoreita vihanneksia.","I would like to buy fresh vegetables.","Tôi muốn mua rau tươi."],
    ["shopping","A1.2","Missä kassajono alkaa?","Where does the checkout queue start?","Hàng chờ thanh toán bắt đầu ở đâu?"],
    ["shopping","A1.2","Tarvitsen kuitin ostoksista.","I need a receipt for the purchases.","Tôi cần hóa đơn mua hàng."],
    ["shopping","A1.2","Voinko palauttaa tämän tuotteen?","Can I return this product?","Tôi có thể trả lại sản phẩm này không?"],
    ["shopping","A1.2","Tämä tuote on tänään tarjouksessa.","This product is on sale today.","Sản phẩm này hôm nay đang được giảm giá."],
    ["shopping","A1.2","Ostan yleensä ruokaa kerran viikossa.","I usually buy food once a week.","Tôi thường mua thực phẩm mỗi tuần một lần."],
    ["shopping","A1.2","Tarvitsemme kotiin lisää pesuainetta.","We need more detergent at home.","Chúng tôi cần thêm nước giặt ở nhà."],

    ["shopping","A2","Vertailen eri kauppojen hintoja ennen ostamista.","I compare prices in different shops before buying.","Tôi so sánh giá ở các cửa hàng khác nhau trước khi mua."],
    ["shopping","A2","Yritän ostaa vain niitä tuotteita, joita tarvitsen.","I try to buy only the products I need.","Tôi cố gắng chỉ mua những sản phẩm mình cần."],
    ["shopping","A2","Ruokakaupassa on aamulla yleensä vähemmän ihmisiä.","There are usually fewer people in the grocery store in the morning.","Buổi sáng cửa hàng thực phẩm thường ít người hơn."],
    ["shopping","A2","Säästän rahaa tekemällä ostoslistan etukäteen.","I save money by making a shopping list in advance.","Tôi tiết kiệm tiền bằng cách lập danh sách mua sắm trước."],
    ["shopping","A2","Tuoreet marjat ovat kesällä usein edullisempia.","Fresh berries are often cheaper in summer.","Các loại quả mọng tươi thường rẻ hơn vào mùa hè."],
    ["shopping","A2","Voitko auttaa minua löytämään tämän tuotteen?","Can you help me find this product?","Bạn có thể giúp tôi tìm sản phẩm này không?"],
    ["shopping","A2","Ostan usein tuotteita, jotka ovat tarjouksessa.","I often buy products that are on sale.","Tôi thường mua những sản phẩm đang giảm giá."],
    ["shopping","A2","Käytän kestokassia muovipussin sijasta.","I use a reusable bag instead of a plastic bag.","Tôi dùng túi tái sử dụng thay cho túi nhựa."],
    ["shopping","A2","Jos tuote on viallinen, voin pyytää hyvitystä.","If a product is faulty, I can ask for a refund.","Nếu sản phẩm bị lỗi, tôi có thể yêu cầu hoàn tiền."],
    ["shopping","A2","Tarkistan viimeisen käyttöpäivän ennen ostamista.","I check the expiry date before buying.","Tôi kiểm tra hạn sử dụng trước khi mua."],
   
    // =================================
    // 9. TRAVEL — MATKAILU PARIISI
    // =================================

    ["travel", "A1.2", "Pekka ja minä lähdemme tänään Ranskaan.", "Pekka and I are leaving for France today.", "Pekka và tôi hôm nay khởi hành đi Pháp."],
    ["travel", "A1.2", "Me matkustamme lentokoneella Pariisiin.", "We travel to Paris by plane.", "Chúng tôi đi máy bay đến Paris."],
    ["travel", "A1.2", "Lentokoneessa minä luen kirjaa.", "On the plane, I read a book.", "Trên máy bay, tôi đọc sách."],
    ["travel", "A1.2", "Pekka nukkuu vähän matkan aikana.", "Pekka sleeps a little during the journey.", "Pekka ngủ một chút trong chuyến đi."],
    ["travel", "A1.2", "Kun saavumme Pariisiin, ystävämme odottavat meitä.", "When we arrive in Paris, our friends are waiting for us.", "Khi chúng tôi đến Paris, bạn bè đang đợi chúng tôi."],
    ["travel", "A1.2", "He tervehtivät meitä iloisesti.", "They greet us happily.", "Họ vui vẻ chào đón chúng tôi."],
    ["travel", "A1.2", "Sitten menemme autolla keskustaan.", "Then we go to the city centre by car.", "Sau đó chúng tôi đi ô tô vào trung tâm thành phố."],
    ["travel", "A1.2", "Pariisi on suuri ja kaunis kaupunki.", "Paris is a big and beautiful city.", "Paris là một thành phố lớn và xinh đẹp."],
    ["travel", "A1.2", "Pekka ottaa paljon valokuvia.", "Pekka takes many photos.", "Pekka chụp rất nhiều ảnh."],
    ["travel", "A1.2", "Iltapäivällä istumme pienessä kahvilassa.", "In the afternoon, we sit in a small café.", "Buổi chiều, chúng tôi ngồi trong một quán cà phê nhỏ."],
    ["travel", "A1.2", "Minä kirjoitan postikortin Suomeen.", "I write a postcard to Finland.", "Tôi viết một tấm bưu thiếp gửi về Phần Lan."],
    ["travel", "A1.2", "Pekka ostaa Pariisin kartan kioskista.", "Pekka buys a map of Paris from a kiosk.", "Pekka mua bản đồ Paris ở quầy bán báo."],
    ["travel", "A1.2", "Illalla menemme ystäviemme kotiin.", "In the evening, we go to our friends' home.", "Buổi tối, chúng tôi đến nhà bạn bè."],
    ["travel", "A1.2", "Yövymme heidän luonaan kaksi yötä.", "We stay at their place for two nights.", "Chúng tôi ở nhà họ hai đêm."],
    ["travel", "A1.2", "Seuraavana päivänä vierailemme Eiffel-tornissa.", "The next day, we visit the Eiffel Tower.", "Ngày hôm sau, chúng tôi tham quan tháp Eiffel."],
    ["travel", "A1.2", "Matka Pariisiin on todella mukava.", "The trip to Paris is really nice.", "Chuyến đi Paris thật sự rất thú vị."],
   // =================================
    // 10. TRAVEL — MATKAILU A1.1
    // =================================

    ["travel","A1.1","Minä matkustan Suomeen.","I travel to Finland.","Tôi đi du lịch đến Phần Lan."],
    ["travel","A1.1","Minä menen lentokentälle.","I go to the airport.","Tôi đi đến sân bay."],
    ["travel","A1.1","Missä lentokenttä on?","Where is the airport?","Sân bay ở đâu?"],
    ["travel","A1.1","Minulla on matkalaukku.","I have a suitcase.","Tôi có một chiếc vali."],
    ["travel","A1.1","Tässä on passini.","Here is my passport.","Đây là hộ chiếu của tôi."],
    ["travel","A1.1","Lentokone lähtee aamulla.","The plane leaves in the morning.","Máy bay khởi hành vào buổi sáng."],
    ["travel","A1.1","Minä istun lentokoneessa.","I sit on the plane.","Tôi ngồi trên máy bay."],
    ["travel","A1.1","Missä minun hotellini on?","Where is my hotel?","Khách sạn của tôi ở đâu?"],
    ["travel","A1.1","Haluan yhden huoneen.","I want one room.","Tôi muốn một phòng."],
    ["travel","A1.1","Matka on mukava.","The trip is nice.","Chuyến đi thật vui."],
       // =================================
    // 11. TRAVEL — MATKAILU A1.2
    // =================================

    ["travel","A1.2","Lähdemme lomalle lauantaina.","We leave for holiday on Saturday.","Chúng tôi đi nghỉ vào thứ Bảy."],
    ["travel","A1.2","Ostan lentolipun verkosta.","I buy a flight ticket online.","Tôi mua vé máy bay trên mạng."],
    ["travel","A1.2","Lentokentällä on paljon ihmisiä.","There are many people at the airport.","Có nhiều người ở sân bay."],
    ["travel","A1.2","Minun lentoni lähtee kello kahdeksan.","My flight leaves at eight o'clock.","Chuyến bay của tôi khởi hành lúc tám giờ."],
    ["travel","A1.2","Me saavumme Pariisiin illalla.","We arrive in Paris in the evening.","Chúng tôi đến Paris vào buổi tối."],
    ["travel","A1.2","Otan taksin hotellille.","I take a taxi to the hotel.","Tôi đi taxi đến khách sạn."],
    ["travel","A1.2","Hotelli on lähellä keskustaa.","The hotel is near the city centre.","Khách sạn gần trung tâm thành phố."],
    ["travel","A1.2","Varaamme huoneen kahdeksi yöksi.","We book a room for two nights.","Chúng tôi đặt phòng hai đêm."],
    ["travel","A1.2","Haluamme nähdä kaupungin nähtävyydet.","We want to see the city's sights.","Chúng tôi muốn tham quan các địa điểm nổi tiếng của thành phố."],
    ["travel","A1.2","Ostamme matkamuistoja perheellemme.","We buy souvenirs for our family.","Chúng tôi mua quà lưu niệm cho gia đình."]

].map(([topic, level, fi, en, vi]) => ({
    topic,
    level,
    fi,
    en,
    vi
}));


/* =========================================
   VOCABULARY DATA
   10 TOPICS • 150 WORDS • A1.1–A2
========================================= */

const vocabularyTopics = [
    { id: "personal", fi: "Henkilötiedot", en: "Personal information", vi: "Thông tin cá nhân" },
    { id: "family", fi: "Perhe", en: "Family", vi: "Gia đình" },
    { id: "food", fi: "Ruoka", en: "Food", vi: "Đồ ăn" },
    { id: "home", fi: "Koti", en: "Home", vi: "Nhà cửa" },
    { id: "work", fi: "Työ ja ammatit", en: "Work and professions", vi: "Công việc và nghề nghiệp" },
    { id: "opposites", fi: "Vastakohdat", en: "Opposites", vi: "Tính từ trái nghĩa" },
    { id: "nature", fi: "Luonto", en: "Nature", vi: "Thiên nhiên" },
    { id: "animals", fi: "Eläimet", en: "Animals", vi: "Động vật" },
    { id: "plants", fi: "Kasvit", en: "Plants", vi: "Thực vật" },
    { id: "sports", fi: "Urheilu", en: "Sports", vi: "Thể thao" }
];


const vocabularyWords = [

    // 1. HENKILÖTIEDOT — PERSONAL INFORMATION
    ["personal","A1.1","nimi","name","Tên"],
    ["personal","A1.1","ikä","age","Tuổi"],
    ["personal","A1.1","maa","country","Đất nước"],
    ["personal","A1.1","kieli","language","Ngôn ngữ"],
    ["personal","A1.1","osoite","address","Địa chỉ"],
    ["personal","A1.2","puhelinnumero","phone number","Số điện thoại"],
    ["personal","A1.2","syntymäpäivä","birthday","Sinh nhật"],
    ["personal","A1.2","syntymäpaikka","place of birth","Nơi sinh"],
    ["personal","A1.2","kansalaisuus","nationality","Quốc tịch"],
    ["personal","A1.2","ammatti","occupation","Nghề nghiệp"],
    ["personal","A2","syntymäaika","date of birth","Ngày sinh"],
    ["personal","A2","siviilisääty","marital status","Tình trạng hôn nhân"],
    ["personal","A2","äidinkieli","mother tongue","Tiếng mẹ đẻ"],
    ["personal","A2","kotiosoite","home address","Địa chỉ nhà"],
    ["personal","A2","yhteystiedot","contact information","Thông tin liên lạc"],

    // 2. PERHE — FAMILY
    ["family","A1.1","perhe","family","Gia đình"],
    ["family","A1.1","äiti","mother","Mẹ"],
    ["family","A1.1","isä","father","Bố"],
    ["family","A1.1","veli","brother","Anh/em trai"],
    ["family","A1.1","sisko","sister","Chị/em gái"],
    ["family","A1.2","vanhemmat","parents","Bố mẹ"],
    ["family","A1.2","lapsi","child","Trẻ em / con"],
    ["family","A1.2","tytär","daughter","Con gái"],
    ["family","A1.2","poika","son / boy","Con trai / bé trai"],
    ["family","A1.2","aviomies","husband","Chồng"],
    ["family","A2","vaimo","wife","Vợ"],
    ["family","A2","isoäiti","grandmother","Bà"],
    ["family","A2","isoisä","grandfather","Ông"],
    ["family","A2","sukulainen","relative","Họ hàng"],
    ["family","A2","serkku","cousin","Anh chị em họ"],

    // 3. RUOKA — FOOD
    ["food","A1.1","leipä","bread","Bánh mì"],
    ["food","A1.1","maito","milk","Sữa"],
    ["food","A1.1","vesi","water","Nước"],
    ["food","A1.1","omena","apple","Táo"],
    ["food","A1.1","banaani","banana","Chuối"],
    ["food","A1.1","voi","butter","Bơ"],
    ["food","A1.1","juusto","cheese","Phô mai"],
    ["food","A1.1","jogurtti","yogurt","Sữa chua"],
    ["food","A1.2","peruna","potato","Khoai tây"],
    ["food","A1.2","porkkana","carrot","Cà rốt"],
    ["food","A1.2","tomaatti","tomato","Cà chua"],
    ["food","A1.2","kurkku","cucumber","Dưa chuột"],
    ["food","A1.2","kananmuna","egg","Trứng gà"],
    ["food","A1.2","riisi","rice","Gạo / cơm"],
    ["food","A1.2","sipuli","onion","Hành tây"],
    ["food","A2","kana","chicken","Thịt gà"],
    ["food","A2","kala","fish","Cá"],
    ["food","A2","naudanliha","beef","Thịt bò"],
    ["food","A2","sienet","mushrooms","Nấm"],
    ["food","A2","mustikka","bilberry","Việt quất rừng"],
    ["food","A2","jauheliha","minced meat","Thịt xay"],
    ["food","A2","lohi","salmon","Cá hồi"],
    ["food","A2","kerma","cream","Kem tươi"],
    ["food","A2","jauho","flour","Bột mì"],
    ["food","A2","mauste","spice","Gia vị"],

    // 4. KOTI — HOME
    ["home","A1.1","koti","home","Nhà"],
    ["home","A1.1","talo","house","Ngôi nhà"],
    ["home","A1.1","huone","room","Phòng"],
    ["home","A1.1","keittiö","kitchen","Nhà bếp"],
    ["home","A1.1","ovi","door","Cửa ra vào"],
    ["home","A1.1","lattia","floor","Sàn nhà"],
    ["home","A1.1","seinä","wall","Bức tường"],
    ["home","A1.1","lamppu","lamp","Đèn"],
    ["home","A1.2","ikkuna","window","Cửa sổ"],
    ["home","A1.2","pöytä","table","Cái bàn"],
    ["home","A1.2","tuoli","chair","Ghế"],
    ["home","A1.2","sänky","bed","Giường"],
    ["home","A1.2","sohva","sofa","Ghế sofa"],
    ["home","A1.2","eteinen","hallway","Hành lang / lối vào"],
    ["home","A1.2","parveke","balcony","Ban công"],
    ["home","A2","jääkaappi","refrigerator","Tủ lạnh"],
    ["home","A2","pesukone","washing machine","Máy giặt"],
    ["home","A2","kylpyhuone","bathroom","Phòng tắm"],
    ["home","A2","makuuhuone","bedroom","Phòng ngủ"],
    ["home","A2","olohuone","living room","Phòng khách"],
    ["home","A2","kellari","basement","Tầng hầm"],
    ["home","A2","ullakko","attic","Gác mái"],
    ["home","A2","katto","roof","Mái nhà"],
    ["home","A2","verho","curtain","Rèm cửa"],
    ["home","A2","avain","key","Chìa khóa"],

    // 5. TYÖ JA AMMATIT — WORK AND PROFESSIONS
    ["work","A1.1","työ","work","Công việc"],
    ["work","A1.1","opettaja","teacher","Giáo viên"],
    ["work","A1.1","lääkäri","doctor","Bác sĩ"],
    ["work","A1.1","hoitaja","nurse / caregiver","Nhân viên chăm sóc"],
    ["work","A1.1","opiskelija","student","Học sinh / sinh viên"],
    ["work","A1.1","työpaikka","workplace","Nơi làm việc"],
    ["work","A1.1","työntekijä","employee","Nhân viên"],
    ["work","A1.1","palkka","salary","Tiền lương"],
    ["work","A1.1","tauko","break","Giờ nghỉ"],
    ["work","A1.1","asiakas","customer","Khách hàng"],
    ["work","A1.2","kokki","cook / chef","Đầu bếp"],
    ["work","A1.2","siivooja","cleaner","Nhân viên vệ sinh"],
    ["work","A1.2","kuljettaja","driver","Tài xế"],
    ["work","A1.2","myyjä","salesperson","Nhân viên bán hàng"],
    ["work","A1.2","rakentaja","builder","Thợ xây"],
    ["work","A1.2","työaika","working hours","Giờ làm việc"],
    ["work","A1.2","kollega","colleague","Đồng nghiệp"],
    ["work","A1.2","kokous","meeting","Cuộc họp"],
    ["work","A1.2","työvuoro","work shift","Ca làm việc"],
    ["work","A2","sairaanhoitaja","registered nurse","Điều dưỡng"],
    ["work","A2","hammaslääkäri","dentist","Nha sĩ"],
    ["work","A2","maanviljelijä","farmer","Nông dân"],
    ["work","A2","kirvesmies","carpenter","Thợ mộc"],
    ["work","A2","työnantaja","employer","Người sử dụng lao động"],
    ["work","A2","työsopimus","employment contract","Hợp đồng lao động"],
    ["work","A2","työhakemus","job application","Đơn xin việc"],
    ["work","A2","työhaastattelu","job interview","Phỏng vấn xin việc"],
    ["work","A2","osa-aikatyö","part-time work","Công việc bán thời gian"],
    ["work","A2","esimies","supervisor","Người quản lý"],

    // 6. VASTAKOHDAT — OPPOSITES
    ["opposites","A1.1","iso","big","To / lớn"],
    ["opposites","A1.1","pieni","small","Nhỏ"],
    ["opposites","A1.1","hyvä","good","Tốt"],
    ["opposites","A1.1","huono","bad","Xấu / kém"],
    ["opposites","A1.1","uusi","new","Mới"],
    ["opposites","A1.1","lämmin","warm","Ấm"],
    ["opposites","A1.1","halpa","cheap","Rẻ"],
    ["opposites","A1.1","kallis","expensive","Đắt"],
    ["opposites","A1.2","vanha","old","Cũ / già"],
    ["opposites","A1.2","pitkä","long / tall","Dài / cao"],
    ["opposites","A1.2","lyhyt","short","Ngắn / thấp"],
    ["opposites","A1.2","kuuma","hot","Nóng"],
    ["opposites","A1.2","kylmä","cold","Lạnh"],
    ["opposites","A1.2","kevyt","light","Nhẹ"],
    ["opposites","A1.2","raskas","heavy","Nặng"],
    ["opposites","A2","nopea","fast","Nhanh"],
    ["opposites","A2","hidas","slow","Chậm"],
    ["opposites","A2","helppo","easy","Dễ"],
    ["opposites","A2","vaikea","difficult","Khó"],
    ["opposites","A2","puhdas","clean","Sạch"],
    ["opposites","A2","likainen","dirty","Bẩn"],
    ["opposites","A2","märkä","wet","Ướt"],
    ["opposites","A2","kuiva","dry","Khô"],
    ["opposites","A2","äänekäs","loud","Ồn ào"],
    ["opposites","A2","hiljainen","quiet","Yên tĩnh"],

    // 7. LUONTO — NATURE
    ["nature","A1.1","metsä","forest","Rừng"],
    ["nature","A1.1","järvi","lake","Hồ"],
    ["nature","A1.1","joki","river","Sông"],
    ["nature","A1.1","meri","sea","Biển"],
    ["nature","A1.1","vuori","mountain","Núi"],
    ["nature","A1.2","taivas","sky","Bầu trời"],
    ["nature","A1.2","aurinko","sun","Mặt trời"],
    ["nature","A1.2","kuu","moon","Mặt trăng"],
    ["nature","A1.2","tähti","star","Ngôi sao"],
    ["nature","A1.2","sade","rain","Mưa"],
    ["nature","A2","lumi","snow","Tuyết"],
    ["nature","A2","tuuli","wind","Gió"],
    ["nature","A2","pilvi","cloud","Đám mây"],
    ["nature","A2","ranta","shore / beach","Bờ biển / bãi biển"],
    ["nature","A2","saari","island","Hòn đảo"],

    // 8. ELÄIMET — ANIMALS
    ["animals","A1.1","koira","dog","Chó"],
    ["animals","A1.1","kissa","cat","Mèo"],
    ["animals","A1.1","hevonen","horse","Ngựa"],
    ["animals","A1.1","lehmä","cow","Bò"],
    ["animals","A1.1","sika","pig","Lợn"],
    ["animals","A1.2","lammas","sheep","Cừu"],
    ["animals","A1.2","kana","hen / chicken","Gà"],
    ["animals","A1.2","lintu","bird","Chim"],
    ["animals","A1.2","kala","fish","Cá"],
    ["animals","A1.2","jänis","hare","Thỏ rừng"],
    ["animals","A2","karhu","bear","Gấu"],
    ["animals","A2","susi","wolf","Sói"],
    ["animals","A2","kettu","fox","Cáo"],
    ["animals","A2","hirvi","moose","Nai sừng tấm"],
    ["animals","A2","orava","squirrel","Sóc"],

    // 9. KASVIT — PLANTS
    ["plants","A1.1","puu","tree","Cây"],
    ["plants","A1.1","kukka","flower","Hoa"],
    ["plants","A1.1","ruoho","grass","Cỏ"],
    ["plants","A1.1","lehti","leaf","Lá"],
    ["plants","A1.1","ruusu","rose","Hoa hồng"],
    ["plants","A1.2","koivu","birch","Cây bạch dương"],
    ["plants","A1.2","mänty","pine","Cây thông"],
    ["plants","A1.2","kuusi","spruce","Cây vân sam"],
    ["plants","A1.2","sieni","mushroom","Nấm"],
    ["plants","A1.2","marja","berry","Quả mọng"],
    ["plants","A2","mustikka","bilberry","Việt quất rừng"],
    ["plants","A2","puolukka","lingonberry","Quả lingonberry"],
    ["plants","A2","mansikka","strawberry","Dâu tây"],
    ["plants","A2","vadelma","raspberry","Quả mâm xôi"],
    ["plants","A2","voikukka","dandelion","Hoa bồ công anh"],

    // 10. URHEILU — SPORTS
    ["sports","A1.1","urheilu","sports","Thể thao"],
    ["sports","A1.1","jalkapallo","football / soccer","Bóng đá"],
    ["sports","A1.1","jääkiekko","ice hockey","Khúc côn cầu trên băng"],
    ["sports","A1.1","uinti","swimming","Bơi lội"],
    ["sports","A1.1","juoksu","running","Chạy bộ"],
    ["sports","A1.2","hiihto","skiing","Trượt tuyết"],
    ["sports","A1.2","pyöräily","cycling","Đạp xe"],
    ["sports","A1.2","koripallo","basketball","Bóng rổ"],
    ["sports","A1.2","lentopallo","volleyball","Bóng chuyền"],
    ["sports","A1.2","tennis","tennis","Quần vợt"],
    ["sports","A2","sulkapallo","badminton","Cầu lông"],
    ["sports","A2","voimistelu","gymnastics","Thể dục dụng cụ"],
    ["sports","A2","luistelu","skating","Trượt băng"],
    ["sports","A2","painonnosto","weightlifting","Cử tạ"],
    ["sports","A2","retkeily","hiking","Đi bộ đường dài"]

].map(([topic, level, fi, en, vi]) => ({
    topic,
    level,
    fi,
    en,
    vi
}));


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
    const menu = getElement("menu-" + name);
    const desc = getElement("desc-" + name);

    if (menu && desc) {
        menu.textContent = t[name];
        desc.textContent = t[description];
    }
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

case "vocabularyTopics":
    showVocabularyTopics();
    break;

case "vocabularyLevels":
    showVocabularyLevels();
    break;

case "vocabularyCard":
    showVocabularyCard();
    break;
case "verbTypes":
    showVerbTypes();
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
    dictationAttempts = 0;

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

    const voices = window.speechSynthesis.getVoices();
    const satuVoice = voices.find(voice => voice.name === "Satu");

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(current.fi);

    speech.lang = "fi-FI";
    speech.rate = 0.7;
    speech.pitch = 1;

    if (satuVoice) {
        speech.voice = satuVoice;
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

    dictationAttempts++;

if (dictationAttempts < 3) {
    result.innerHTML += `
        <p>⚠️ Lần thử ${dictationAttempts}/3. Yritä uudelleen!</p>
    `;

    getElement("next-button").disabled = true;
} else {
    answerChecked = true;

    result.innerHTML += `
        <hr>
        <h3>📖 Đáp án đúng</h3>
        <p><strong>🇫🇮 ${escapeHTML(current.fi)}</strong></p>
        <p>🇬🇧 ${escapeHTML(current.en)}</p>
        <p>🇻🇳 ${escapeHTML(current.vi)}</p>
        <p>Đã hết 3 lần thử. Bạn có thể chuyển sang câu tiếp theo.</p>
    `;

    getElement("next-button").disabled = false;
    getElement("check-button").disabled = true;
}
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

function showVerbTypes() {
    currentScreen = "verbTypes";

    const lesson = getElement("lesson");
    lesson.dataset.type = "verbs";

    lesson.innerHTML = `
        <h2>🔤 VERBIT – ĐỘNG TỪ</h2>
        <p>Valitse verbityyppi / Choose a verb type / Chọn nhóm động từ</p>

        <div class="verb-types">
            ${[1, 2, 3, 4, 5, 6].map(type => `
                <button onclick="openVerbType(${type})">
                    Verbityyppi ${type}
                    <small>
                        ${type === 1 ? "80 động từ" : type === 2 ? "50 động từ" : "Coming soon"}
                    </small>
                </button>
            `).join("")}
        </div>

        <button onclick="showHome()">← Home</button>
    `;

    scrollToLesson();
}


function showVocabularyTopics() {
    currentScreen = "vocabularyTopics";

    const lesson = getElement("lesson");
    lesson.dataset.type = "vocabulary";

    const title = getText("vocabulary");

    lesson.innerHTML = `
        <h2>📚 ${title}</h2>
        <p>Choose a vocabulary topic</p>

        <div class="topic-grid">
            ${vocabularyTopics.map(topic => `
                <button onclick="selectVocabularyTopic('${topic.id}')">
                    ${topic.fi}
                    <br>
                    <small>${topic.vi}</small>
                </button>
            `).join("")}
        </div>

        <button onclick="showHome()">
            ← ${getText("home")}
        </button>
    `;

    scrollToLesson();
}


function selectVocabularyTopic(topicId) {
    selectedVocabularyTopic = topicId;
    showVocabularyLevels();
}

function showVocabularyLevels() {
    currentScreen = "vocabularyLevels";

    const lesson = getElement("lesson");
    lesson.dataset.type = "vocabulary";

    const topic = vocabularyTopics.find(
        item => item.id === selectedVocabularyTopic
    );

    lesson.innerHTML = `
        <h2>📚 ${topic.fi}</h2>
        <p>Choose your level</p>

        <button onclick="selectVocabularyLevel('A1.1')">
            A1.1 - Beginner
        </button>

        <button onclick="selectVocabularyLevel('A1.2')">
            A1.2 - Elementary
        </button>

        <button onclick="selectVocabularyLevel('A2')">
            A2 - Pre-intermediate
        </button>

        <button onclick="showVocabularyTopics()">
            ← Back
        </button>
    `;

    scrollToLesson();
}


function selectVocabularyLevel(level) {
    selectedVocabularyLevel = level;

    const levels = ["A1.1", "A1.2", "A2"];
    const startIndex = levels.indexOf(level);

    activeVocabularyWords = vocabularyWords.filter(word =>
        word.topic === selectedVocabularyTopic &&
        levels.indexOf(word.level) >= startIndex
    );

    currentVocabularyIndex = 0;
    showVocabularyCard();
}



function showVocabularyCard() {
    currentScreen = "vocabularyCard";

    const lesson = getElement("lesson");
    lesson.dataset.type = "vocabulary";

    const topic = vocabularyTopics.find(
        item => item.id === selectedVocabularyTopic
    );

    const word = activeVocabularyWords[currentVocabularyIndex];

    if (!word) {
        lesson.innerHTML = `
            <h2>No vocabulary found</h2>
            <button onclick="showVocabularyLevels()">← Back</button>
        `;
        return;
    }
    // FIND IMAGE FOR VOCABULARY
    const imageName = word.fi
        .toLowerCase()
        .replace(/ä/g, "a")
        .replace(/ö/g, "o")
        .replace(/å/g, "a")
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");

    const imageHTML = `
        <img
            class="vocabulary-image"
            src="images/${imageName}.webp"
            alt="${word.fi}"
            onerror="
                if (!this.dataset.triedUppercase) {
                    this.dataset.triedUppercase = 'yes';
                    this.src = 'images/${imageName.toUpperCase()}.webp';
                } else {
                    this.style.display = 'none';
                }
            "
        >
    `;
    lesson.innerHTML = `
        <h2>📚 ${topic.fi}</h2>

        <p>
            ${word.level}
            • ${currentVocabularyIndex + 1} / ${activeVocabularyWords.length}
        </p>

        <div class="vocabulary-card">
    ${imageHTML}
    <h1>${word.fi}</h1>

            <button onclick="speakVocabulary()">
                🔊 Listen
            </button>

            <h3>🇻🇳 ${word.vi}</h3>
            <h3>🇬🇧 ${word.en}</h3>
        </div>

        <button
            onclick="previousVocabularyWord()"
            ${currentVocabularyIndex === 0 ? "disabled" : ""}
        >
            ← Previous
        </button>

        <button
            onclick="nextVocabularyWord()"
            ${currentVocabularyIndex === activeVocabularyWords.length - 1 ? "disabled" : ""}
        >
            Next →
        </button>

        <br>

        <button onclick="showVocabularyLevels()">
            ← Change level
        </button>

        <button onclick="showVocabularyTopics()">
            ← Topics
        </button>
    `;

    scrollToLesson();
}


function previousVocabularyWord() {
    if (currentVocabularyIndex > 0) {
        currentVocabularyIndex--;
        showVocabularyCard();
    }
}

function nextVocabularyWord() {
    if (currentVocabularyIndex < activeVocabularyWords.length - 1) {
        currentVocabularyIndex++;
        showVocabularyCard();
    }
}


function speakVocabulary() {
    const word = activeVocabularyWords[currentVocabularyIndex];

    if (!word || !("speechSynthesis" in window)) return;

    const speak = () => {
        const voices = window.speechSynthesis.getVoices();
        const satuVoice = voices.find(v => v.name === "Satu");

        const speech = new SpeechSynthesisUtterance(word.fi);
        speech.lang = "fi-FI";
        speech.rate = 0.7;
        speech.pitch = 1;

        if (satuVoice) speech.voice = satuVoice;

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
        speak();
    } else {
        window.speechSynthesis.addEventListener(
            "voiceschanged",
            speak,
            { once: true }
        );
    }
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

    if (name === "vocabulary") {
        selectedVocabularyTopic = null;
        selectedVocabularyLevel = null;
        activeVocabularyWords = [];
        currentVocabularyIndex = 0;

        showVocabularyTopics();
        return;
    }

    if (name === "stories") {
        selectedStoryLevel = null;
        activeStories = [];
        currentStoryIndex = 0;

        showStoryLevels();
        return;
    }

    if (name === "verbs") {
        showVerbTypes();
        return;
    }
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
window.showVocabularyTopics = showVocabularyTopics;
window.selectVocabularyTopic = selectVocabularyTopic;
window.showVocabularyLevels = showVocabularyLevels;
window.selectVocabularyLevel = selectVocabularyLevel;
window.showVocabularyCard = showVocabularyCard;
window.previousVocabularyWord = previousVocabularyWord;
window.nextVocabularyWord = nextVocabularyWord;
window.speakVocabulary = speakVocabulary;
console.log("VOCABULARY EXPORT FINISHED");

/* 19. START APP */

document.addEventListener("DOMContentLoaded", () => {
    setLanguage("en");
    showHome();
});
let selectedStoryLevel = null;
let activeStories = [];
let currentStoryIndex = 0;

function showStoryLevels() {
    currentScreen = "storyLevels";

    const lesson = getElement("lesson");
    lesson.dataset.type = "stories";

    lesson.innerHTML = `
        <h2>📖 Stories / Tarinat</h2>
        <p>Choose your level</p>

        <button onclick="selectStoryLevel('A1')">
            A1 - Beginner
        </button>

        <button onclick="selectStoryLevel('A2')">
            A2 - Elementary
        </button>

        <button onclick="showHome()">
            ← Home
        </button>
    `;

    scrollToLesson();
}
function selectStoryLevel(level) {
    selectedStoryLevel = level;

    activeStories = window.stories.filter(story =>
        story.level === level
    );

    currentStoryIndex = 0;
    showStoryList();
}
window.selectStoryLevel = selectStoryLevel;
function showStoryList() {
    currentScreen = "storyList";

    const lesson = getElement("lesson");
    lesson.dataset.type = "stories";

    lesson.innerHTML = `
        <h2>📖 Stories / Tarinat</h2>
        <p>Level: ${selectedStoryLevel}</p>

        <div class="topic-grid">
            ${activeStories.map((story, index) => `
                <button onclick="openStory(${index})">
                    ${story.title}
                    <br>
                    <small>${story.vietnameseTitle}</small>
                </button>
            `).join("")}
        </div>

        <button onclick="showStoryLevels()">
            ← Change level
        </button>

        <button onclick="showHome()">
            ← Home
        </button>
    `;

    scrollToLesson();
}
function openStory(index) {
    currentStoryIndex = index;
    showStory();
}

function showStory() {
    currentScreen = "story";

    const lesson = getElement("lesson");
    lesson.dataset.type = "stories";

    const story = activeStories[currentStoryIndex];

    if (!story) {
        lesson.innerHTML = `
            <h2>No story found</h2>
            <button onclick="showStoryList()">← Back</button>
        `;
        return;
    }

    lesson.innerHTML = `
        <h2>📖 ${story.title}</h2>

        <h3>🇻🇳 ${story.vietnameseTitle}</h3>
        <h3>🇬🇧 ${story.englishTitle}</h3>

        <p>Level: ${story.level}</p>

        <div class="story-card">
            ${story.sentences.map((sentence, index) => `
                <div class="story-sentence">
                    <h3>${index + 1}. 🇫🇮 ${sentence.fi}</h3>
                    <p>🇻🇳 ${sentence.vi}</p>
                    <p>🇬🇧 ${sentence.en}</p>
                    <button onclick="speakStorySentence(${index})">
                        🔊 Listen
                    </button>
                </div>
            `).join("")}
        </div>

        <button onclick="showStoryList()">← Stories</button>
        <button onclick="showStoryLevels()">← Change level</button>
        <button onclick="showHome()">← Home</button>
    `;

    scrollToLesson();
}
function speakStorySentence(index) {
    const story = activeStories[currentStoryIndex];
    const sentence = story?.sentences[index];

    if (!sentence || !("speechSynthesis" in window)) return;

    const speak = () => {
        const voices = window.speechSynthesis.getVoices();
        const satuVoice = voices.find(v => v.name === "Satu");

        const speech = new SpeechSynthesisUtterance(sentence.fi);
        speech.lang = "fi-FI";
        speech.rate = 0.7;
        speech.pitch = 1;

        if (satuVoice) speech.voice = satuVoice;

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
        speak();
    } else {
        window.speechSynthesis.addEventListener(
            "voiceschanged",
            speak,
            { once: true }
        );
    }
}
// ============================================
// VERBIT - SUOMI VALO300986
// VERBITYYPPI 1 - 80 VERBS
// ============================================

const verbWords = [
    ["aivastaa", "hắt hơi", "to sneeze", "aivasta", "aivasta"],
    ["ajaa", "lái xe", "to drive", "aja", "aja"],
    ["alkaa", "bắt đầu", "to begin", "alka", "ala"],
    ["allekirjoittaa", "ký tên", "to sign", "allekirjoitta", "allekirjoita"],
    ["aloittaa", "khởi đầu", "to start", "aloitta", "aloita"],
    ["soutaa", "chèo thuyền", "to row", "souta", "souda"],
    ["antaa", "cho, đưa", "to give", "anta", "anna"],
    ["asentaa", "lắp đặt", "to install", "asenta", "asenna"],
    ["asua", "sống, cư trú", "to live", "asu", "asu"],
    ["auttaa", "giúp đỡ", "to help", "autta", "auta"],
    ["ehtiä", "kịp, có đủ thời gian", "to have time", "ehti", "ehdi"],
    ["eksyä", "bị lạc", "to get lost", "eksy", "eksy"],
    ["elää", "sống", "to live", "elä", "elä"],
    ["esittäytyä", "tự giới thiệu", "to introduce oneself", "esittäyty", "esittäydy"],
    ["etsiä", "tìm kiếm", "to search for", "etsi", "etsi"],
    ["haistaa", "ngửi", "to smell", "haista", "haista"],
    ["hakea", "đi lấy, tìm kiếm", "to fetch, seek", "hake", "hae"],
    ["harrastaa", "có sở thích", "to have as a hobby", "harrasta", "harrasta"],
    ["heittää", "ném", "to throw", "heittä", "heitä"],
    ["hiihtää", "trượt tuyết", "to ski", "hiihtä", "hiihdä"],
    ["hoitaa", "chăm sóc, xử lý", "to take care of, manage", "hoita", "hoida"],
    ["huutaa", "la hét, gọi to", "to shout", "huuta", "huuda"],
    ["istua", "ngồi", "to sit", "istu", "istu"],
    ["istuttaa", "trồng", "to plant", "istutta", "istuta"],
    ["itkeä", "khóc", "to cry", "itke", "itke"],
    ["sanoa", "nói", "to say", "sano", "sano"],
    ["jakaa", "chia, phân phát", "to share, distribute", "jaka", "jaa"],
    ["jaksaa", "có sức, đủ sức", "to have the energy", "jaksa", "jaksa"],
    ["jatkaa", "tiếp tục", "to continue", "jatka", "jatka"],
    ["jatkua", "tiếp diễn", "to continue", "jatku", "jatku"],
    ["jättää", "để lại, bỏ lại", "to leave behind", "jättä", "jätä"],
    ["kaataa", "đổ, làm đổ", "to pour, knock down", "kaata", "kaada"],
    ["kaatua", "ngã, đổ", "to fall over", "kaatu", "kaadu"],
    ["kaivaa", "đào", "to dig", "kaiva", "kaiva"],
    ["kalastaa", "đánh cá, câu cá", "to fish", "kalasta", "kalasta"],
    ["kantaa", "mang, vác", "to carry", "kanta", "kanna"],
    ["kasvaa", "lớn lên, phát triển", "to grow", "kasva", "kasva"],
    ["katsoa", "xem, nhìn", "to watch, look", "katso", "katso"],
    ["keittää", "luộc, đun sôi", "to boil", "keittä", "keitä"],
    ["kertoa", "kể, nói", "to tell", "kerto", "kerro"],
    ["kestää", "kéo dài, chịu đựng", "to last, endure", "kestä", "kestä"],
    ["kiinnostua", "trở nên quan tâm", "to become interested", "kiinnostu", "kiinnostu"],
    ["kiirehtiä", "vội vàng", "to hurry", "kiirehti", "kiirehdi"],
    ["kiittää", "cảm ơn", "to thank", "kiittä", "kiitä"],
    ["kirjoittaa", "viết", "to write", "kirjoitta", "kirjoita"],
    ["kysyä", "hỏi", "to ask", "kysy", "kysy"],
    ["käyttää", "sử dụng", "to use", "käyttä", "käytä"],
    ["laittaa", "đặt, cho vào", "to put", "laitta", "laita"],
    ["laskea", "đếm, tính", "to count", "laske", "laske"],
    ["laulaa", "hát", "to sing", "laula", "laula"],
    ["leikkiä", "chơi", "to play", "leikki", "leiki"],
    ["leipoa", "làm bánh", "to bake", "leipo", "leivo"],
    ["lentää", "bay", "to fly", "lentä", "lennä"],
    ["lopettaa", "kết thúc, ngừng", "to stop, finish", "lopetta", "lopeta"],
    ["lukea", "đọc", "to read", "luke", "lue"],
    ["lähettää", "gửi", "to send", "lähettä", "lähetä"],
    ["lähteä", "rời đi, khởi hành", "to leave, depart", "lähte", "lähde"],
    ["lämmittää", "làm nóng, sưởi ấm", "to heat", "lämmittä", "lämmitä"],
    ["löytyä", "được tìm thấy", "to be found", "löyty", "löydy"],
    ["löytää", "tìm thấy", "to find", "löytä", "löydä"],
    ["maistaa", "nếm", "to taste", "maista", "maista"],
    ["maistua", "có vị", "to taste, taste like", "maistu", "maistu"],
    ["maksaa", "trả tiền, có giá", "to pay, cost", "maksa", "maksa"],
    ["matkustaa", "du lịch, đi lại", "to travel", "matkusta", "matkusta"],
    ["metsästää", "đi săn", "to hunt", "metsästä", "metsästä"],
    ["muistaa", "nhớ", "to remember", "muista", "muista"],
    ["muuttaa", "chuyển nhà, thay đổi", "to move, change", "muutta", "muuta"],
    ["nauraa", "cười", "to laugh", "naura", "naura"],
    ["nauttia", "thưởng thức, tận hưởng", "to enjoy", "nautti", "nauti"],
    ["nostaa", "nâng lên", "to lift, raise", "nosta", "nosta"],
    ["nukkua", "ngủ", "to sleep", "nukku", "nuku"],
    ["näkyä", "hiện ra, có thể nhìn thấy", "to be visible", "näky", "näy"],
    ["näyttää", "cho xem, trông có vẻ", "to show, seem", "näyttä", "näytä"],
    ["odottaa", "chờ đợi", "to wait", "odotta", "odota"],
    ["oksentaa", "nôn", "to vomit", "oksenta", "oksenna"],
    ["opettaa", "dạy", "to teach", "opetta", "opeta"],
    ["oppia", "học được", "to learn", "oppi", "opi"],
    ["ostaa", "mua", "to buy", "osta", "osta"],
    ["ottaa", "lấy, nhận", "to take", "otta", "ota"],
    ["painaa", "ấn, nhấn", "to press", "paina", "paina"]
].map(([fi, vi, en, stemStrong, stemWeak]) => ({
    type: 1,
    fi,
    vi,
    en,
    stemStrong,
    stemWeak
}));

const verbExamples = [
    {
        "fi": "Minä aivastan usein.",
        "vi": "Tôi thường hắt hơi.",
        "en": "I often sneeze."
    },
    {
        "fi": "Minä ajan autoa.",
        "vi": "Tôi lái ô tô.",
        "en": "I drive a car."
    },
    {
        "fi": "Minä alan opiskella suomea.",
        "vi": "Tôi bắt đầu học tiếng Phần Lan.",
        "en": "I start studying Finnish."
    },
    {
        "fi": "Minä allekirjoitan paperin.",
        "vi": "Tôi ký vào giấy tờ.",
        "en": "I sign the document."
    },
    {
        "fi": "Minä aloitan työn kello kahdeksan.",
        "vi": "Tôi bắt đầu công việc lúc tám giờ.",
        "en": "I start work at eight."
    },
    {
        "fi": "Minä soudan järvellä.",
        "vi": "Tôi chèo thuyền trên hồ.",
        "en": "I row on the lake."
    },
    {
        "fi": "Minä annan sinulle kirjan.",
        "vi": "Tôi đưa cho bạn một quyển sách.",
        "en": "I give you a book."
    },
    {
        "fi": "Minä asennan uuden ohjelman.",
        "vi": "Tôi cài đặt chương trình mới.",
        "en": "I install a new program."
    },
    {
        "fi": "Minä asun Porissa.",
        "vi": "Tôi sống ở Pori.",
        "en": "I live in Pori."
    },
    {
        "fi": "Minä autan ystävääni.",
        "vi": "Tôi giúp bạn tôi.",
        "en": "I help my friend."
    },
    {
        "fi": "Minä ehdin bussiin.",
        "vi": "Tôi kịp chuyến xe buýt.",
        "en": "I make it to the bus."
    },
    {
        "fi": "Minä eksyn helposti uudessa kaupungissa.",
        "vi": "Tôi dễ bị lạc ở thành phố mới.",
        "en": "I get lost easily in a new city."
    },
    {
        "fi": "Minä elän Suomessa.",
        "vi": "Tôi sống ở Phần Lan.",
        "en": "I live in Finland."
    },
    {
        "fi": "Minä esittäydyn kurssilla.",
        "vi": "Tôi tự giới thiệu ở khóa học.",
        "en": "I introduce myself in the course."
    },
    {
        "fi": "Minä etsin avaimia.",
        "vi": "Tôi tìm chìa khóa.",
        "en": "I am looking for the keys."
    },
    {
        "fi": "Minä haistan kahvin.",
        "vi": "Tôi ngửi thấy mùi cà phê.",
        "en": "I smell the coffee."
    },
    {
        "fi": "Minä haen lapset koulusta.",
        "vi": "Tôi đón các con từ trường.",
        "en": "I pick up the children from school."
    },
    {
        "fi": "Minä harrastan kalastusta.",
        "vi": "Tôi có sở thích câu cá.",
        "en": "I have fishing as a hobby."
    },
    {
        "fi": "Minä heitän pallon.",
        "vi": "Tôi ném quả bóng.",
        "en": "I throw the ball."
    },
    {
        "fi": "Minä hiihdän talvella.",
        "vi": "Tôi trượt tuyết vào mùa đông.",
        "en": "I ski in winter."
    },
    {
        "fi": "Minä hoidan puutarhaa.",
        "vi": "Tôi chăm sóc khu vườn.",
        "en": "I take care of the garden."
    },
    {
        "fi": "Minä huudan apua.",
        "vi": "Tôi gọi to để xin giúp đỡ.",
        "en": "I shout for help."
    },
    {
        "fi": "Minä istun tuolilla.",
        "vi": "Tôi ngồi trên ghế.",
        "en": "I sit on a chair."
    },
    {
        "fi": "Minä istutan kukkia.",
        "vi": "Tôi trồng hoa.",
        "en": "I plant flowers."
    },
    {
        "fi": "Minä itken joskus elokuvissa.",
        "vi": "Đôi khi tôi khóc khi xem phim.",
        "en": "I sometimes cry at movies."
    },
    {
        "fi": "Minä sanon kiitos.",
        "vi": "Tôi nói cảm ơn.",
        "en": "I say thank you."
    },
    {
        "fi": "Minä jaan ruoan kahteen osaan.",
        "vi": "Tôi chia thức ăn thành hai phần.",
        "en": "I divide the food into two parts."
    },
    {
        "fi": "Minä jaksan kävellä pitkään.",
        "vi": "Tôi đủ sức đi bộ lâu.",
        "en": "I have the energy to walk for a long time."
    },
    {
        "fi": "Minä jatkan opiskelua huomenna.",
        "vi": "Ngày mai tôi tiếp tục học.",
        "en": "I continue studying tomorrow."
    },
    {
        "fi": "Minä jatkan työtä iltapäivällä.",
        "vi": "Tôi tiếp tục công việc vào buổi chiều.",
        "en": "I continue working in the afternoon."
    },
    {
        "fi": "Minä jätän takin kotiin.",
        "vi": "Tôi để áo khoác ở nhà.",
        "en": "I leave my coat at home."
    },
    {
        "fi": "Minä kaadan vettä lasiin.",
        "vi": "Tôi rót nước vào cốc.",
        "en": "I pour water into a glass."
    },
    {
        "fi": "Minä kaadun joskus talvella.",
        "vi": "Đôi khi tôi bị ngã vào mùa đông.",
        "en": "I sometimes fall over in winter."
    },
    {
        "fi": "Minä kaivan maata puutarhassa.",
        "vi": "Tôi đào đất trong vườn.",
        "en": "I dig soil in the garden."
    },
    {
        "fi": "Minä kalastan joella.",
        "vi": "Tôi câu cá ở sông.",
        "en": "I fish by the river."
    },
    {
        "fi": "Minä kannan laukkua.",
        "vi": "Tôi mang chiếc túi.",
        "en": "I carry a bag."
    },
    {
        "fi": "Minä kasvan aikuiseksi.",
        "vi": "Tôi trưởng thành.",
        "en": "I grow into an adult."
    },
    {
        "fi": "Minä katson televisiota.",
        "vi": "Tôi xem ti-vi.",
        "en": "I watch television."
    },
    {
        "fi": "Minä keitän perunoita.",
        "vi": "Tôi luộc khoai tây.",
        "en": "I boil potatoes."
    },
    {
        "fi": "Minä kerron tarinan.",
        "vi": "Tôi kể một câu chuyện.",
        "en": "I tell a story."
    },
    {
        "fi": "Minä kestän kylmää säätä.",
        "vi": "Tôi chịu được thời tiết lạnh.",
        "en": "I can tolerate cold weather."
    },
    {
        "fi": "Minä kiinnostun Suomen historiasta.",
        "vi": "Tôi trở nên quan tâm đến lịch sử Phần Lan.",
        "en": "I become interested in Finnish history."
    },
    {
        "fi": "Minä kiirehdin bussille.",
        "vi": "Tôi vội đi đến trạm xe buýt.",
        "en": "I hurry to the bus."
    },
    {
        "fi": "Minä kiitän opettajaa.",
        "vi": "Tôi cảm ơn giáo viên.",
        "en": "I thank the teacher."
    },
    {
        "fi": "Minä kirjoitan viestin.",
        "vi": "Tôi viết một tin nhắn.",
        "en": "I write a message."
    },
    {
        "fi": "Minä kysyn opettajalta.",
        "vi": "Tôi hỏi giáo viên.",
        "en": "I ask the teacher."
    },
    {
        "fi": "Minä käytän tietokonetta.",
        "vi": "Tôi sử dụng máy tính.",
        "en": "I use a computer."
    },
    {
        "fi": "Minä laitan kirjan pöydälle.",
        "vi": "Tôi đặt quyển sách lên bàn.",
        "en": "I put the book on the table."
    },
    {
        "fi": "Minä lasken rahat.",
        "vi": "Tôi đếm tiền.",
        "en": "I count the money."
    },
    {
        "fi": "Minä laulan suomeksi.",
        "vi": "Tôi hát bằng tiếng Phần Lan.",
        "en": "I sing in Finnish."
    },
    {
        "fi": "Minä leikin lasten kanssa.",
        "vi": "Tôi chơi với trẻ em.",
        "en": "I play with the children."
    },
    {
        "fi": "Minä leivon pullaa.",
        "vi": "Tôi làm bánh mì ngọt.",
        "en": "I bake sweet buns."
    },
    {
        "fi": "Minä lennän Helsinkiin.",
        "vi": "Tôi bay đến Helsinki.",
        "en": "I fly to Helsinki."
    },
    {
        "fi": "Minä lopetan työn kello neljä.",
        "vi": "Tôi kết thúc công việc lúc bốn giờ.",
        "en": "I finish work at four."
    },
    {
        "fi": "Minä luen kirjaa.",
        "vi": "Tôi đọc sách.",
        "en": "I read a book."
    },
    {
        "fi": "Minä lähetän sähköpostin.",
        "vi": "Tôi gửi email.",
        "en": "I send an email."
    },
    {
        "fi": "Minä lähden kotiin.",
        "vi": "Tôi đi về nhà.",
        "en": "I leave for home."
    },
    {
        "fi": "Avain löytyy laukusta.",
        "vi": "Chìa khóa được tìm thấy trong túi.",
        "en": "The key is found in the bag."
    },
    {
        "fi": "Minä löydyn valokuvasta.",
        "vi": "Tôi xuất hiện trong bức ảnh.",
        "en": "I can be found in the photograph."
    },
    {
        "fi": "Minä löydän avaimen.",
        "vi": "Tôi tìm thấy chìa khóa.",
        "en": "I find the key."
    },
    {
        "fi": "Minä maistan keittoa.",
        "vi": "Tôi nếm món súp.",
        "en": "I taste the soup."
    },
    {
        "fi": "Keitto maistuu hyvältä.",
        "vi": "Món súp có vị ngon.",
        "en": "The soup tastes good."
    },
    {
        "fi": "Minä maksan laskun.",
        "vi": "Tôi thanh toán hóa đơn.",
        "en": "I pay the bill."
    },
    {
        "fi": "Minä matkustan junalla.",
        "vi": "Tôi đi du lịch bằng tàu hỏa.",
        "en": "I travel by train."
    },
    {
        "fi": "Minä metsästän syksyllä.",
        "vi": "Tôi đi săn vào mùa thu.",
        "en": "I hunt in autumn."
    },
    {
        "fi": "Minä muistan tämän päivän.",
        "vi": "Tôi nhớ ngày hôm nay.",
        "en": "I remember this day."
    },
    {
        "fi": "Minä muutan uuteen asuntoon.",
        "vi": "Tôi chuyển đến căn hộ mới.",
        "en": "I move to a new apartment."
    },
    {
        "fi": "Minä nauran paljon.",
        "vi": "Tôi cười nhiều.",
        "en": "I laugh a lot."
    },
    {
        "fi": "Minä nautin musiikista.",
        "vi": "Tôi thưởng thức âm nhạc.",
        "en": "I enjoy music."
    },
    {
        "fi": "Minä nostan laatikon.",
        "vi": "Tôi nâng chiếc hộp lên.",
        "en": "I lift the box."
    },
    {
        "fi": "Minä nukun hyvin.",
        "vi": "Tôi ngủ ngon.",
        "en": "I sleep well."
    },
    {
        "fi": "Minä näyn kuvassa.",
        "vi": "Tôi xuất hiện trong ảnh.",
        "en": "I am visible in the picture."
    },
    {
        "fi": "Minä näytän sinulle kuvan.",
        "vi": "Tôi cho bạn xem một bức ảnh.",
        "en": "I show you a picture."
    },
    {
        "fi": "Minä odotan bussia.",
        "vi": "Tôi chờ xe buýt.",
        "en": "I wait for the bus."
    },
    {
        "fi": "Minä oksennan, koska olen sairas.",
        "vi": "Tôi bị nôn vì tôi bị ốm.",
        "en": "I vomit because I am ill."
    },
    {
        "fi": "Minä opetan suomea.",
        "vi": "Tôi dạy tiếng Phần Lan.",
        "en": "I teach Finnish."
    },
    {
        "fi": "Minä opin uusia sanoja.",
        "vi": "Tôi học được những từ mới.",
        "en": "I learn new words."
    },
    {
        "fi": "Minä ostan maitoa.",
        "vi": "Tôi mua sữa.",
        "en": "I buy milk."
    },
    {
        "fi": "Minä otan kupin kahvia.",
        "vi": "Tôi lấy một tách cà phê.",
        "en": "I take a cup of coffee."
    },
    {
        "fi": "Minä painan nappia.",
        "vi": "Tôi nhấn nút.",
        "en": "I press the button."
    }
];


// ============================================
// VERBITYYPPI 2 - 50 VERBS
// ============================================
const verbType2Data = [
    ["syödä", "ăn", "to eat", "syö", "Minä syön", "Minä syön aamupalaa.", "Tôi ăn sáng.", "I eat breakfast."],
    ["juoda", "uống", "to drink", "juo", "Minä juon", "Minä juon vettä.", "Tôi uống nước.", "I drink water."],
    ["saada", "nhận, được", "to get, receive", "saa", "Minä saan", "Minä saan viestin.", "Tôi nhận được tin nhắn.", "I get a message."],
    ["käydä", "đi, ghé; thăm", "to go, visit", "käy", "Minä käyn", "Minä käyn kaupassa.", "Tôi đi cửa hàng.", "I go to the shop."],
    ["voida", "có thể", "can, be able to", "voi", "Minä voin", "Minä voin auttaa sinua.", "Tôi có thể giúp bạn.", "I can help you."],
    ["tehdä", "làm", "to do, make", "tee", "Minä teen", "Minä teen ruokaa.", "Tôi nấu ăn.", "I make food."],
    ["nähdä", "nhìn thấy", "to see", "näe", "Minä näen", "Minä näen ystäväni.", "Tôi nhìn thấy bạn mình.", "I see my friend."],
    ["tuoda", "mang đến", "to bring", "tuo", "Minä tuon", "Minä tuon kirjan kotiin.", "Tôi mang quyển sách về nhà.", "I bring the book home."],
    ["viedä", "mang đi, đưa", "to take, bring", "vie", "Minä vien", "Minä vien lapset kouluun.", "Tôi đưa các con đến trường.", "I take the children to school."],
    ["myydä", "bán", "to sell", "myy", "Minä myyn", "Minä myyn vanhan auton.", "Tôi bán chiếc xe cũ.", "I sell the old car."],
    ["lyödä", "đánh, đập", "to hit", "lyö", "Minä lyön", "Minä lyön palloa.", "Tôi đánh bóng.", "I hit the ball."],
    ["jäädä", "ở lại, bị lại", "to stay, remain", "jää", "Minä jään", "Minä jään kotiin tänään.", "Hôm nay tôi ở nhà.", "I stay at home today."],
    ["uida", "bơi", "to swim", "ui", "Minä uin", "Minä uin kesällä järvessä.", "Mùa hè tôi bơi ở hồ.", "I swim in the lake in summer."],
    ["soida", "reo, vang lên", "to ring, sound", "soi", "Minä soin", "Puhelin soi aamulla.", "Điện thoại reo vào buổi sáng.", "The phone rings in the morning."],
    ["luoda", "tạo ra", "to create", "luo", "Minä luon", "Minä luon uuden tiedoston.", "Tôi tạo một tệp mới.", "I create a new file."],
    ["arvioida", "đánh giá, ước lượng", "to evaluate, estimate", "arvioi", "Minä arvioin", "Minä arvioin työn hinnan.", "Tôi ước tính giá công việc.", "I estimate the cost of the work."],
    ["analysoida", "phân tích", "to analyze", "analysoi", "Minä analysoin", "Minä analysoin tuloksia.", "Tôi phân tích kết quả.", "I analyze the results."],
    ["ideoida", "lên ý tưởng", "to come up with ideas", "ideoi", "Minä ideoin", "Me ideoimme yhdessä.", "Chúng tôi cùng nhau lên ý tưởng.", "We come up with ideas together."],
    ["kopioida", "sao chép", "to copy", "kopioi", "Minä kopioin", "Minä kopioin tekstin.", "Tôi sao chép văn bản.", "I copy the text."],
    ["videoida", "quay video", "to record video", "videoi", "Minä videoin", "Minä videoin tapahtuman.", "Tôi quay video sự kiện.", "I record the event."],
    ["reagoida", "phản ứng", "to react", "reagoi", "Minä reagoin", "Minä reagoin nopeasti.", "Tôi phản ứng nhanh.", "I react quickly."],
    ["huomioida", "chú ý, lưu ý", "to take into account", "huomioi", "Minä huomioin", "Minä huomioin kaikki ohjeet.", "Tôi lưu ý tất cả hướng dẫn.", "I take all the instructions into account."],
    ["markkinoida", "tiếp thị", "to market", "markkinoi", "Minä markkinoin", "Yritys markkinoi uutta tuotetta.", "Công ty tiếp thị sản phẩm mới.", "The company markets a new product."],
    ["kommunikoida", "giao tiếp", "to communicate", "kommunikoi", "Minä kommunikoin", "Minä kommunikoin suomeksi.", "Tôi giao tiếp bằng tiếng Phần Lan.", "I communicate in Finnish."],
    ["operoida", "phẫu thuật; vận hành", "to operate", "operoi", "Minä operoin", "Lääkäri operoi potilasta.", "Bác sĩ phẫu thuật cho bệnh nhân.", "The doctor operates on the patient."],
    ["rekisteröidä", "đăng ký", "to register", "rekisteröi", "Minä rekisteröin", "Minä rekisteröin auton.", "Tôi đăng ký chiếc xe.", "I register the car."],
    ["priorisoida", "ưu tiên", "to prioritize", "priorisoi", "Minä priorisoin", "Minä priorisoin tärkeät tehtävät.", "Tôi ưu tiên những nhiệm vụ quan trọng.", "I prioritize important tasks."],
    ["organisoida", "tổ chức, sắp xếp", "to organize", "organisoi", "Minä organisoin", "Minä organisoin kokouksen.", "Tôi tổ chức cuộc họp.", "I organize the meeting."],
    ["digitalisoida", "số hóa", "to digitize", "digitalisoi", "Minä digitalisoin", "Kirjasto digitalisoi vanhoja kuvia.", "Thư viện số hóa những bức ảnh cũ.", "The library digitizes old photos."],
    ["realisoida", "hiện thực hóa", "to realize", "realisoi", "Minä realisoin", "Tiimi realisoi uuden suunnitelman.", "Nhóm hiện thực hóa kế hoạch mới.", "The team realizes the new plan."],
    ["idealisoida", "lý tưởng hóa", "to idealize", "idealisoi", "Minä idealisoin", "Älä idealisoi menneisyyttä.", "Đừng lý tưởng hóa quá khứ.", "Do not idealize the past."],
    ["imitoida", "bắt chước", "to imitate", "imitoi", "Minä imitoin", "Lapsi imitoi opettajaa.", "Đứa trẻ bắt chước giáo viên.", "The child imitates the teacher."],
    ["aktivoida", "kích hoạt", "to activate", "aktivoi", "Minä aktivoin", "Minä aktivoin uuden kortin.", "Tôi kích hoạt thẻ mới.", "I activate the new card."],
    ["passivoida", "làm thụ động", "to make passive", "passivoi", "Minä passivoin", "Järjestelmä passivoi vanhan tunnuksen.", "Hệ thống vô hiệu hóa tài khoản cũ.", "The system deactivates the old account."],
    ["optimoida", "tối ưu hóa", "to optimize", "optimoi", "Minä optimoin", "Minä optimoin työpäiväni.", "Tôi tối ưu hóa ngày làm việc của mình.", "I optimize my workday."],
    ["validoida", "xác nhận tính hợp lệ", "to validate", "validoi", "Minä validoin", "Ohjelma validoi tiedot.", "Chương trình xác nhận dữ liệu.", "The program validates the data."],
    ["demonstroida", "minh họa, trình diễn", "to demonstrate", "demonstroi", "Minä demonstroin", "Opettaja demonstroi tehtävän.", "Giáo viên minh họa bài tập.", "The teacher demonstrates the exercise."],
    ["varioida", "biến đổi, thay đổi", "to vary", "varioi", "Minä varioin", "Minä varioin harjoituksia.", "Tôi thay đổi các bài tập.", "I vary the exercises."],
    ["evakuoida", "sơ tán", "to evacuate", "evakuoi", "Minä evakuoin", "Viranomaiset evakuoivat rakennuksen.", "Nhà chức trách sơ tán tòa nhà.", "The authorities evacuate the building."],
    ["tatuoida", "xăm", "to tattoo", "tatuoi", "Minä tatuoin", "Hän tatuoi kuvan ihoon.", "Người ấy xăm hình lên da.", "They tattoo an image on the skin."],
    ["ennakoida", "dự đoán, lường trước", "to anticipate", "ennakoi", "Minä ennakoin", "Minä ennakoin ongelmat.", "Tôi lường trước các vấn đề.", "I anticipate the problems."],
    ["aliarvioida", "đánh giá thấp", "to underestimate", "aliarvioi", "Minä aliarvioin", "Älä aliarvioi tehtävää.", "Đừng đánh giá thấp nhiệm vụ.", "Do not underestimate the task."],
    ["yliarvioida", "đánh giá quá cao", "to overestimate", "yliarvioi", "Minä yliarvioin", "Minä yliarvioin ajan tarpeen.", "Tôi đánh giá quá cao thời gian cần thiết.", "I overestimate the time needed."],
    ["kommentoida", "bình luận", "to comment", "kommentoi", "Minä kommentoin", "Minä kommentoin uutista.", "Tôi bình luận về tin tức.", "I comment on the news."],
    ["raportoida", "báo cáo", "to report", "raportoi", "Minä raportoin", "Minä raportoin tulokset.", "Tôi báo cáo kết quả.", "I report the results."],
    ["informoida", "thông báo, cung cấp thông tin", "to inform", "informoi", "Minä informoin", "Minä informoin esihenkilöä.", "Tôi thông báo cho người quản lý.", "I inform the supervisor."],
    ["tilastoida", "thống kê", "to compile statistics", "tilastoi", "Minä tilastoin", "Kaupunki tilastoi asukkaat.", "Thành phố thống kê cư dân.", "The city compiles statistics about residents."],
    ["varastoida", "lưu kho", "to store", "varastoi", "Minä varastoin", "Me varastoimme tavarat.", "Chúng tôi lưu kho hàng hóa.", "We store the goods."],
    ["paketoida", "đóng gói", "to package", "paketoi", "Minä paketoin", "Minä paketoin lahjan.", "Tôi gói món quà.", "I wrap the gift."],
    ["diagnosoida", "chẩn đoán", "to diagnose", "diagnosoi", "Minä diagnosoin", "Lääkäri diagnosoi sairauden.", "Bác sĩ chẩn đoán bệnh.", "The doctor diagnoses the illness."]
].map(([fi, vi, en, stem, mina, exampleFi, exampleVi, exampleEn]) => ({
    type: 2, fi, vi, en, stemStrong: stem, stemWeak: stem, mina,
    example: { fi: exampleFi, vi: exampleVi, en: exampleEn }
}));

let currentVerbIndex = 0;
let currentVerbType = 1;

// Mở một nhóm động từ
function openVerbType(type) {
    currentVerbType = type;
    currentVerbIndex = 0;

    if (type === 1 || type === 2) {
        showVerbList();
        return;
    }

    const lesson = getElement("lesson");
    currentScreen = "verbComingSoon";
    lesson.dataset.type = "verbs";

    lesson.innerHTML = `
        <div style="padding:24px;text-align:center;">
            <h2>Verbityyppi ${type}</h2>
            <p>Coming soon</p>
            <button onclick="showVerbTypes()">← Back</button>
        </div>
    `;

    scrollToLesson();
}

function getActiveVerbWords() {
    return currentVerbType === 2 ? verbType2Data : verbWords;
}

// Hiển thị danh sách động từ
function showVerbList() {
    currentScreen = "verbList";

    const lesson = getElement("lesson");
    lesson.dataset.type = "verbs";
    const activeWords = getActiveVerbWords();

    lesson.innerHTML = `
        <div style="padding:16px;">
            <button onclick="showVerbTypes()">← Takaisin</button>

            <h2>Verbityyppi ${currentVerbType}</h2>
            <p>${activeWords.length} động từ - ${activeWords.length} verbs</p>

            <div style="
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(145px,1fr));
                gap:10px;
                margin-top:16px;
            ">
                ${activeWords.map((word, index) => `
                    <button
                        onclick="openVerbCard(${index})"
                        style="
                            padding:13px 10px;
                            border-radius:12px;
                            border:1px solid #ddd;
                            background:white;
                            color:#222;
                            cursor:pointer;
                            text-align:left;
                        "
                    >
                        <strong>${index + 1}. ${word.fi}</strong>
                        <br>
                        <small>🇻🇳 ${word.vi}</small>
                        <br>
                        <small>🇬🇧 ${word.en}</small>
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    scrollToLesson();
}

// Hiển thị chi tiết một động từ
function openVerbCard(index) {
    const activeWords = getActiveVerbWords();
    if (index < 0 || index >= activeWords.length) return;

    currentVerbIndex = index;
    showVerbCard();
}

function showVerbCard() {
    currentScreen = "verbCard";

    const lesson = getElement("lesson");
    lesson.dataset.type = "verbs";

    const activeWords = getActiveVerbWords();
    const word = activeWords[currentVerbIndex];
    const example = currentVerbType === 2
        ? word.example
        : (verbExamples[currentVerbIndex] || { fi: "", vi: "", en: "" });

    const stemSection = currentVerbType === 2
        ? `<p><strong>Vartalo:</strong> ${word.stemStrong}</p>`
        : `<p><strong>Vahva vartalo:</strong> ${word.stemStrong}</p>
           <p><strong>Heikko vartalo:</strong> ${word.stemWeak}</p>`;

    const minaForm = currentVerbType === 2 ? word.mina : `${word.stemWeak}n`;

    lesson.innerHTML = `
        <div style="
            max-width:600px;
            margin:auto;
            padding:20px;
            text-align:center;
        ">
            <button onclick="showVerbList()" style="float:left;">
                ← Danh sách
            </button>

            <div style="clear:both;padding-top:24px;">
                <p>Verbityyppi ${currentVerbType}</p>

                <h1 style="font-size:36px;margin:12px 0;">
                    ${word.fi}
                </h1>

                <h2 style="font-size:24px;color:#16845b;">
                    ${word.vi}
                </h2>

                <p style="font-size:18px;color:#666;">
                    ${word.en}
                </p>

                <button
                    onclick="speakVerbFinnish('${word.fi}')"
                    style="padding:12px 20px;margin:16px;border-radius:12px;"
                >
                    🔊 Kuuntele
                </button>

                <div style="
                    text-align:left;
                    background:#f3f5f7;
                    padding:18px;
                    border-radius:14px;
                    margin-top:20px;
                ">
                    <h3>Vartalot - Thân động từ</h3>
                    ${stemSection}
                    <hr>
                    <p><strong>Minä:</strong> ${minaForm}</p>
                    <h3>Esimerkki – Ví dụ</h3>
                    <p><strong>🇫🇮 ${example.fi}</strong></p>
                    <p>🇻🇳 ${example.vi}</p>
                    <p>🇬🇧 ${example.en}</p>
                </div>

                <div style="
                    display:flex;
                    justify-content:space-between;
                    gap:12px;
                    margin-top:24px;
                ">
                    <button
                        onclick="previousVerb()"
                        ${currentVerbIndex === 0 ? "disabled" : ""}
                    >
                        ← Edellinen
                    </button>

                    <span>${currentVerbIndex + 1} / ${activeWords.length}</span>

                    <button
                        onclick="nextVerb()"
                        ${currentVerbIndex === activeWords.length - 1 ? "disabled" : ""}
                    >
                        Seuraava →
                    </button>
                </div>
            </div>
        </div>
    `;

    scrollToLesson();
}

// Động từ trước
function previousVerb() {
    if (currentVerbIndex > 0) {
        currentVerbIndex--;
        showVerbCard();
    }
}

// Động từ tiếp theo
function nextVerb() {
    if (currentVerbIndex < getActiveVerbWords().length - 1) {
        currentVerbIndex++;
        showVerbCard();
    }
}

// Phát âm tiếng Phần Lan - ưu tiên giọng Satu
function speakVerbFinnish(text) {
    if (!("speechSynthesis" in window)) {
        alert("Trình duyệt không hỗ trợ đọc văn bản.");
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const finnishVoices = voices.filter(voice =>
        voice.lang.toLowerCase().startsWith("fi")
    );

    const satuVoice = finnishVoices.find(voice =>
        voice.name.toLowerCase().includes("satu")
    );

    utterance.lang = "fi-FI";
    utterance.rate = 0.85;

    if (satuVoice) {
        utterance.voice = satuVoice;
    } else if (finnishVoices.length > 0) {
        utterance.voice = finnishVoices[0];
    }

    window.speechSynthesis.speak(utterance);
}

// Kiểm tra dữ liệu
console.log("Verbit loaded:", verbWords.length);
   
