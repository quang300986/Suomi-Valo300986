
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
    {
    id: 1003,
    level: "A1",
    title: "Oma unelma",
    vietnameseTitle: "Ước mơ của riêng mình",
    englishTitle: "A Dream of My Own",
    sentences: [
        {
            fi: "Ali opiskelee ammattikoulussa.",
            vi: "Ali học tại trường dạy nghề.",
            en: "Ali studies at a vocational school."
        },
        {
            fi: "Hän haluaa oppia kokiksi.",
            vi: "Cậu ấy muốn học để trở thành đầu bếp.",
            en: "He wants to train as a chef."
        },
        {
            fi: "Ali pitää ruoanlaitosta.",
            vi: "Ali thích nấu ăn.",
            en: "Ali likes cooking."
        },
        {
            fi: "Koulussa hän oppii uusia asioita.",
            vi: "Ở trường, cậu ấy học những điều mới.",
            en: "At school, he learns new things."
        },
        {
            fi: "Joskus tehtävät ovat vaikeita.",
            vi: "Đôi khi các bài tập rất khó.",
            en: "Sometimes the tasks are difficult."
        },
        {
            fi: "Ali kysyy opettajalta apua.",
            vi: "Ali hỏi giáo viên để được giúp đỡ.",
            en: "Ali asks the teacher for help."
        },
        {
            fi: "Hän harjoittelee myös kotona.",
            vi: "Cậu ấy cũng luyện tập ở nhà.",
            en: "He also practises at home."
        },
        {
            fi: "Vähitellen hän oppii enemmän.",
            vi: "Dần dần, cậu ấy học được nhiều hơn.",
            en: "Little by little, he learns more."
        },
        {
            fi: "Ali valmistaa hyvän aterian.",
            vi: "Ali chuẩn bị một bữa ăn ngon.",
            en: "Ali prepares a good meal."
        },
        {
            fi: "Hän uskoo omaan unelmaansa.",
            vi: "Cậu ấy tin vào ước mơ của mình.",
            en: "He believes in his own dream."
        }
    ]
},
      {
    id: 1004,
    level: "A2",
    title: "Oma unelma",
    vietnameseTitle: "Ước mơ của riêng mình",
    englishTitle: "A Dream of My Own",
    sentences: [
        {
            fi: "Ali aloitti kokkiopinnot tämän vuoden syksyllä.",
            vi: "Ali bắt đầu học nghề đầu bếp vào mùa thu năm nay.",
            en: "Ali started his chef studies this autumn."
        },
        {
            fi: "Hän on aina ollut kiinnostunut erilaisista ruoista.",
            vi: "Cậu ấy luôn quan tâm đến những món ăn khác nhau.",
            en: "He has always been interested in different kinds of food."
        },
        {
            fi: "Aluksi koulun keittiössä työskenteleminen jännitti häntä.",
            vi: "Lúc đầu, việc làm việc trong bếp của trường khiến cậu ấy hồi hộp.",
            en: "At first, working in the school kitchen made him nervous."
        },
        {
            fi: "Hän ei osannut käyttää kaikkia keittiön välineitä.",
            vi: "Cậu ấy chưa biết sử dụng tất cả dụng cụ nhà bếp.",
            en: "He did not know how to use all the kitchen equipment."
        },
        {
            fi: "Opettaja näytti hänelle, miten työvälineitä käytetään oikein.",
            vi: "Giáo viên chỉ cho cậu ấy cách sử dụng dụng cụ đúng cách.",
            en: "The teacher showed him how to use the equipment correctly."
        },
        {
            fi: "Ali kirjoitti ohjeet vihkoonsa ja harjoitteli rauhassa.",
            vi: "Ali ghi hướng dẫn vào vở và bình tĩnh luyện tập.",
            en: "Ali wrote the instructions in his notebook and practised calmly."
        },
        {
            fi: "Muutaman viikon kuluttua työskentely alkoi sujua paremmin.",
            vi: "Sau vài tuần, công việc bắt đầu diễn ra tốt hơn.",
            en: "After a few weeks, the work began to go better."
        },
        {
            fi: "Eräänä päivänä hänen ryhmänsä valmisti lounaan koulun vieraille.",
            vi: "Một ngày nọ, nhóm của cậu ấy chuẩn bị bữa trưa cho khách của trường.",
            en: "One day, his group prepared lunch for the school's guests."
        },
        {
            fi: "Ali oli tyytyväinen, kun vieraat pitivät ruoasta.",
            vi: "Ali rất vui khi các vị khách thích món ăn.",
            en: "Ali was pleased when the guests enjoyed the food."
        },
        {
            fi: "Hän ymmärsi, että kärsivällisyys ja harjoittelu auttavat saavuttamaan tavoitteita.",
            vi: "Cậu ấy hiểu rằng sự kiên nhẫn và luyện tập giúp đạt được mục tiêu.",
            en: "He understood that patience and practice help people reach their goals."
        }
    ]
},
        {
    id: 1005,
    level: "A1",
    title: "Siisti työpaikka",
    vietnameseTitle: "Nơi làm việc sạch sẽ",
    englishTitle: "A Clean Workplace",
    sentences: [
        {
            fi: "Noora on työharjoittelussa autokorjaamossa.",
            vi: "Noora đang thực tập tại một xưởng sửa chữa ô tô.",
            en: "Noora is doing an internship at a car repair shop."
        },
        {
            fi: "Hän tulee töihin aamulla kello kahdeksan.",
            vi: "Cô ấy đến làm việc lúc tám giờ sáng.",
            en: "She arrives at work at eight in the morning."
        },
        {
            fi: "Tänään työpaikalla siivotaan.",
            vi: "Hôm nay nơi làm việc được dọn dẹp.",
            en: "Today the workplace is being cleaned."
        },
        {
            fi: "Noora ottaa siivousvälineet.",
            vi: "Noora lấy dụng cụ vệ sinh.",
            en: "Noora takes the cleaning supplies."
        },
        {
            fi: "Hän pyyhkii pöydät puhtaiksi.",
            vi: "Cô ấy lau sạch các chiếc bàn.",
            en: "She wipes the tables clean."
        },
        {
            fi: "Työkaveri järjestää työkalut paikoilleen.",
            vi: "Đồng nghiệp sắp xếp dụng cụ về đúng chỗ.",
            en: "A colleague puts the tools in their proper places."
        },
        {
            fi: "Kaikki auttavat toisiaan.",
            vi: "Mọi người giúp đỡ lẫn nhau.",
            en: "Everyone helps one another."
        },
        {
            fi: "Tauolla he juovat kahvia yhdessä.",
            vi: "Trong giờ nghỉ, họ cùng nhau uống cà phê.",
            en: "During the break, they drink coffee together."
        },
        {
            fi: "Siivouksen jälkeen työpaikka näyttää hyvältä.",
            vi: "Sau khi dọn dẹp, nơi làm việc trông rất đẹp.",
            en: "After cleaning, the workplace looks nice."
        },
        {
            fi: "Noora on iloinen, koska kaikki tekivät yhteistyötä.",
            vi: "Noora vui vì mọi người đã cùng nhau hợp tác.",
            en: "Noora is happy because everyone worked together."
        }
    ]
},
          {
    id: 1006,
    level: "A2",
    title: "Siisti työpaikka",
    vietnameseTitle: "Nơi làm việc sạch sẽ",
    englishTitle: "A Clean Workplace",
    sentences: [
        {
            fi: "Noora suorittaa työharjoittelua pienessä autokorjaamossa.",
            vi: "Noora đang thực tập tại một xưởng sửa chữa ô tô nhỏ.",
            en: "Noora is doing an internship at a small car repair shop."
        },
        {
            fi: "Hän on oppinut, että siisti työympäristö helpottaa kaikkien työtä.",
            vi: "Cô ấy đã học được rằng môi trường làm việc gọn gàng giúp công việc của mọi người dễ dàng hơn.",
            en: "She has learned that a tidy working environment makes everyone's job easier."
        },
        {
            fi: "Perjantaina työntekijät päättävät järjestää yhteisen siivouspäivän.",
            vi: "Vào thứ Sáu, các nhân viên quyết định tổ chức một ngày cùng nhau dọn dẹp.",
            en: "On Friday, the employees decide to organize a cleaning day together."
        },
        {
            fi: "Esihenkilö kertoo, mitä alueita pitää siivota.",
            vi: "Người quản lý nói những khu vực nào cần được dọn dẹp.",
            en: "The supervisor explains which areas need cleaning."
        },
        {
            fi: "Noora auttaa järjestämään toimiston ja yhteisen taukotilan.",
            vi: "Noora giúp sắp xếp văn phòng và phòng nghỉ chung.",
            en: "Noora helps organize the office and the shared break room."
        },
        {
            fi: "Hän lajittelee tarpeettomat paperit ja laittaa tavarat omille paikoilleen.",
            vi: "Cô ấy phân loại giấy tờ không cần thiết và đặt đồ vật về đúng vị trí.",
            en: "She sorts unnecessary papers and puts things in their proper places."
        },
        {
            fi: "Työkaverit huomaavat, että tavarat löytyvät nyt helpommin.",
            vi: "Các đồng nghiệp nhận thấy rằng giờ đây đồ vật dễ tìm hơn.",
            en: "The colleagues notice that things are now easier to find."
        },
        {
            fi: "Päivän aikana he keskustelevat myös turvallisista työtavoista.",
            vi: "Trong ngày hôm đó, họ cũng thảo luận về các phương pháp làm việc an toàn.",
            en: "During the day, they also discuss safe working practices."
        },
        {
            fi: "Noora ymmärtää, ettei siisteys kuulu vain yhden työntekijän vastuulle.",
            vi: "Noora hiểu rằng sự sạch sẽ không chỉ là trách nhiệm của một nhân viên.",
            en: "Noora understands that cleanliness is not just one employee's responsibility."
        },
        {
            fi: "Hyvä yhteistyö tekee työpaikasta viihtyisämmän kaikille.",
            vi: "Sự hợp tác tốt giúp nơi làm việc trở nên dễ chịu hơn đối với mọi người.",
            en: "Good teamwork makes the workplace more pleasant for everyone."
        }
    ]
},
            {
    id: 1007,
    level: "A1",
    title: "Minä ymmärrän paremmin",
    vietnameseTitle: "Tôi hiểu tốt hơn",
    englishTitle: "I Understand Better",
    sentences: [
        {
            fi: "Linh opiskelee suomea koulussa.",
            vi: "Linh học tiếng Phần Lan ở trường.",
            en: "Linh studies Finnish at school."
        },
        {
            fi: "Hän haluaa puhua suomea hyvin.",
            vi: "Cô ấy muốn nói tiếng Phần Lan tốt.",
            en: "She wants to speak Finnish well."
        },
        {
            fi: "Joka päivä hän oppii uusia sanoja.",
            vi: "Mỗi ngày cô ấy học những từ mới.",
            en: "Every day she learns new words."
        },
        {
            fi: "Joskus opettajan puhe on liian nopeaa.",
            vi: "Đôi khi lời nói của giáo viên quá nhanh.",
            en: "Sometimes the teacher speaks too quickly."
        },
        {
            fi: "Linh pyytää opettajaa puhumaan hitaammin.",
            vi: "Linh nhờ giáo viên nói chậm hơn.",
            en: "Linh asks the teacher to speak more slowly."
        },
        {
            fi: "Hän kirjoittaa uudet sanat vihkoon.",
            vi: "Cô ấy viết những từ mới vào vở.",
            en: "She writes the new words in her notebook."
        },
        {
            fi: "Kotona hän lukee sanat uudelleen.",
            vi: "Ở nhà cô ấy đọc lại những từ đó.",
            en: "At home she reads the words again."
        },
        {
            fi: "Seuraavana päivänä hän ymmärtää enemmän.",
            vi: "Ngày hôm sau cô ấy hiểu được nhiều hơn.",
            en: "The next day she understands more."
        },
        {
            fi: "Hän uskaltaa myös puhua luokassa.",
            vi: "Cô ấy cũng dám nói chuyện trong lớp.",
            en: "She also dares to speak in class."
        },
        {
            fi: "Linh on ylpeä omasta edistymisestään.",
            vi: "Linh tự hào về sự tiến bộ của mình.",
            en: "Linh is proud of her progress."
        }
    ]
},
{
    id: 1008,
    level: "A2",
    title: "Minä ymmärrän paremmin",
    vietnameseTitle: "Tôi hiểu tốt hơn",
    englishTitle: "I Understand Better",
    sentences: [
        {
            fi: "Linh on opiskellut suomea jo useita kuukausia.",
            vi: "Linh đã học tiếng Phần Lan được vài tháng.",
            en: "Linh has been studying Finnish for several months."
        },
        {
            fi: "Hän huomaa, että ymmärtäminen on helpompaa kuin ennen.",
            vi: "Cô ấy nhận thấy việc hiểu tiếng Phần Lan dễ hơn trước.",
            en: "She notices that understanding Finnish is easier than before."
        },
        {
            fi: "Silti uusien ihmisten kanssa keskusteleminen jännittää joskus.",
            vi: "Tuy vậy, đôi khi cô ấy vẫn hồi hộp khi trò chuyện với người mới.",
            en: "Still, talking with new people sometimes makes her nervous."
        },
        {
            fi: "Eräänä aamuna opettaja antaa opiskelijoille paritehtävän.",
            vi: "Một buổi sáng, giáo viên giao cho học sinh một bài tập theo cặp.",
            en: "One morning, the teacher gives the students a pair exercise."
        },
        {
            fi: "Linh työskentelee yhdessä uuden opiskelijan kanssa.",
            vi: "Linh làm việc cùng một học viên mới.",
            en: "Linh works with a new student."
        },
        {
            fi: "Aluksi he puhuvat hitaasti ja käyttävät helppoja sanoja.",
            vi: "Ban đầu họ nói chậm và sử dụng những từ đơn giản.",
            en: "At first, they speak slowly and use simple words."
        },
        {
            fi: "Jos jokin asia jää epäselväksi, he kysyvät uudelleen.",
            vi: "Nếu điều gì chưa rõ, họ hỏi lại.",
            en: "If something is unclear, they ask again."
        },
        {
            fi: "Tehtävän lopussa Linh huomaa ymmärtäneensä melkein kaiken.",
            vi: "Cuối bài tập, Linh nhận ra mình đã hiểu gần như tất cả.",
            en: "At the end of the exercise, Linh realizes that she has understood almost everything."
        },
        {
            fi: "Hän huomaa myös, ettei virheiden tekemistä tarvitse pelätä.",
            vi: "Cô ấy cũng nhận ra rằng không cần phải sợ mắc lỗi.",
            en: "She also realizes that there is no need to be afraid of making mistakes."
        },
        {
            fi: "Harjoittelu ja rohkeus auttavat häntä kehittymään päivä päivältä.",
            vi: "Việc luyện tập và sự can đảm giúp cô ấy tiến bộ từng ngày.",
            en: "Practice and courage help her improve day by day."
        }
    ]
},
 {
    id: 1009,
    level: "A1",
    title: "Ystävät koulussa",
    vietnameseTitle: "Những người bạn ở trường",
    englishTitle: "Friends at School",
    sentences: [
        {
            fi: "Emilia ja Sara opiskelevat samassa koulussa.",
            vi: "Emilia và Sara học cùng một trường.",
            en: "Emilia and Sara study at the same school."
        },
        {
            fi: "He tapaavat joka aamu luokan ovella.",
            vi: "Họ gặp nhau mỗi sáng ở cửa lớp học.",
            en: "They meet every morning at the classroom door."
        },
        {
            fi: "Tänään heillä on ryhmätyö.",
            vi: "Hôm nay họ có bài tập nhóm.",
            en: "Today they have a group assignment."
        },
        {
            fi: "Heidän ryhmänsä tekee julisteen.",
            vi: "Nhóm của họ làm một tấm áp phích.",
            en: "Their group is making a poster."
        },
        {
            fi: "Emilia kirjoittaa tekstit.",
            vi: "Emilia viết nội dung.",
            en: "Emilia writes the texts."
        },
        {
            fi: "Sara etsii sopivia kuvia.",
            vi: "Sara tìm những hình ảnh phù hợp.",
            en: "Sara looks for suitable pictures."
        },
        {
            fi: "Toinen opiskelija auttaa värittämisessä.",
            vi: "Một học sinh khác giúp tô màu.",
            en: "Another student helps with colouring."
        },
        {
            fi: "Kaikki kuuntelevat toistensa ideoita.",
            vi: "Mọi người lắng nghe ý tưởng của nhau.",
            en: "Everyone listens to each other's ideas."
        },
        {
            fi: "Lopuksi ryhmä esittelee työnsä.",
            vi: "Cuối cùng, nhóm trình bày sản phẩm của mình.",
            en: "Finally, the group presents its work."
        },
        {
            fi: "Opettaja kiittää kaikkia hyvästä yhteistyöstä.",
            vi: "Giáo viên cảm ơn mọi người vì sự hợp tác tốt.",
            en: "The teacher thanks everyone for their good teamwork."
        }
    ]
},
{
    id: 1010,
    level: "A2",
    title: "Ystävät koulussa",
    vietnameseTitle: "Những người bạn ở trường",
    englishTitle: "Friends at School",
    sentences: [
        {
            fi: "Emilia tutustui Saraan ensimmäisenä koulupäivänään.",
            vi: "Emilia đã làm quen với Sara vào ngày đầu tiên đi học.",
            en: "Emilia met Sara on her first day at school."
        },
        {
            fi: "Aluksi he olivat hieman ujoja, mutta yhteiset tehtävät auttoivat heitä tutustumaan.",
            vi: "Ban đầu họ hơi nhút nhát, nhưng những bài tập chung đã giúp họ làm quen với nhau.",
            en: "At first they were a little shy, but shared assignments helped them get to know each other."
        },
        {
            fi: "Nyt he tekevät usein koulutehtäviä yhdessä.",
            vi: "Bây giờ họ thường làm bài tập ở trường cùng nhau.",
            en: "Now they often do school assignments together."
        },
        {
            fi: "Eräänä päivänä heidän ryhmänsä saa tehtäväksi suunnitella koulun tapahtuman.",
            vi: "Một ngày nọ, nhóm của họ được giao nhiệm vụ lên kế hoạch cho một sự kiện của trường.",
            en: "One day, their group is asked to plan a school event."
        },
        {
            fi: "Jokainen opiskelija saa kertoa omia ehdotuksiaan.",
            vi: "Mỗi học sinh đều có thể đưa ra đề xuất của mình.",
            en: "Every student gets to share their own suggestions."
        },
        {
            fi: "Sara ehdottaa musiikkia ja Emilia haluaa järjestää pieniä pelejä.",
            vi: "Sara đề xuất âm nhạc, còn Emilia muốn tổ chức những trò chơi nhỏ.",
            en: "Sara suggests music, and Emilia wants to organize some small games."
        },
        {
            fi: "Kaikki eivät ole heti samaa mieltä suunnitelmasta.",
            vi: "Không phải ai cũng đồng ý ngay với kế hoạch.",
            en: "Not everyone agrees with the plan immediately."
        },
        {
            fi: "He keskustelevat rauhallisesti ja löytävät yhdessä ratkaisun.",
            vi: "Họ bình tĩnh thảo luận và cùng nhau tìm ra giải pháp.",
            en: "They discuss things calmly and find a solution together."
        },
        {
            fi: "Tapahtumasta tulee onnistunut, ja opiskelijat viihtyvät hyvin.",
            vi: "Sự kiện diễn ra thành công và các học sinh có khoảng thời gian vui vẻ.",
            en: "The event is a success, and the students enjoy themselves."
        },
        {
            fi: "Emilia ymmärtää, että hyvä ystävyys perustuu luottamukseen ja yhteistyöhön.",
            vi: "Emilia hiểu rằng tình bạn tốt được xây dựng trên sự tin tưởng và hợp tác.",
            en: "Emilia understands that good friendship is built on trust and cooperation."
        }
    ]
},
  {
    id: 1011,
    level: "A1",
    title: "Puhelu, joka auttaa",
    vietnameseTitle: "Cuộc điện thoại giúp đỡ",
    englishTitle: "A Helpful Phone Call",
    sentences: [
        {
            fi: "Anna on työharjoittelussa hoivakodissa.",
            vi: "Anna đang thực tập tại một viện chăm sóc.",
            en: "Anna is doing an internship at a care home."
        },
        {
            fi: "Aamulla puhelin soi.",
            vi: "Buổi sáng, điện thoại reo.",
            en: "In the morning, the phone rings."
        },
        {
            fi: "Anna vastaa puhelimeen.",
            vi: "Anna nghe điện thoại.",
            en: "Anna answers the phone."
        },
        {
            fi: "Soittaja kysyy vierailuajoista.",
            vi: "Người gọi hỏi về giờ thăm viếng.",
            en: "The caller asks about visiting hours."
        },
        {
            fi: "Anna kuuntelee tarkasti.",
            vi: "Anna lắng nghe cẩn thận.",
            en: "Anna listens carefully."
        },
        {
            fi: "Hän ei tiedä vastausta heti.",
            vi: "Cô ấy chưa biết câu trả lời ngay.",
            en: "She does not know the answer immediately."
        },
        {
            fi: "Anna kysyy asiaa työtoveriltaan.",
            vi: "Anna hỏi đồng nghiệp về việc đó.",
            en: "Anna asks her colleague about it."
        },
        {
            fi: "Sitten hän kertoo oikean tiedon soittajalle.",
            vi: "Sau đó cô ấy cung cấp thông tin chính xác cho người gọi.",
            en: "Then she gives the caller the correct information."
        },
        {
            fi: "Soittaja kiittää ystävällisesti.",
            vi: "Người gọi lịch sự cảm ơn.",
            en: "The caller says thank you politely."
        },
        {
            fi: "Anna on tyytyväinen, koska hän pystyi auttamaan.",
            vi: "Anna hài lòng vì cô ấy đã có thể giúp đỡ.",
            en: "Anna is pleased because she was able to help."
        }
    ]
},
    {
    id: 1012,
    level: "A2",
    title: "Puhelu, joka auttaa",
    vietnameseTitle: "Cuộc điện thoại giúp đỡ",
    englishTitle: "A Helpful Phone Call",
    sentences: [
        {
            fi: "Anna työskentelee harjoittelijana hoivakodin vastaanotossa.",
            vi: "Anna làm thực tập sinh tại quầy tiếp tân của viện chăm sóc.",
            en: "Anna works as a trainee at the reception of a care home."
        },
        {
            fi: "Hän on opetellut vastaamaan puhelimeen kohteliaasti ja selkeästi.",
            vi: "Cô ấy đã học cách nghe điện thoại một cách lịch sự và rõ ràng.",
            en: "She has learned to answer the phone politely and clearly."
        },
        {
            fi: "Eräänä aamuna iäkäs mies soittaa ja kysyy tärkeää asiaa.",
            vi: "Một buổi sáng, một người đàn ông lớn tuổi gọi điện và hỏi một việc quan trọng.",
            en: "One morning, an elderly man calls and asks about something important."
        },
        {
            fi: "Hän haluaa tietää, miten hän voi tulla tapaamaan ystäväänsä.",
            vi: "Ông ấy muốn biết làm thế nào để đến thăm người bạn của mình.",
            en: "He wants to know how he can come and visit his friend."
        },
        {
            fi: "Anna kuuntelee kysymyksen loppuun ennen kuin vastaa.",
            vi: "Anna lắng nghe hết câu hỏi trước khi trả lời.",
            en: "Anna listens to the whole question before answering."
        },
        {
            fi: "Koska hän ei ole varma kaikista yksityiskohdista, hän tarkistaa tiedot ohjaajaltaan.",
            vi: "Vì không chắc chắn về tất cả chi tiết, cô ấy kiểm tra thông tin với người hướng dẫn.",
            en: "Because she is not sure about all the details, she checks the information with her supervisor."
        },
        {
            fi: "Ohjaaja neuvoo häntä selittämään asian rauhallisesti.",
            vi: "Người hướng dẫn khuyên cô ấy giải thích vấn đề một cách bình tĩnh.",
            en: "The supervisor advises her to explain the matter calmly."
        },
        {
            fi: "Anna kertoo vierailuajoista ja antaa myös osoitteen.",
            vi: "Anna nói về giờ thăm viếng và cũng cung cấp địa chỉ.",
            en: "Anna explains the visiting hours and also gives the address."
        },
        {
            fi: "Mies kiittää häntä hyvästä palvelusta.",
            vi: "Người đàn ông cảm ơn cô ấy vì sự phục vụ tốt.",
            en: "The man thanks her for the good service."
        },
        {
            fi: "Anna oppii, että hyvä asiakaspalvelu alkaa kuuntelemisesta.",
            vi: "Anna học được rằng dịch vụ khách hàng tốt bắt đầu từ việc lắng nghe.",
            en: "Anna learns that good customer service begins with listening."
        }
    ]
},
  {
    id: 1013,
    level: "A1",
    title: "Pieni ilo arjessa",
    vietnameseTitle: "Niềm vui nhỏ trong cuộc sống hằng ngày",
    englishTitle: "A Little Joy in Everyday Life",
    sentences: [
        {
            fi: "Matti asuu yksin pienessä asunnossa.",
            vi: "Matti sống một mình trong một căn hộ nhỏ.",
            en: "Matti lives alone in a small apartment."
        },
        {
            fi: "Hän käy joka päivä kävelyllä.",
            vi: "Anh ấy đi bộ mỗi ngày.",
            en: "He goes for a walk every day."
        },
        {
            fi: "Puistossa hän tapaa usein naapurin.",
            vi: "Ở công viên, anh ấy thường gặp người hàng xóm.",
            en: "In the park, he often meets his neighbour."
        },
        {
            fi: "Naapuri tervehtii häntä iloisesti.",
            vi: "Người hàng xóm vui vẻ chào anh ấy.",
            en: "The neighbour greets him cheerfully."
        },
        {
            fi: "He puhuvat säästä ja päivän tapahtumista.",
            vi: "Họ nói chuyện về thời tiết và những việc trong ngày.",
            en: "They talk about the weather and the day's events."
        },
        {
            fi: "Joskus he juovat kahvia yhdessä.",
            vi: "Đôi khi họ cùng nhau uống cà phê.",
            en: "Sometimes they drink coffee together."
        },
        {
            fi: "Matti auttaa naapuria kantamaan ostoskassin.",
            vi: "Matti giúp người hàng xóm mang túi đồ mua sắm.",
            en: "Matti helps his neighbour carry a shopping bag."
        },
        {
            fi: "Naapuri kiittää häntä.",
            vi: "Người hàng xóm cảm ơn anh ấy.",
            en: "The neighbour thanks him."
        },
        {
            fi: "Pienet ystävälliset teot tekevät päivän mukavaksi.",
            vi: "Những hành động tử tế nhỏ bé làm cho một ngày trở nên vui vẻ.",
            en: "Small acts of kindness make the day pleasant."
        },
        {
            fi: "Matti menee kotiin hyvällä mielellä.",
            vi: "Matti về nhà với tâm trạng vui vẻ.",
            en: "Matti goes home in a good mood."
        }
    ]
},
  {
    id: 1014,
    level: "A2",
    title: "Pieni ilo arjessa",
    vietnameseTitle: "Niềm vui nhỏ trong cuộc sống hằng ngày",
    englishTitle: "A Little Joy in Everyday Life",
    sentences: [
        {
            fi: "Matti on asunut samassa kerrostalossa jo kolme vuotta.",
            vi: "Matti đã sống trong cùng một tòa nhà chung cư được ba năm.",
            en: "Matti has lived in the same apartment building for three years."
        },
        {
            fi: "Hänellä on kiireinen arki, mutta hän yrittää löytää aikaa pienille asioille.",
            vi: "Cuộc sống hằng ngày của anh ấy khá bận rộn, nhưng anh ấy cố gắng dành thời gian cho những điều nhỏ bé.",
            en: "His everyday life is busy, but he tries to find time for small things."
        },
        {
            fi: "Eräänä aamuna hän huomaa, että talon pihalla on paljon pudonneita lehtiä.",
            vi: "Một buổi sáng, anh ấy nhận thấy có rất nhiều lá rụng trong sân tòa nhà.",
            en: "One morning, he notices many fallen leaves in the building's yard."
        },
        {
            fi: "Hän ottaa haravan ja alkaa siivota pihaa.",
            vi: "Anh ấy lấy một chiếc cào và bắt đầu dọn sân.",
            en: "He takes a rake and starts cleaning the yard."
        },
        {
            fi: "Pian myös kaksi naapuria tulee auttamaan.",
            vi: "Chẳng bao lâu sau, hai người hàng xóm cũng đến giúp.",
            en: "Soon two neighbours also come to help."
        },
        {
            fi: "Työn lomassa he keskustelevat ja nauravat yhdessä.",
            vi: "Trong lúc làm việc, họ trò chuyện và cùng cười vui vẻ.",
            en: "While working, they talk and laugh together."
        },
        {
            fi: "Kun piha on siisti, yksi naapureista ehdottaa yhteisiä kahvihetkiä.",
            vi: "Khi sân đã sạch sẽ, một người hàng xóm đề nghị mọi người cùng uống cà phê.",
            en: "When the yard is tidy, one neighbour suggests having coffee together."
        },
        {
            fi: "He sopivat tapaavansa seuraavana lauantaina.",
            vi: "Họ hẹn gặp nhau vào thứ Bảy tuần sau.",
            en: "They agree to meet the following Saturday."
        },
        {
            fi: "Matti huomaa, että ystävällisyys voi tuoda ihmisiä lähemmäksi toisiaan.",
            vi: "Matti nhận ra rằng lòng tốt có thể đưa mọi người đến gần nhau hơn.",
            en: "Matti realizes that kindness can bring people closer together."
        },
        {
            fi: "Hän on kiitollinen uusista tuttavuuksista ja mukavista hetkistä.",
            vi: "Anh ấy biết ơn những người quen mới và những khoảnh khắc vui vẻ.",
            en: "He is grateful for new acquaintances and pleasant moments."
        }
    ]
},
  {
    id: 1015,
    level: "A1",
    title: "Uusi mahdollisuus",
    vietnameseTitle: "Một cơ hội mới",
    englishTitle: "A New Opportunity",
    sentences: [
        {
            fi: "Janne etsii uutta työpaikkaa.",
            vi: "Janne đang tìm một công việc mới.",
            en: "Janne is looking for a new job."
        },
        {
            fi: "Hän haluaa työskennellä varastossa.",
            vi: "Anh ấy muốn làm việc trong nhà kho.",
            en: "He wants to work in a warehouse."
        },
        {
            fi: "Janne lähettää työhakemuksen.",
            vi: "Janne gửi đơn xin việc.",
            en: "Janne sends a job application."
        },
        {
            fi: "Hän saa kutsun työhaastatteluun.",
            vi: "Anh ấy nhận được lời mời phỏng vấn xin việc.",
            en: "He receives an invitation to a job interview."
        },
        {
            fi: "Janne on vähän jännittynyt.",
            vi: "Janne hơi hồi hộp.",
            en: "Janne is a little nervous."
        },
        {
            fi: "Haastattelussa hän vastaa kysymyksiin.",
            vi: "Trong buổi phỏng vấn, anh ấy trả lời các câu hỏi.",
            en: "At the interview, he answers the questions."
        },
        {
            fi: "Hän ei osaa vastata kaikkeen.",
            vi: "Anh ấy không biết trả lời tất cả mọi câu hỏi.",
            en: "He cannot answer everything."
        },
        {
            fi: "Myöhemmin hän saa viestin työnantajalta.",
            vi: "Sau đó anh ấy nhận được tin nhắn từ nhà tuyển dụng.",
            en: "Later, he receives a message from the employer."
        },
        {
            fi: "Tällä kertaa hän ei saa työpaikkaa.",
            vi: "Lần này anh ấy không được nhận vào làm.",
            en: "This time, he does not get the job."
        },
        {
            fi: "Janne päättää yrittää uudelleen.",
            vi: "Janne quyết định thử lại.",
            en: "Janne decides to try again."
        }
    ]
},
  {
    id: 1016,
    level: "A2",
    title: "Uusi mahdollisuus",
    vietnameseTitle: "Một cơ hội mới",
    englishTitle: "A New Opportunity",
    sentences: [
        {
            fi: "Janne on etsinyt sopivaa työpaikkaa jo useita viikkoja.",
            vi: "Janne đã tìm một công việc phù hợp trong nhiều tuần.",
            en: "Janne has been looking for a suitable job for several weeks."
        },
        {
            fi: "Hänellä on vähän työkokemusta, mutta hän haluaa oppia lisää.",
            vi: "Anh ấy có ít kinh nghiệm làm việc, nhưng muốn học hỏi thêm.",
            en: "He has little work experience, but he wants to learn more."
        },
        {
            fi: "Eräänä päivänä hän löytää ilmoituksen varastotyöntekijän paikasta.",
            vi: "Một ngày nọ, anh ấy tìm thấy thông báo tuyển nhân viên kho.",
            en: "One day, he finds an advertisement for a warehouse worker."
        },
        {
            fi: "Hän lukee työpaikkailmoituksen huolellisesti ja kirjoittaa hakemuksen.",
            vi: "Anh ấy đọc kỹ thông báo tuyển dụng và viết đơn xin việc.",
            en: "He reads the job advertisement carefully and writes an application."
        },
        {
            fi: "Muutaman päivän kuluttua työnantaja kutsuu hänet haastatteluun.",
            vi: "Vài ngày sau, nhà tuyển dụng mời anh ấy đến phỏng vấn.",
            en: "A few days later, the employer invites him to an interview."
        },
        {
            fi: "Haastattelun jälkeen Janne huomaa, että hän olisi voinut valmistautua paremmin.",
            vi: "Sau buổi phỏng vấn, Janne nhận ra rằng mình đã có thể chuẩn bị tốt hơn.",
            en: "After the interview, Janne realizes that he could have prepared better."
        },
        {
            fi: "Hän kirjoittaa muistiin kysymykset, joihin oli vaikea vastata.",
            vi: "Anh ấy ghi lại những câu hỏi mà mình đã khó trả lời.",
            en: "He writes down the questions that were difficult to answer."
        },
        {
            fi: "Seuraavalla kerralla hän harjoittelee vastauksia etukäteen.",
            vi: "Lần sau, anh ấy luyện tập câu trả lời trước.",
            en: "Next time, he practises his answers in advance."
        },
        {
            fi: "Hän ymmärtää, että jokainen kokemus voi opettaa jotakin uutta.",
            vi: "Anh ấy hiểu rằng mỗi trải nghiệm đều có thể dạy cho mình điều gì đó mới.",
            en: "He understands that every experience can teach him something new."
        },
        {
            fi: "Janne jatkaa työnhakua luottavaisemmin kuin ennen.",
            vi: "Janne tiếp tục tìm việc với sự tự tin hơn trước.",
            en: "Janne continues his job search with more confidence than before."
        }
    ]
},
    {
    id: 1017,
    level: "A1",
    title: "Tarkkaavainen opiskelija",
    vietnameseTitle: "Người học viên tinh ý",
    englishTitle: "An Observant Student",
    sentences: [
        {
            fi: "Oskari opiskelee sähköalaa.",
            vi: "Oskari học ngành điện.",
            en: "Oskari studies electrical engineering."
        },
        {
            fi: "Hän on työharjoittelussa pienessä yrityksessä.",
            vi: "Cậu ấy đang thực tập tại một công ty nhỏ.",
            en: "He is doing an internship at a small company."
        },
        {
            fi: "Joka aamu hän kuuntelee ohjaajan ohjeita.",
            vi: "Mỗi buổi sáng cậu ấy lắng nghe hướng dẫn của người hướng dẫn.",
            en: "Every morning, he listens to the supervisor's instructions."
        },
        {
            fi: "Oskari katsoo tarkasti, miten työt tehdään.",
            vi: "Oskari quan sát kỹ cách công việc được thực hiện.",
            en: "Oskari carefully watches how the work is done."
        },
        {
            fi: "Hän kirjoittaa tärkeät asiat vihkoon.",
            vi: "Cậu ấy ghi những điều quan trọng vào vở.",
            en: "He writes important things in his notebook."
        },
        {
            fi: "Työpäivän aikana hän huomaa pienen ongelman.",
            vi: "Trong ngày làm việc, cậu ấy nhận thấy một vấn đề nhỏ.",
            en: "During the workday, he notices a small problem."
        },
        {
            fi: "Hän kertoo asiasta ohjaajalle.",
            vi: "Cậu ấy nói với người hướng dẫn về việc đó.",
            en: "He tells the supervisor about it."
        },
        {
            fi: "Ohjaaja kiittää häntä tarkkaavaisuudesta.",
            vi: "Người hướng dẫn cảm ơn cậu ấy vì sự chú ý.",
            en: "The supervisor thanks him for being observant."
        },
        {
            fi: "Oskari oppii joka päivä jotakin uutta.",
            vi: "Oskari học được điều gì đó mới mỗi ngày.",
            en: "Oskari learns something new every day."
        },
        {
            fi: "Hän haluaa tehdä työnsä hyvin ja turvallisesti.",
            vi: "Cậu ấy muốn làm công việc của mình tốt và an toàn.",
            en: "He wants to do his work well and safely."
        }
    ]
},
      {
    id: 1018,
    level: "A2",
    title: "Tarkkaavainen opiskelija",
    vietnameseTitle: "Người học viên tinh ý",
    englishTitle: "An Observant Student",
    sentences: [
        {
            fi: "Oskari suorittaa työharjoittelua sähköalan yrityksessä.",
            vi: "Oskari đang thực tập tại một công ty thuộc ngành điện.",
            en: "Oskari is doing an internship at an electrical services company."
        },
        {
            fi: "Hän haluaa oppia työpaikan käytännöistä ja kehittää omaa osaamistaan.",
            vi: "Cậu ấy muốn học hỏi về cách làm việc tại nơi làm việc và phát triển năng lực của bản thân.",
            en: "He wants to learn workplace practices and develop his skills."
        },
        {
            fi: "Ohjaaja muistuttaa opiskelijoita siitä, että ohjeita pitää noudattaa tarkasti.",
            vi: "Người hướng dẫn nhắc các học viên rằng phải tuân thủ hướng dẫn một cách cẩn thận.",
            en: "The supervisor reminds the students that instructions must be followed carefully."
        },
        {
            fi: "Oskari kuuntelee ohjeet ja kysyy, jos jokin asia on epäselvä.",
            vi: "Oskari lắng nghe hướng dẫn và hỏi nếu có điều gì chưa rõ.",
            en: "Oskari listens to the instructions and asks if something is unclear."
        },
        {
            fi: "Työpäivän aikana hän huomaa, että yksi asiakirja puuttuu sovitusta paikasta.",
            vi: "Trong ngày làm việc, cậu ấy nhận thấy một tài liệu không có ở vị trí đã quy định.",
            en: "During the workday, he notices that a document is missing from its agreed place."
        },
        {
            fi: "Hän ei tee omia päätöksiä, vaan kertoo asiasta vastuuhenkilölle.",
            vi: "Cậu ấy không tự đưa ra quyết định mà báo việc đó cho người phụ trách.",
            en: "He does not make his own decisions but informs the person in charge."
        },
        {
            fi: "Yhdessä he selvittävät, missä asiakirja kuuluu olla.",
            vi: "Họ cùng nhau tìm hiểu tài liệu đó cần được đặt ở đâu.",
            en: "Together, they find out where the document should be."
        },
        {
            fi: "Ohjaaja sanoo, että huolellisuus on tärkeä osa ammattitaitoa.",
            vi: "Người hướng dẫn nói rằng sự cẩn thận là một phần quan trọng của năng lực nghề nghiệp.",
            en: "The supervisor says that carefulness is an important part of professional skills."
        },
        {
            fi: "Oskari ymmärtää, että pienilläkin havainnoilla voi olla merkitystä.",
            vi: "Oskari hiểu rằng ngay cả những quan sát nhỏ cũng có thể có ý nghĩa.",
            en: "Oskari understands that even small observations can matter."
        },
        {
            fi: "Harjoittelun aikana hänestä tulee vähitellen itsenäisempi ja vastuullisempi.",
            vi: "Trong thời gian thực tập, cậu ấy dần trở nên tự lập và có trách nhiệm hơn.",
            en: "During the internship, he gradually becomes more independent and responsible."
        }
    ]
},
{
    id: 1019,
    level: "A1",
    title: "Yllätys arvioinnissa",
    vietnameseTitle: "Bất ngờ trong buổi đánh giá",
    englishTitle: "A Surprise During the Assessment",
    sentences: [
        {
            fi: "Ella opiskelee lähihoitajaksi.",
            vi: "Ella đang học để trở thành nhân viên chăm sóc sức khỏe.",
            en: "Ella is studying to become a practical nurse."
        },
        {
            fi: "Hänellä on tänään arviointikeskustelu.",
            vi: "Hôm nay cô ấy có buổi trao đổi đánh giá.",
            en: "Today she has an assessment meeting."
        },
        {
            fi: "Ella on vähän hermostunut.",
            vi: "Ella hơi lo lắng.",
            en: "Ella is a little nervous."
        },
        {
            fi: "Opettaja ja ohjaaja ovat mukana keskustelussa.",
            vi: "Giáo viên và người hướng dẫn cùng tham gia buổi trao đổi.",
            en: "The teacher and supervisor take part in the discussion."
        },
        {
            fi: "He kysyvät, mitä Ella on oppinut.",
            vi: "Họ hỏi Ella đã học được những gì.",
            en: "They ask what Ella has learned."
        },
        {
            fi: "Ella kertoo omista kokemuksistaan.",
            vi: "Ella kể về những trải nghiệm của mình.",
            en: "Ella talks about her experiences."
        },
        {
            fi: "Hän on oppinut työskentelemään ryhmässä.",
            vi: "Cô ấy đã học cách làm việc theo nhóm.",
            en: "She has learned to work in a team."
        },
        {
            fi: "Ohjaaja antaa hänelle hyvää palautetta.",
            vi: "Người hướng dẫn dành cho cô ấy những lời nhận xét tích cực.",
            en: "The supervisor gives her positive feedback."
        },
        {
            fi: "Ella saa kuulla, että hän on kehittynyt paljon.",
            vi: "Ella được nghe rằng cô ấy đã tiến bộ rất nhiều.",
            en: "Ella hears that she has improved a lot."
        },
        {
            fi: "Hän lähtee keskustelusta iloisena ja ylpeänä.",
            vi: "Cô ấy rời buổi trao đổi với niềm vui và sự tự hào.",
            en: "She leaves the meeting happy and proud."
        }
    ]
},
{
    id: 1020,
    level: "A2",
    title: "Yllätys arvioinnissa",
    vietnameseTitle: "Bất ngờ trong buổi đánh giá",
    englishTitle: "A Surprise During the Assessment",
    sentences: [
        {
            fi: "Ella on opiskellut lähihoitajaksi lähes vuoden ajan.",
            vi: "Ella đã học nghề nhân viên chăm sóc sức khỏe gần một năm.",
            en: "Ella has studied to become a practical nurse for almost a year."
        },
        {
            fi: "Hän on juuri päättänyt työharjoittelujaksonsa hoivakodissa.",
            vi: "Cô ấy vừa hoàn thành kỳ thực tập tại một viện chăm sóc.",
            en: "She has just completed her internship at a care home."
        },
        {
            fi: "Tänään hän tapaa opettajansa ja työpaikkaohjaajansa arviointikeskustelussa.",
            vi: "Hôm nay cô ấy gặp giáo viên và người hướng dẫn tại nơi thực tập trong buổi đánh giá.",
            en: "Today she meets her teacher and workplace supervisor for an assessment discussion."
        },
        {
            fi: "Ennen keskustelua Ella miettii, mitä hän olisi voinut tehdä paremmin.",
            vi: "Trước buổi trao đổi, Ella suy nghĩ về những điều mình có thể làm tốt hơn.",
            en: "Before the discussion, Ella thinks about what she could have done better."
        },
        {
            fi: "Hän kertoo oppineensa uusia työtehtäviä ja parempia vuorovaikutustaitoja.",
            vi: "Cô ấy kể rằng mình đã học được những nhiệm vụ mới và kỹ năng giao tiếp tốt hơn.",
            en: "She explains that she has learned new work tasks and better communication skills."
        },
        {
            fi: "Ohjaaja kertoo, että Ella on ollut aktiivinen ja luotettava opiskelija.",
            vi: "Người hướng dẫn nói rằng Ella là một học viên năng động và đáng tin cậy.",
            en: "The supervisor says that Ella has been an active and reliable student."
        },
        {
            fi: "Opettaja näyttää hänelle myös harjoittelun alussa tehdyt muistiinpanot.",
            vi: "Giáo viên cũng cho cô ấy xem những ghi chú được viết vào đầu kỳ thực tập.",
            en: "The teacher also shows her the notes made at the beginning of the internship."
        },
        {
            fi: "Ella huomaa, kuinka paljon hänen taitonsa ovat kehittyneet.",
            vi: "Ella nhận ra các kỹ năng của mình đã phát triển nhiều như thế nào.",
            en: "Ella notices how much her skills have developed."
        },
        {
            fi: "Hän saa hyvän arvioinnin ja muutaman vinkin tulevaa opiskelua varten.",
            vi: "Cô ấy nhận được kết quả đánh giá tốt và một vài lời khuyên cho việc học sắp tới.",
            en: "She receives a good assessment and a few tips for her future studies."
        },
        {
            fi: "Ella ymmärtää, että pienet askeleet vievät vähitellen kohti suuria tavoitteita.",
            vi: "Ella hiểu rằng những bước nhỏ dần dần đưa mình đến những mục tiêu lớn.",
            en: "Ella understands that small steps gradually lead towards big goals."
        }
    ]
},
  
];

window.stories = stories;

