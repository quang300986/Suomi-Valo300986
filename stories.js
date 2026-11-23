
const stories = [
  {
    id: 1,
    level: "A1",
    title: "Aamulla kotona",
    vietnameseTitle: "Buổi sáng ở nhà",
    englishTitle: "At home in the morning",
    sentences: [
      {
        fi: "Minä herään aamulla kello seitsemän.",
        vi: "Tôi thức dậy lúc bảy giờ sáng.",
        en: "I wake up at seven in the morning."
      },
      {
        fi: "Minä nousen sängystä.",
        vi: "Tôi ra khỏi giường.",
        en: "I get out of bed."
      },
      {
        fi: "Minä menen kylpyhuoneeseen.",
        vi: "Tôi đi vào phòng tắm.",
        en: "I go to the bathroom."
      },
      {
        fi: "Minä pesen kasvot ja hampaat.",
        vi: "Tôi rửa mặt và đánh răng.",
        en: "I wash my face and brush my teeth."
      },
      {
        fi: "Sitten minä menen keittiöön.",
        vi: "Sau đó tôi đi vào nhà bếp.",
        en: "Then I go to the kitchen."
      },
      {
        fi: "Minä teen kahvia ja aamupalaa.",
        vi: "Tôi pha cà phê và chuẩn bị bữa sáng.",
        en: "I make coffee and breakfast."
      },
      {
        fi: "Minä syön leipää ja kananmunan.",
        vi: "Tôi ăn bánh mì và một quả trứng.",
        en: "I eat bread and an egg."
      },
      {
        fi: "Minä juon kupin kahvia.",
        vi: "Tôi uống một tách cà phê.",
        en: "I drink a cup of coffee."
      },
      {
        fi: "Aamupalan jälkeen minä pukeudun.",
        vi: "Sau bữa sáng tôi mặc quần áo.",
        en: "After breakfast I get dressed."
      },
      {
        fi: "Sitten minä lähden ulos.",
        vi: "Sau đó tôi đi ra ngoài.",
        en: "Then I go outside."
      }
    ]
  },

  {
    id: 2,
    level: "A1",
    title: "Kaupassa",
    vietnameseTitle: "Ở cửa hàng",
    englishTitle: "At the shop",
    sentences: [
      {
        fi: "Tänään minä menen kauppaan.",
        vi: "Hôm nay tôi đi đến cửa hàng.",
        en: "Today I go to the shop."
      },
      {
        fi: "Minä tarvitsen maitoa ja leipää.",
        vi: "Tôi cần sữa và bánh mì.",
        en: "I need milk and bread."
      },
      {
        fi: "Minä otan ostoskorin.",
        vi: "Tôi lấy một cái giỏ mua hàng.",
        en: "I take a shopping basket."
      },
      {
        fi: "Maito on kylmässä kaapissa.",
        vi: "Sữa ở trong tủ lạnh.",
        en: "The milk is in the fridge."
      },
      {
        fi: "Leipä on hyllyssä.",
        vi: "Bánh mì ở trên kệ.",
        en: "The bread is on the shelf."
      },
      {
        fi: "Minä ostan myös omenoita.",
        vi: "Tôi cũng mua táo.",
        en: "I also buy apples."
      },
      {
        fi: "Sitten menen kassalle.",
        vi: "Sau đó tôi đi đến quầy thanh toán.",
        en: "Then I go to the checkout."
      },
      {
        fi: "Minä maksan ostokset.",
        vi: "Tôi thanh toán các món hàng.",
        en: "I pay for the shopping."
      },
      {
        fi: "Minä laitan ostokset kassiin.",
        vi: "Tôi bỏ đồ mua vào túi.",
        en: "I put the shopping into the bag."
      },
      {
        fi: "Sitten menen kotiin.",
        vi: "Sau đó tôi về nhà.",
        en: "Then I go home."
      }
    ]
  },

  {
    id: 3,
    level: "A1",
    title: "Kävelyllä metsässä",
    vietnameseTitle: "Đi dạo trong rừng",
    englishTitle: "Walking in the forest",
    sentences: [
      {
        fi: "On kaunis päivä.",
        vi: "Hôm nay là một ngày đẹp trời.",
        en: "It is a beautiful day."
      },
      {
        fi: "Minä menen metsään.",
        vi: "Tôi đi vào rừng.",
        en: "I go to the forest."
      },
      {
        fi: "Metsässä on paljon puita.",
        vi: "Trong rừng có nhiều cây.",
        en: "There are many trees in the forest."
      },
      {
        fi: "Ilma on raikasta.",
        vi: "Không khí trong lành.",
        en: "The air is fresh."
      },
      {
        fi: "Minä kävelen hitaasti polulla.",
        vi: "Tôi đi bộ chậm trên con đường mòn.",
        en: "I walk slowly on the path."
      },
      {
        fi: "Näen pieniä lintuja.",
        vi: "Tôi nhìn thấy những chú chim nhỏ.",
        en: "I see small birds."
      },
      {
        fi: "Maassa on paljon lehtiä.",
        vi: "Trên mặt đất có nhiều lá.",
        en: "There are many leaves on the ground."
      },
      {
        fi: "Minä etsin sieniä.",
        vi: "Tôi tìm nấm.",
        en: "I look for mushrooms."
      },
      {
        fi: "Sitten minä istun penkillä.",
        vi: "Sau đó tôi ngồi trên ghế băng.",
        en: "Then I sit on a bench."
      },
      { fi: "Metsässä on mukava olla.", 
        vi: "Ở trong rừng thật dễ chịu.", 
        en: "It is nice to be in the forest." }
    ]
  },

  {
    id: 4,
    level: "A1",
    title: "Kotona illalla",
    vietnameseTitle: "Ở nhà buổi tối",
    englishTitle: "At home in the evening",
    sentences: [
      { fi: "Minä tulen kotiin illalla.", vi: "Tôi về nhà vào buổi tối.", en: "I come home in the evening." },
      { fi: "Otan kengät pois.", vi: "Tôi cởi giày ra.", en: "I take off my shoes." },
      { fi: "Minä vaihdan vaatteet.", vi: "Tôi thay quần áo.", en: "I change my clothes." },
      { fi: "Sitten teen ruokaa.", vi: "Sau đó tôi nấu ăn.", en: "Then I cook." },
      { fi: "Syön päivällistä perheeni kanssa.", vi: "Tôi ăn tối cùng gia đình.", en: "I have dinner with my family." },
      { fi: "Sen jälkeen katson televisiota.", vi: "Sau đó tôi xem ti vi.", en: "After that, I watch television." },
      { fi: "Minä luen vähän kirjaa.", vi: "Tôi đọc sách một chút.", en: "I read a book for a while." },
      { fi: "Menen nukkumaan kello kymmenen.", vi: "Tôi đi ngủ lúc mười giờ.", en: "I go to bed at ten." }
    ]
  },
  {
    id: 5,
    level: "A1",
    title: "Bussilla kaupunkiin",
    vietnameseTitle: "Đi xe buýt vào thành phố",
    englishTitle: "By bus to the city",
    sentences: [
      { fi: "Minä menen bussipysäkille.", vi: "Tôi đi đến trạm xe buýt.", en: "I go to the bus stop." },
      { fi: "Bussi tulee pian.", vi: "Xe buýt sắp đến.", en: "The bus will arrive soon." },
      { fi: "Minä nousen bussiin.", vi: "Tôi lên xe buýt.", en: "I get on the bus." },
      { fi: "Etsin vapaan istumapaikan.", vi: "Tôi tìm một chỗ ngồi trống.", en: "I look for an empty seat." },
      { fi: "Istun ikkunan vieressä.", vi: "Tôi ngồi cạnh cửa sổ.", en: "I sit next to the window." },
      { fi: "Matka kestää kaksikymmentä minuuttia.", vi: "Chuyến đi mất hai mươi phút.", en: "The journey takes twenty minutes." },
      { fi: "Jään pois keskustassa.", vi: "Tôi xuống xe ở trung tâm.", en: "I get off in the city centre." },
      { fi: "Sitten kävelen kirjastoon.", vi: "Sau đó tôi đi bộ đến thư viện.", en: "Then I walk to the library." }
    ]
  },
  {
    id: 6,
    level: "A1",
    title: "Perheeni",
    vietnameseTitle: "Gia đình tôi",
    englishTitle: "My family",
    sentences: [
      { fi: "Minulla on pieni perhe.", vi: "Tôi có một gia đình nhỏ.", en: "I have a small family." },
      { fi: "Perheeseeni kuuluu neljä henkilöä.", vi: "Gia đình tôi có bốn người.", en: "There are four people in my family." },
      { fi: "Minulla on vaimo ja kaksi lasta.", vi: "Tôi có vợ và hai người con.", en: "I have a wife and two children." },
      { fi: "Vaimoni opiskelee.", vi: "Vợ tôi đang học.", en: "My wife studies." },
      { fi: "Lapset käyvät koulua.", vi: "Các con đi học.", en: "The children go to school." },
      { fi: "Me syömme yhdessä.", vi: "Chúng tôi ăn cùng nhau.", en: "We eat together." },
      { fi: "Viikonloppuna olemme kotona.", vi: "Cuối tuần chúng tôi ở nhà.", en: "At the weekend, we are at home." },
      { fi: "Perhe on minulle tärkeä.", vi: "Gia đình rất quan trọng đối với tôi.", en: "Family is important to me." }
    ]
  },
  {
    id: 7,
    level: "A1",
    title: "Sää tänään",
    vietnameseTitle: "Thời tiết hôm nay",
    englishTitle: "The weather today",
    sentences: [
      { fi: "Tänään on kylmä päivä.", vi: "Hôm nay là một ngày lạnh.", en: "Today is a cold day." },
      { fi: "Ulkona sataa lunta.", vi: "Ngoài trời đang có tuyết rơi.", en: "It is snowing outside." },
      { fi: "Taivas on harmaa.", vi: "Bầu trời màu xám.", en: "The sky is grey." },
      { fi: "Tuuli puhaltaa kovaa.", vi: "Gió thổi mạnh.", en: "The wind is blowing hard." },
      { fi: "Minä laitan lämpimän takin päälle.", vi: "Tôi mặc áo khoác ấm.", en: "I put on a warm coat." },
      { fi: "Laitan myös pipon päähän.", vi: "Tôi cũng đội mũ len.", en: "I also put on a woolly hat." },
      { fi: "Menemme ulos kävelylle.", vi: "Chúng tôi ra ngoài đi dạo.", en: "We go outside for a walk." },
      { fi: "Talvella on usein kylmä.", vi: "Vào mùa đông thường lạnh.", en: "It is often cold in winter." }
    ]
  },
  {
    id: 8,
    level: "A1",
    title: "Keittiössä",
    vietnameseTitle: "Trong nhà bếp",
    englishTitle: "In the kitchen",
    sentences: [
      { fi: "Minä olen keittiössä.", vi: "Tôi đang ở trong bếp.", en: "I am in the kitchen." },
      { fi: "Pöydällä on vihanneksia.", vi: "Trên bàn có rau củ.", en: "There are vegetables on the table." },
      { fi: "Minä pesen perunat.", vi: "Tôi rửa khoai tây.", en: "I wash the potatoes." },
      { fi: "Kuorin porkkanat.", vi: "Tôi gọt cà rốt.", en: "I peel the carrots." },
      { fi: "Leikkaan sipulin pieniksi paloiksi.", vi: "Tôi cắt hành tây thành những miếng nhỏ.", en: "I cut the onion into small pieces." },
      { fi: "Laitan veden kattilaan.", vi: "Tôi cho nước vào nồi.", en: "I put water in the pot." },
      { fi: "Keitän perunoita.", vi: "Tôi luộc khoai tây.", en: "I boil potatoes." },
      { fi: "Ruoka on pian valmista.", vi: "Thức ăn sắp sẵn sàng.", en: "The food will soon be ready." }
    ]
  },
  {
    id: 9,
    level: "A1",
    title: "Kirjastossa",
    vietnameseTitle: "Ở thư viện",
    englishTitle: "At the library",
    sentences: [
      { fi: "Tänään menen kirjastoon.", vi: "Hôm nay tôi đi đến thư viện.", en: "Today I go to the library." },
      { fi: "Kirjasto on lähellä kotiani.", vi: "Thư viện ở gần nhà tôi.", en: "The library is near my home." },
      { fi: "Sisällä on hiljaista.", vi: "Bên trong rất yên tĩnh.", en: "It is quiet inside." },
      { fi: "Etsin suomen kielen kirjaa.", vi: "Tôi tìm một cuốn sách tiếng Phần Lan.", en: "I look for a Finnish language book." },
      { fi: "Kirja on toisessa hyllyssä.", vi: "Cuốn sách ở kệ thứ hai.", en: "The book is on the second shelf." },
      { fi: "Otan kirjan hyllystä.", vi: "Tôi lấy sách từ trên kệ.", en: "I take the book from the shelf." },
      { fi: "Lainaan kirjan kahdeksi viikoksi.", vi: "Tôi mượn sách trong hai tuần.", en: "I borrow the book for two weeks." },
      { fi: "Kotona luen kirjaa.", vi: "Ở nhà tôi đọc sách.", en: "At home I read the book." }
    ]
  },
  {
    id: 10,
    level: "A1",
    title: "Viikonloppu",
    vietnameseTitle: "Cuối tuần",
    englishTitle: "The weekend",
    sentences: [
      { fi: "Lauantaina ei ole koulua.", vi: "Thứ Bảy không có giờ học.", en: "There is no school on Saturday." },
      { fi: "Herään vähän myöhemmin.", vi: "Tôi thức dậy muộn hơn một chút.", en: "I wake up a little later." },
      { fi: "Syön rauhallisen aamupalan.", vi: "Tôi ăn sáng thong thả.", en: "I have a relaxed breakfast." },
      { fi: "Sitten siivoan kotia.", vi: "Sau đó tôi dọn dẹp nhà cửa.", en: "Then I clean the house." },
      { fi: "Iltapäivällä käyn kaupassa.", vi: "Buổi chiều tôi đi cửa hàng.", en: "In the afternoon, I go shopping." },
      { fi: "Tapaan ystäväni kaupungilla.", vi: "Tôi gặp bạn ở thành phố.", en: "I meet my friend in town." },
      { fi: "Me juomme kahvia yhdessä.", vi: "Chúng tôi uống cà phê cùng nhau.", en: "We drink coffee together." },
      { fi: "Sunnuntaina lepään kotona.", vi: "Chủ nhật tôi nghỉ ngơi ở nhà.", en: "On Sunday, I relax at home." }
    ]
  },
  {
    id: 11,
    level: "A2",
    title: "Ensimmäinen päivä kurssilla",
    vietnameseTitle: "Ngày đầu tiên ở khóa học",
    englishTitle: "The first day of the course",
    sentences: [
      { fi: "Aloitin suomen kielen kurssin maanantaina.", vi: "Tôi bắt đầu khóa học tiếng Phần Lan vào thứ Hai.", en: "I started a Finnish course on Monday." },
      { fi: "Menin kouluun vähän aikaisemmin.", vi: "Tôi đến trường sớm hơn một chút.", en: "I went to school a little earlier." },
      { fi: "Luokassa oli jo muutamia opiskelijoita.", vi: "Trong lớp đã có một vài học viên.", en: "There were already a few students in the classroom." },
      { fi: "Opettaja esitteli itsensä ja kurssin.", vi: "Giáo viên giới thiệu bản thân và khóa học.", en: "The teacher introduced herself and the course." },
      { fi: "Sen jälkeen jokainen opiskelija kertoi nimensä.", vi: "Sau đó mỗi học viên nói tên của mình.", en: "After that, every student told their name." },
      { fi: "Aluksi olin vähän jännittynyt.", vi: "Lúc đầu tôi hơi hồi hộp.", en: "At first, I was a little nervous." },
      { fi: "Tunnilla harjoittelimme uusia sanoja.", vi: "Trong giờ học, chúng tôi luyện tập những từ mới.", en: "In class, we practised new words." },
      { fi: "Päivän lopussa olin tyytyväinen.", vi: "Cuối ngày tôi cảm thấy hài lòng.", en: "At the end of the day, I was satisfied." }
    ]
  },
  {
    id: 12,
    level: "A2",
    title: "Lääkärissä",
    vietnameseTitle: "Ở phòng khám bác sĩ",
    englishTitle: "At the doctor's",
    sentences: [
      { fi: "Viime viikolla minulla oli aika lääkärille.", vi: "Tuần trước tôi có lịch hẹn với bác sĩ.", en: "Last week I had a doctor's appointment." },
      { fi: "Heräsin aikaisin ja söin aamupalan.", vi: "Tôi thức dậy sớm và ăn sáng.", en: "I woke up early and ate breakfast." },
      { fi: "Lähdin kotoa kello kahdeksan.", vi: "Tôi rời nhà lúc tám giờ.", en: "I left home at eight o'clock." },
      { fi: "Odotin odotushuoneessa noin kymmenen minuuttia.", vi: "Tôi đợi trong phòng chờ khoảng mười phút.", en: "I waited in the waiting room for about ten minutes." },
      { fi: "Lääkäri kysyi, miten voin.", vi: "Bác sĩ hỏi tôi cảm thấy thế nào.", en: "The doctor asked how I was feeling." },
      { fi: "Kerroin hänelle oireistani.", vi: "Tôi kể cho bác sĩ về những triệu chứng của mình.", en: "I told the doctor about my symptoms." },
      { fi: "Lääkäri tutki minut ja antoi ohjeita.", vi: "Bác sĩ khám cho tôi và đưa ra lời khuyên.", en: "The doctor examined me and gave me advice." },
      { fi: "Lähdin vastaanotolta kotiin.", vi: "Tôi rời phòng khám để về nhà.", en: "I left the clinic and went home." }
    ]
  },
  {
    id: 13,
    level: "A2",
    title: "Työhaastattelu",
    vietnameseTitle: "Phỏng vấn xin việc",
    englishTitle: "A job interview",
    sentences: [
      { fi: "Minulla oli työhaastattelu viime tiistaina.", vi: "Tôi có buổi phỏng vấn xin việc vào thứ Ba tuần trước.", en: "I had a job interview last Tuesday." },
      { fi: "Valmistauduin haastatteluun kotona.", vi: "Tôi chuẩn bị cho buổi phỏng vấn ở nhà.", en: "I prepared for the interview at home." },
      { fi: "Luin yrityksen verkkosivuilta tietoa työpaikasta.", vi: "Tôi đọc thông tin về công việc trên trang web của công ty.", en: "I read about the job on the company's website." },
      { fi: "Pukeuduin siisteihin vaatteisiin.", vi: "Tôi mặc quần áo gọn gàng.", en: "I dressed neatly." },
      { fi: "Saavuin paikalle kymmenen minuuttia aikaisemmin.", vi: "Tôi đến nơi sớm hơn mười phút.", en: "I arrived ten minutes early." },
      { fi: "Haastattelija kysyi kokemuksestani.", vi: "Người phỏng vấn hỏi về kinh nghiệm của tôi.", en: "The interviewer asked about my experience." },
      { fi: "Kerroin myös, mitä haluaisin oppia.", vi: "Tôi cũng kể những điều mình muốn học.", en: "I also explained what I would like to learn." },
      { fi: "Haastattelu meni mielestäni hyvin.", vi: "Theo tôi, buổi phỏng vấn diễn ra tốt đẹp.", en: "I think the interview went well." }
    ]
  },
  {
    id: 14,
    level: "A2",
    title: "Junamatka",
    vietnameseTitle: "Chuyến đi bằng tàu hỏa",
    englishTitle: "A train journey",
    sentences: [
      { fi: "Matkustin viime kuussa junalla Tampereelle.", vi: "Tháng trước tôi đi tàu đến Tampere.", en: "Last month I travelled to Tampere by train." },
      { fi: "Ostin lipun etukäteen internetistä.", vi: "Tôi mua vé trước trên mạng.", en: "I bought the ticket online in advance." },
      { fi: "Menin asemalle hyvissä ajoin.", vi: "Tôi đến ga từ khá sớm.", en: "I went to the station well in advance." },
      { fi: "Juna saapui laiturille muutaman minuutin myöhässä.", vi: "Tàu đến sân ga muộn vài phút.", en: "The train arrived at the platform a few minutes late." },
      { fi: "Etsin oman paikkani ja laitoin laukun hyllylle.", vi: "Tôi tìm chỗ ngồi và đặt túi lên giá.", en: "I found my seat and put my bag on the rack." },
      { fi: "Matkan aikana luin kirjaa ja kuuntelin musiikkia.", vi: "Trong chuyến đi, tôi đọc sách và nghe nhạc.", en: "During the journey, I read a book and listened to music." },
      { fi: "Ikkunasta näkyi kauniita maisemia.", vi: "Qua cửa sổ có thể nhìn thấy phong cảnh đẹp.", en: "Beautiful scenery was visible through the window." },
      { fi: "Saavuin perille iltapäivällä.", vi: "Tôi đến nơi vào buổi chiều.", en: "I arrived at my destination in the afternoon." }
    ]
  },
  {
    id: 15,
    level: "A2",
    title: "Uusi harrastus",
    vietnameseTitle: "Sở thích mới",
    englishTitle: "A new hobby",
    sentences: [
      { fi: "Halusin löytää itselleni uuden harrastuksen.", vi: "Tôi muốn tìm cho mình một sở thích mới.", en: "I wanted to find a new hobby for myself." },
      { fi: "Ystäväni ehdotti, että kokeilisin valokuvausta.", vi: "Bạn tôi đề nghị tôi thử chụp ảnh.", en: "My friend suggested that I try photography." },
      { fi: "En ollut aikaisemmin käyttänyt kameraa paljon.", vi: "Trước đây tôi chưa sử dụng máy ảnh nhiều.", en: "I had not used a camera much before." },
      { fi: "Lainasin kameran ystävältäni viikonlopuksi.", vi: "Tôi mượn máy ảnh của bạn vào cuối tuần.", en: "I borrowed a camera from my friend for the weekend." },
      { fi: "Lähdin ulos ja kuvasin luontoa.", vi: "Tôi ra ngoài và chụp ảnh thiên nhiên.", en: "I went outside and photographed nature." },
      { fi: "Aluksi kuvien ottaminen oli vaikeaa.", vi: "Lúc đầu việc chụp ảnh khá khó.", en: "Taking pictures was difficult at first." },
      { fi: "Harjoittelin joka päivä vähän lisää.", vi: "Tôi luyện tập thêm một chút mỗi ngày.", en: "I practised a little more every day." },
      { fi: "Nyt valokuvaus on minulle mukava harrastus.", vi: "Bây giờ chụp ảnh là một sở thích thú vị đối với tôi.", en: "Now photography is an enjoyable hobby for me." }
    ]
  }
{
    id: 1001,
    level: "A1",
    title: "Uusi koti",
    vietnameseTitle: "Ngôi nhà mới",
    englishTitle: "A New Home",
    sentences: [
        {
            fi: "Mira muuttaa uuteen asuntoon.",
            vi: "Mira chuyển đến một căn hộ mới.",
            en: "Mira moves into a new apartment."
        },
        {
            fi: "Asunto on pieni mutta valoisa.",
            vi: "Căn hộ nhỏ nhưng sáng sủa.",
            en: "The apartment is small but bright."
        },
        {
            fi: "Mira avaa ikkunan.",
            vi: "Mira mở cửa sổ.",
            en: "Mira opens the window."
        },
        {
            fi: "Hän näkee puiston ikkunasta.",
            vi: "Cô ấy nhìn thấy công viên qua cửa sổ.",
            en: "She sees a park through the window."
        },
        {
            fi: "Mira laittaa kirjat hyllyyn.",
            vi: "Mira đặt sách lên kệ.",
            en: "Mira puts the books on the shelf."
        },
        {
            fi: "Hän järjestää keittiön ja olohuoneen.",
            vi: "Cô ấy sắp xếp nhà bếp và phòng khách.",
            en: "She organizes the kitchen and living room."
        },
        {
            fi: "Illalla hän juo teetä ja lepää.",
            vi: "Buổi tối cô ấy uống trà và nghỉ ngơi.",
            en: "In the evening, she drinks tea and rests."
        },
        {
            fi: "Uusi koti tuntuu mukavalta.",
            vi: "Ngôi nhà mới mang lại cảm giác dễ chịu.",
            en: "The new home feels comfortable."
        },
        {
            fi: "Huomenna hän tutustuu naapureihin.",
            vi: "Ngày mai cô ấy sẽ làm quen với hàng xóm.",
            en: "Tomorrow she will get to know the neighbours."
        },
        {
            fi: "Mira on iloinen uudesta alusta.",
            vi: "Mira vui vì một khởi đầu mới.",
            en: "Mira is happy about a new beginning."
        }
    ]
},
  {
    id: 1002,
    level: "A2",
    title: "Uusi koti",
    vietnameseTitle: "Ngôi nhà mới",
    englishTitle: "A New Home",
    sentences: [
        {
            fi: "Mira on muuttanut uuteen asuntoon uudessa kaupungissa.",
            vi: "Mira đã chuyển đến một căn hộ mới ở một thành phố mới.",
            en: "Mira has moved into a new apartment in a new city."
        },
        {
            fi: "Ensimmäisinä päivinä kaikki tuntuu vähän vieraalta.",
            vi: "Trong những ngày đầu, mọi thứ đều có vẻ hơi xa lạ.",
            en: "During the first few days, everything feels a little unfamiliar."
        },
        {
            fi: "Hän ei vielä tunne lähialuetta eikä naapureita.",
            vi: "Cô ấy vẫn chưa biết khu vực xung quanh và những người hàng xóm.",
            en: "She does not know the neighbourhood or the neighbours yet."
        },
        {
            fi: "Mira päättää tutustua ympäristöön kävelemällä.",
            vi: "Mira quyết định tìm hiểu môi trường xung quanh bằng cách đi bộ.",
            en: "Mira decides to explore the area by walking."
        },
        {
            fi: "Hän löytää läheltä kaupan, kirjaston ja bussipysäkin.",
            vi: "Cô ấy tìm thấy một cửa hàng, thư viện và trạm xe buýt ở gần đó.",
            en: "She finds a shop, a library and a bus stop nearby."
        },
        {
            fi: "Kirjastossa hän kysyy työntekijältä tietoa alueesta.",
            vi: "Ở thư viện, cô ấy hỏi nhân viên thông tin về khu vực.",
            en: "At the library, she asks an employee for information about the area."
        },
        {
            fi: "Kotimatkalla hän tapaa ystävällisen naapurin.",
            vi: "Trên đường về nhà, cô ấy gặp một người hàng xóm thân thiện.",
            en: "On the way home, she meets a friendly neighbour."
        },
        {
            fi: "He keskustelevat hetken ja sopivat tapaavansa uudelleen.",
            vi: "Họ trò chuyện một lúc và hẹn sẽ gặp lại.",
            en: "They talk for a while and agree to meet again."
        },
        {
            fi: "Mira huomaa, että uuteen paikkaan tutustuminen vie aikaa.",
            vi: "Mira nhận ra rằng việc làm quen với một nơi mới cần có thời gian.",
            en: "Mira realizes that getting to know a new place takes time."
        },
        {
            fi: "Hän tuntee olonsa vähitellen kotoisaksi.",
            vi: "Dần dần, cô ấy cảm thấy nơi đây thân thuộc như nhà.",
            en: "Gradually, she begins to feel at home."
        }
    ]
},
];

window.stories = stories;

