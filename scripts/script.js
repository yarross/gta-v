// 1. Заглушка для Vector3 (чтобы TS-данные работали в браузере)
class Vector3 {
    constructor(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
}

// 2. ВСТАВЬ СВОЙ МАССИВ СЮДА
const yH = [
   {
        id: "nwc_1",
        type: "NWC",
        groupName: "Статьи",
        name: "Статья №1",
        viewId: "YH-11002",
        date: "20/05/2032",
        location: "SY-News",
        contentImage: "lore-fragments/images/nwc/nwc_1.jpg",
        position: new Vector3(-175.8583, -1025.454, 28.9536),
    },
    {
        id: "nwc_2",
        type: "NWC",
        groupName: "Документы и заметки",
        name: "Договор на участие в экспериментах",
        viewId: "YH-11021",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_2.jpg",
        position: new Vector3(-1767.8037, -256.4204, 50.6124),
    },
    {
        id: "nwc_3",
        type: "NWC",
        groupName: "Документы и заметки",
        name: "Группа испытуемых №265",
        viewId: "YH-11021",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_3.jpg",
        position: new Vector3(-1767.8037, -256.4204, 50.6124),
    },
    {
        id: "nwc_4",
        type: "NWC",
        groupName: "Документы и заметки",
        name: "Группа испытуемых №2-44",
        viewId: "YH-11022",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_4.jpg",
        position: new Vector3(1674.8005, -26.3171, 183.7699),
    },
    {
        id: "nwc_5",
        type: "NWC",
        groupName: "Документы и заметки",
        name: "Инструктаж по работе в симулякруме",
        viewId: "YH-11033",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_5.jpg",
        position: new Vector3(164.0605, -966.9409, 29.7626),
    },
    {
        id: "nwc_6",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Мемуары Лизы Холанд вырезка",
        viewId: "YH-11041",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_6.jpg",
        position: new Vector3(-350.8251, -970.2722, 30.9726),
    },
    {
        id: "nwc_7",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Записки об инциденте Лизы Холанд №1",
        viewId: "YH-11042",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_7.jpg",
        position: new Vector3(-892.0912, -854.768, 19.737),
    },
    {
        id: "nwc_8",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Записки об инциденте Лизы Холанд №2",
        viewId: "YH-11043",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_8.jpg",
        position: new Vector3(-1727.4739, -1088.1654, 13.4635),
    },
    {
        id: "nwc_9",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Записки об инциденте Лизы Холанд №3",
        viewId: "YH-11044",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_9.jpg",
        position: new Vector3(-2001.2257, -307.0201, 47.7158),
    },
    {
        id: "nwc_10",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Записки об инциденте Лизы Холанд №4",
        viewId: "YH-11045",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_10.jpg",
        position: new Vector3(439.2313, -977.3972, 31.5216),
    },
    {
        id: "nwc_11",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Записки об инциденте Лизы Холанд №5",
        viewId: "YH-11046",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_11.jpg",
        position: new Vector3(-779.8166, 33.3633, 40.6469),
    },
    {
        id: "nwc_12",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Записки об инциденте Лизы Холанд №6",
        viewId: "YH-11047",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_12.jpg",
        position: new Vector3(-1465.3428, 183.0049, 55.921),
    },
    {
        id: "nwc_13",
        type: "NWC",
        groupName: "Архивные документы  «Лиза Холанд»",
        name: "Записки об инциденте Лизы Холанд №7",
        viewId: "YH-11048",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_13.jpg",
        position: new Vector3(-434.3558, 1113.1952, 333.4795),
    },
    {
        id: "nwc_14",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №1. «Проект Джейсон»",
        viewId: "YH-11051",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_14.jpg",
        position: new Vector3(692.99, 1201.3602, 345.5182),
    },
    {
        id: "nwc_15",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №2. «Проект Джейсон»",
        viewId: "YH-11052",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_15.jpg",
        position: new Vector3(1113.8307, -649.2363, 57.75),
    },
    {
        id: "nwc_16",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №3. «Проект Джейсон»",
        viewId: "YH-11053",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_16.jpg",
        position: new Vector3(698.5593, -1517.1411, 10.8026),
    },
    {
        id: "nwc_17",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №4. «Проект Джейсон»",
        viewId: "YH-11054",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_17.jpg",
        position: new Vector3(-176.1757, -633.7852, 48.9805),
    },
    {
        id: "nwc_18",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №5. «Проект Джейсон»",
        viewId: "YH-11055",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_18.jpg",
        position: new Vector3(-1219.0305, -1584.8181, 6.3023),
    },
    {
        id: "nwc_19",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №6. «Проект Джейсон»",
        viewId: "YH-11056",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_19.jpg",
        position: new Vector3(-1642.3127, -1128.1064, 19.4439),
    },
    {
        id: "nwc_20",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №7. «Проект Джейсон»",
        viewId: "YH-11057",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_20.jpg",
        position: new Vector3(-2185.9263, -399.0254, 13.2771),
    },
    {
        id: "nwc_21",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №8. «Проект Джейсон»",
        viewId: "YH-11058",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_21.jpg",
        position: new Vector3(-1298.8519, 355.9857, 68.6422),
    },
    {
        id: "nwc_22",
        type: "NWC",
        groupName: "Эксперимент «Проект Джейсон»",
        name: "Архивные записи №9. «Проект Джейсон»",
        viewId: "YH-11059",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_22.jpg",
        position: new Vector3(1883.9635, 595.7034, 190.4233),
    },
    {
        id: "nwc_23",
        type: "NWC",
        groupName: "Аудиодневники Доктора Эдриана Холта",
        name: "Аудиодневник. Часть №1",
        viewId: "YH-11061",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_23.jpg",
        audio: "lore-fragments/audio/nwc/nwc_23.mp3",
        position: new Vector3(3560.5391, 3672.7673, 29.1219),
    },
    {
        id: "nwc_24",
        type: "NWC",
        groupName: "Аудиодневники Доктора Эдриана Холта",
        name: "Аудиодневник. Часть №2",
        viewId: "YH-11062",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_24.jpg",
        audio: "lore-fragments/audio/nwc/nwc_24.mp3",
        position: new Vector3(3511.6682, 3746.6086, 36.2469),
    },
    {
        id: "nwc_25",
        type: "NWC",
        groupName: "Аудиодневники Доктора Эдриана Холта",
        name: "Аудиодневник. Часть №3",
        viewId: "YH-11063",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_25.jpg",
        audio: "lore-fragments/audio/nwc/nwc_25.mp3",
        position: new Vector3(-1668.7134, 158.6833, 62.976),
    },
    {
        id: "nwc_26",
        type: "NWC",
        groupName: "Аудиодневники Доктора Эдриана Холта",
        name: "Аудиодневник. Часть №4",
        viewId: "YH-11064",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_26.jpg",
        audio: "lore-fragments/audio/nwc/nwc_26.mp3",
        position: new Vector3(238.4057, -1389.9006, 32.5758),
    },
    {
        id: "nwc_27",
        type: "NWC",
        groupName: "Аудиодневники Доктора Эдриана Холта",
        name: "Аудиодневник. Часть №5",
        viewId: "YH-11065",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_27.jpg",
        audio: "lore-fragments/audio/nwc/nwc_27.mp3",
        position: new Vector3(373.0519, -591.5502, 29.2878),
    },
    {
        id: "nwc_28",
        type: "NWC",
        groupName: "Аудиодневники Доктора Эдриана Холта",
        name: "Аудиодневник. Часть №6",
        viewId: "YH-11066",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_28.jpg",
        audio: "lore-fragments/audio/nwc/nwc_28.mp3",
        position: new Vector3(-2248.9028, 271.4553, 175.5549),
    },
    {
        id: "nwc_29",
        type: "NWC",
        groupName: "Письма",
        name: "Поручительное письмо о погашении долга заемщика",
        viewId: "YH-11121",
        date: "01/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_29.jpg",
        position: new Vector3(-67.0201, -891.8993, 41.3131),
    },
    {
        id: "nwc_30",
        type: "NWC",
        groupName: "Письма",
        name: "Электронное письмо от 01.02.2035",
        viewId: "YH-11122",
        date: "01/02/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/nwc/nwc_30.jpg",
        position: new Vector3(-1192.6615, -331.4947, 38.3593),
    },
    {
        id: "espo_1",
        type: "ESPO",
        groupName: "Аудиозаписи доктора",
        name: "Запись первая",
        viewId: "BC-400221",
        date: "05/10/2031",
        location: "NWC Corporation Laboratory №7",
        contentImage: "lore-fragments/images/espo/espo_1.jpg",
        audio: "lore-fragments/audio/espo/espo_1.mp3",
        position: new Vector3(822.2416, -1640.074, 30.3045),
    },
    {
        id: "espo_2",
        type: "ESPO",
        groupName: "Аудиозаписи доктора",
        name: "Запись вторая",
        viewId: "BC-400222",
        date: "17/10/2031",
        location: "NWC Corporation Laboratory №7",
        contentImage: "lore-fragments/images/espo/espo_2.jpg",
        audio: "lore-fragments/audio/espo/espo_2.mp3",
        position: new Vector3(2596.9644, 350.3189, 108.4011),
    },
    {
        id: "espo_3",
        type: "ESPO",
        groupName: "Аудиозаписи доктора",
        name: "Запись третья",
        viewId: "BC-400223",
        date: "02/12/2031",
        location: "NWC Corporation Laboratory №7",
        contentImage: "lore-fragments/images/espo/espo_3.jpg",
        audio: "lore-fragments/audio/espo/espo_3.mp3",
        position: new Vector3(651.1166, 2731.7908, 41.9956),
    },
    {
        id: "espo_4",
        type: "ESPO",
        groupName: "Аудиозаписи доктора",
        name: "Запись четвертая",
        viewId: "BC-400224",
        date: "07/03/2032",
        location: "NWC Corporation Laboratory №7",
        contentImage: "lore-fragments/images/espo/espo_4.jpg",
        audio: "lore-fragments/audio/espo/espo_4.mp3",
        position: new Vector3(1475.3884, 2721.8591, 38.4487),
    },
    {
        id: "espo_5",
        type: "ESPO",
        groupName: "Аудиозаписи доктора",
        name: "Запись пятая",
        viewId: "BC-400225",
        date: "19/05/2032",
        location: "NWC Corporation Laboratory №7",
        contentImage: "lore-fragments/images/espo/espo_5.jpg",
        audio: "lore-fragments/audio/espo/espo_5.mp3",
        position: new Vector3(-288.6664, 2852.1609, 53.9358),
    },
    {
        id: "espo_6",
        type: "ESPO",
        groupName: "Электронные письма",
        name: "Электронное письмо №1",
        viewId: "BC-400131",
        date: "15/01/2031",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_6.jpg",
        position: new Vector3(-1002.3701, -473.2257, 45.2555),
    },
    {
        id: "espo_7",
        type: "ESPO",
        groupName: "Электронные письма",
        name: "Электронное письмо №2",
        viewId: "BC-400132",
        date: "05/02/2032",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_7.jpg",
        position: new Vector3(484.1565, -1949.8723, 25.8256),
    },
    {
        id: "espo_8",
        type: "ESPO",
        groupName: "Электронные письма",
        name: "Электронное письмо №3",
        viewId: "BC-400133",
        date: "06/03/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_8.jpg",
        position: new Vector3(464.7542, -270.6488, 54.5704),
    },
    {
        id: "espo_9",
        type: "ESPO",
        groupName: "Электронные письма",
        name: "Электронное письмо №4",
        viewId: "YH-11021",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_9.jpg",
        position: new Vector3(464.7542, -270.6488, 54.5704),
    },
    {
        id: "espo_10",
        type: "ESPO",
        groupName: "Интервью с жертвами",
        name: "Интервью №1",
        viewId: "BC-400431",
        date: "18/03/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_10.jpg",
        position: new Vector3(-608.5784, -926.6058, 24.6783),
    },
    {
        id: "espo_11",
        type: "ESPO",
        groupName: "Интервью с жертвами",
        name: "Интервью №2",
        viewId: "BC-400432",
        date: "08/09/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_11.jpg",
        audio: "lore-fragments/audio/espo/espo_11.wav",
        position: new Vector3(-844.1922, -449.8861, 37.1502),
    },
    {
        id: "espo_12",
        type: "ESPO",
        groupName: "Интервью с жертвами",
        name: "Интервью №3",
        viewId: "BC-400433",
        date: "03/10/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_12.jpg",
        audio: "lore-fragments/audio/espo/espo_12.wav",
        position: new Vector3(-844.1922, -449.8861, 37.1502),
    },
    {
        id: "espo_13",
        type: "ESPO",
        groupName: "Интервью с жертвами",
        name: "Интервью №4",
        viewId: "BC-400434",
        date: "25/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_13.jpg",
        position: new Vector3(314.3001, -215.1174, 54.0863),
    },
    {
        id: "espo_14",
        type: "ESPO",
        groupName: "Записки и заметки",
        name: "Записка №1",
        viewId: "BC-400531",
        date: "14/08/2031",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_14.jpg",
        position: new Vector3(-644.978, -81.425, 52.9586),
    },
    {
        id: "espo_15",
        type: "ESPO",
        groupName: "Записки и заметки",
        name: "Записка №2",
        viewId: "BC-400532",
        date: "20/01/2032",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_15.jpg",
        position: new Vector3(-1099.1116, -420.4955, 46.3012),
    },
    {
        id: "espo_16",
        type: "ESPO",
        groupName: "Записки и заметки",
        name: "Записка №3",
        viewId: "BC-400533",
        date: "11/03/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_16.jpg",
        position: new Vector3(-948.1379, -726.5201, 20.8361),
    },
    {
        id: "espo_17",
        type: "ESPO",
        groupName: "Записки и заметки",
        name: "Записка №4",
        viewId: "BC-400538",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_17.jpg",
        position: new Vector3(-474.0014, -1051.1471, 53.474),
    },
    {
        id: "espo_18",
        type: "ESPO",
        groupName: "Записки и заметки",
        name: "Сводка происшествий за февраль 2033",
        viewId: "BC-400632",
        date: "10/03/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_18.jpg",
        position: new Vector3(-1112.79, -855.4667, 19.7609),
    },
    {
        id: "espo_19",
        type: "ESPO",
        groupName: "Записки и заметки",
        name: "Шифровка",
        viewId: "BC-400731",
        date: "01/06/2032",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_19.jpg",
        position: new Vector3(1181.356, -402.1147, 68.6805),
    },
    {
        id: "espo_20",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Переписка между ESPO и Страны N. Часть №1",
        viewId: "BC-400831",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_20.jpg",
        position: new Vector3(-938.7692, -3013.72, 20.2416),
    },
    {
        id: "espo_21",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Переписка между ESPO и Страны N. Часть №2",
        viewId: "BC-400832",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_21.jpg",
        position: new Vector3(-1569.4374, -3235.8455, 29.6341),
    },
    {
        id: "espo_22",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Переписка между ESPO и Страны N. Часть №3",
        viewId: "BC-400833",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_22.jpg",
        position: new Vector3(-1079.4785, -2412.4089, 15.3973),
    },
    {
        id: "espo_23",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Внутренняя переписка ESPO №1",
        viewId: "BC-400841",
        date: "06/05/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_23.jpg",
        position: new Vector3(-1267.762, -1915.2761, 5.8584),
    },
    {
        id: "espo_24",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Внутренняя переписка ESPO №2",
        viewId: "BC-400842",
        date: "15/05/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_24.jpg",
        position: new Vector3(-2021.8364, -1035.3108, 6.731),
    },
    {
        id: "espo_25",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Внутренняя переписка ESPO №3",
        viewId: "BC-400843",
        date: "01/06/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_25.jpg",
        position: new Vector3(-3055.0093, 85.8722, 13.6357),
    },
    {
        id: "espo_26",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Внутренняя переписка ESPO №4",
        viewId: "BC-400844",
        date: "22/06/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_26.jpg",
        position: new Vector3(-3424.7712, 982.6158, 8.3467),
    },
    {
        id: "espo_27",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Внутренняя переписка ESPO №5",
        viewId: "BC-400845",
        date: "04/07/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_27.jpg",
        position: new Vector3(-2638.0068, 1869.4952, 160.94),
    },
    {
        id: "espo_28",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Переписка между ESPO и Дзайбацу Х. Часть №1",
        viewId: "BC-400835",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_28.jpg",
        position: new Vector3(-231.7236, -2362.5996, 25.3304),
    },
    {
        id: "espo_29",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Переписка между ESPO и Дзайбацу Х. Часть №2",
        viewId: "BC-400836",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_29.jpg",
        position: new Vector3(533.5607, -2912.5862, 8.4958),
    },
    {
        id: "espo_30",
        type: "ESPO",
        groupName: "Переписки по закрытым каналам",
        name: "Переписка между ESPO и Дзайбацу Х. Часть №3",
        viewId: "BC-400837",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/espo/espo_30.jpg",
        position: new Vector3(839.7266, -2881.012, 19.0013),
    },
    {
        id: "win_ltd_1",
        type: "WIN_LTD",
        groupName: "Досье",
        name: "Досье №184",
        viewId: "ATJ-770184",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_1.jpg",
        position: new Vector3(2311.395, 1972.6635, 131.3305),
    },
    {
        id: "win_ltd_2",
        type: "WIN_LTD",
        groupName: "Досье",
        name: "Досье №251",
        viewId: "ATJ-770251",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_2.jpg",
        position: new Vector3(3536.239, 3662.1106, 29.1181),
    },
    {
        id: "win_ltd_3",
        type: "WIN_LTD",
        groupName: "Досье",
        name: "Досье №258",
        viewId: "ATJ-770258",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_3.jpg",
        position: new Vector3(3850.9585, 4458.6821, 1.8498),
    },
    {
        id: "win_ltd_4",
        type: "WIN_LTD",
        groupName: "Досье",
        name: "Досье №301",
        viewId: "ATJ-770301",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_4.jpg",
        position: new Vector3(3618.2449, 5020.8281, 11.3375),
    },
    {
        id: "win_ltd_5",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Интервью. Август, 2015",
        viewId: "ATJ-770184",
        date: "13/08/2015",
        location: "SY TV-Studio",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_5.jpg",
        position: new Vector3(3430.6787, 5168.1934, 7.3821),
    },
    {
        id: "win_ltd_6",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Статья, май 2018",
        viewId: "ATJ-785003",
        date: "05/05/2018",
        location: "SY-News",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_6.jpg",
        position: new Vector3(2968.2153, 5321.7061, 101.9643),
    },
    {
        id: "win_ltd_7",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Статья, июль 2020",
        viewId: "ATJ-785008",
        date: "22/07/2020",
        location: "Scientific-T",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_7.jpg",
        position: new Vector3(2805.6206, 5980.9375, 350.702),
    },
    {
        id: "win_ltd_8",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Статья, август 2030",
        viewId: "ATJ-785021",
        date: "19/08/2030",
        location: "SY-News",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_8.jpg",
        position: new Vector3(1733.824, 3994.197, 36.251),
    },
    {
        id: "win_ltd_9",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Статья Гран-При, октябрь 2034",
        viewId: "ATJ-785040",
        date: "09/10/2034",
        location: "SY-News",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_9.jpg",
        position: new Vector3(426.6588, 5572.3838, 775.53),
    },
    {
        id: "win_ltd_10",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Статья, декабрь 2034",
        viewId: "ATJ-785033",
        date: "04/12/2034",
        location: "Scientific-T",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_10.jpg",
        position: new Vector3(-579.9333, 5341.2246, 71.5337),
    },
    {
        id: "win_ltd_11",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Статья Спринт, январь 2035",
        viewId: "ATJ-785045",
        date: "10/01/2035",
        location: "SY-News",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_11.jpg",
        position: new Vector3(-1005.0552, 4854.5586, 274.6058),
    },
    {
        id: "win_ltd_12",
        type: "WIN_LTD",
        groupName: "Статьи и заметки СМИ",
        name: "Статья, январь 2035",
        viewId: "ATJ-785058",
        date: "15/01/2035",
        location: "SY-News",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_12.jpg",
        position: new Vector3(-505.7688, 4368.3589, 67.5811),
    },
    {
        id: "win_ltd_13",
        type: "WIN_LTD",
        groupName: "Письма",
        name: "Прошение о приеме на работу, май 2020",
        viewId: "ATJ-787001",
        date: "21/05/2020",
        location: "HR Department of WIN LTD",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_13.jpg",
        position: new Vector3(714.421, 4094.616, 34.7278),
    },
    {
        id: "win_ltd_14",
        type: "WIN_LTD",
        groupName: "Письма",
        name: "Предложение для NWC, февраль 2033",
        viewId: "ATJ-787015",
        date: "01/02/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_14.jpg",
        position: new Vector3(1733.2811, 4770.5098, 42.2046),
    },
    {
        id: "win_ltd_15",
        type: "WIN_LTD",
        groupName: "Письма",
        name: "Электронное письмо от ESPO, июль 2033",
        viewId: "ATJ-787019",
        date: "01/07/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_15.jpg",
        position: new Vector3(1716.0552, 4926.7314, 42.0904),
    },
    {
        id: "win_ltd_16",
        type: "WIN_LTD",
        groupName: "Письма",
        name: "Письмо студента",
        viewId: "ATJ-787019",
        date: "UNKNOWN",
        location: "HR Department of WIN LTD",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_16.jpg",
        position: new Vector3(2884.1985, 4338.4756, 50.4005),
    },
    {
        id: "win_ltd_17",
        type: "WIN_LTD",
        groupName: "Письма",
        name: "Письмо от профи",
        viewId: "ATJ-787022",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_17.jpg",
        position: new Vector3(2887.187, 2496.5696, -100.6597),
    },
    {
        id: "win_ltd_18",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Напоминание сотрудникам, март 2033",
        viewId: "ATJ-788701",
        date: "05/03/2033",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_18.jpg",
        position: new Vector3(2633.73, 2931.9619, 45.6077),
    },
    {
        id: "win_ltd_19",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Внутренняя переписка. Часть №1, август 2034",
        viewId: "ATJ-788721",
        date: "01/08/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_19.jpg",
        position: new Vector3(2764.6958, 3426.272, 56.2277),
    },
    {
        id: "win_ltd_20",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Внутренняя переписка. Часть №2, август 2034",
        viewId: "ATJ-788722",
        date: "01/08/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_20.jpg",
        position: new Vector3(1961.4054, 3251.5613, 46.6657),
    },
    {
        id: "win_ltd_21",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Внутренняя переписка. Часть №3, август 2034",
        viewId: "ATJ-788723",
        date: "18/08/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_21.jpg",
        position: new Vector3(1701.3221, 3289.8838, 49.7255),
    },
    {
        id: "win_ltd_22",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Внутренняя переписка. Часть №4, ноябрь 2034",
        viewId: "ATJ-788724",
        date: "07/11/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_22.jpg",
        position: new Vector3(931.7901, 2869.105, 60.9177),
    },
    {
        id: "win_ltd_23",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Интеграция стартапа. Часть №1, декабрь 2034",
        viewId: "ATJ-788755",
        date: "02/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_23.jpg",
        position: new Vector3(574.9021, 2926.9399, 49.8646),
    },
    {
        id: "win_ltd_24",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Интеграция стартапа. Часть №2, декабрь 2034",
        viewId: "ATJ-788756",
        date: "02/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_24.jpg",
        position: new Vector3(167.4084, 2232.1138, 90.7712),
    },
    {
        id: "win_ltd_25",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Интеграция стартапа. Часть №3, декабрь 2034",
        viewId: "ATJ-788757",
        date: "02/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_25.jpg",
        position: new Vector3(-2187.9546, 4251.4429, 48.94),
    },
    {
        id: "win_ltd_26",
        type: "WIN_LTD",
        groupName: "Переписка",
        name: "Интеграция стартапа. Часть №4, декабрь 2034",
        viewId: "ATJ-788758",
        date: "02/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_26.jpg",
        position: new Vector3(2780.1655, 4965.2505, 29.9936),
    },
    {
        id: "win_ltd_27",
        type: "WIN_LTD",
        groupName: "Отчеты NWC",
        name: "Эдвард Грей. Отчет о Шахте",
        viewId: "ATJ-789009",
        date: "14/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_27.jpg",
        position: new Vector3(2782.6843, 2559.0681, -101.4006),
    },
    {
        id: "win_ltd_28",
        type: "WIN_LTD",
        groupName: "Отчеты NWC",
        name: "Отчет №2-34",
        viewId: "ATJ-788981",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_28.jpg",
        position: new Vector3(3065.0566, 2219.1738, 2.9835),
    },
    {
        id: "win_ltd_29",
        type: "WIN_LTD",
        groupName: "Отчеты NWC",
        name: "Отчет №2-57",
        viewId: "ATJ-788982",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_29.jpg",
        position: new Vector3(3133.7974, -89.4287, 20.4542),
    },
    {
        id: "win_ltd_30",
        type: "WIN_LTD",
        groupName: "Отчеты NWC",
        name: "Отчет №2-76",
        viewId: "ATJ-788983",
        date: "UNKNOWN",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/win_ltd/win_ltd_30.jpg",
        position: new Vector3(-544.8962, -2225.9731, 122.3606),
    },
    {
        id: "winter_protocol_25_1",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Журнал регистратора аномалий (1 часть)",
        viewId: "NHY-025101",
        date: "12/08/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/1.webp",
        position: new Vector3(2354.41, 3142.14, 50.03),
    },
    {
        id: "winter_protocol_25_2",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Работа по заявке №572",
        viewId: "NHY-025102",
        date: "20/12/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/2.webp",
        audio: "lore-fragments/audio/winter_protocol/henry_zayavka.wav",
        position: new Vector3(-1599.11, -870.4, 9.95),
    },
    {
        id: "winter_protocol_25_3",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Журнал регистратора аномалий (2 часть)",
        viewId: "NHY-025103",
        date: "24/12/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/3.webp",
        position: new Vector3(2097.67, 2497.24, 90.8),
    },
    {
        id: "winter_protocol_25_4",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Репортаж о праздничном сбое в карьере GMC",
        viewId: "NHY-025104",
        date: "27/12/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/4.webp",
        position: new Vector3(269.24, 2870.56, 74.17),
    },
    {
        id: "winter_protocol_25_5",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Форум MiXR о встречах с Рождественским глитчем",
        viewId: "NHY-025105",
        date: "28/12/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/5.webp",
        position: new Vector3(-2696.62, 2317.8, 18.52),
    },
    {
        id: "winter_protocol_25_6",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Рождественская открытка",
        viewId: "NHY-025106",
        date: "24/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/6.webp",
        position: new Vector3(-452.01, 6014.61, 36.67),
    },
    {
        id: "winter_protocol_25_7",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Дневник наблюдений за глитчем",
        viewId: "NHY-025107",
        date: "28/12/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/7.webp",
        position: new Vector3(1998.09, 3928.72, 33.14),
    },
    {
        id: "winter_protocol_25_8",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Отчет из Лаборатории Sec",
        viewId: "NHY-025108",
        date: "30/12/2035",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/8.webp",
        position: new Vector3(-1859.37, 2070.89, 141.4),
    },
    {
        id: "winter_protocol_25_9",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Характеристика на Люка Эрмана",
        viewId: "NHY-025109",
        date: "29/11/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/9.webp",
        position: new Vector3(724.1, 1298.04, 361.98),
    },
    {
        id: "winter_protocol_25_10",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Первое совместное дело",
        viewId: "NHY-025110",
        date: "02/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/10.webp",
        position: new Vector3(-1442.26, 5422.06, 22.89),
    },
    {
        id: "winter_protocol_25_11",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Рождество у Эрманов",
        viewId: "NHY-025111",
        date: "24/12/2034",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/11.webp",
        position: new Vector3(3311.74, 5173.98, 23.52),
    },
    {
        id: "winter_protocol_25_12",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Последние мысли 1",
        viewId: "NHY-025112",
        date: "24/12/2035",
        location: "The GMC Mine",
        contentImage: "lore-fragments/images/winter_protocol/12.webp",
        audio: "lore-fragments/audio/winter_protocol/poslednie_mysli_1.wav",
        position: new Vector3(1275.51, -2567.13, 46.29),
    },
    {
        id: "winter_protocol_25_13",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Последние мысли 2",
        viewId: "NHY-025113",
        date: "24/12/2035",
        location: "The GMC Mine",
        contentImage: "lore-fragments/images/winter_protocol/13.webp",
        audio: "lore-fragments/audio/winter_protocol/poslednie_mysli_2.wav",
        position: new Vector3(337.58, -2795.32, 45.41),
    },
    {
        id: "winter_protocol_25_14",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Последние мысли 3",
        viewId: "NHY-025114",
        date: "24/12/2035",
        location: "The GMC Mine",
        contentImage: "lore-fragments/images/winter_protocol/14.webp",
        audio: "lore-fragments/audio/winter_protocol/poslednie_mysli_3.wav",
        position: new Vector3(-341.67, -1853, 26.16),
    },
    {
        id: "winter_protocol_25_15",
        type: "WINTER_PROTOCOL",
        groupName: "Winter Protocol",
        name: "Прощание Генри с Люком",
        viewId: "NHY-025115",
        date: "08/01/2036",
        location: "UNKNOWN",
        contentImage: "lore-fragments/images/winter_protocol/15.webp",
        audio: "lore-fragments/audio/winter_protocol/henry_proschanie.wav",
        position: new Vector3(-1657.5, -124.65, 60.22),
    },
];

// --- НАСТРОЙКИ КАРТЫ (Твои оригинальные) ---
const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;

const CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
    projection: L.Projection.LonLat,
    scale: function(zoom) {
        return Math.pow(2, zoom);
    },
    zoom: function(sc) {
        return Math.log(sc) / 0.6931471805599453;
    },
    distance: function(pos1, pos2) {
        var x_difference = pos2.lng - pos1.lng;
        var y_difference = pos2.lat - pos1.lat;
        return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
    },
    transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
    infinite: true
});

var SateliteStyle = L.tileLayer('mapStyles/styleSatelite/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 8,noWrap: true,continuousWorld: false,id: 'SateliteStyle map'}),
    AtlasStyle  = L.tileLayer('mapStyles/styleAtlas/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,id: 'styleAtlas map'}),
    GridStyle   = L.tileLayer('mapStyles/styleGrid/{z}/{x}/{y}.png', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,id: 'styleGrid map'});


// --- ДИНАМИЧЕСКИЕ СЛОИ КЛАСТЕРОВ ---
const clusterGroups = {
    "WINTER_PROTOCOL": L.markerClusterGroup({ chunkedLoading: true, disableClusteringAtZoom: 5, iconCreateFunction: (c) => createClusterIcon(c, "#FF3D00") }),
    "NWC": L.markerClusterGroup({ chunkedLoading: true, disableClusteringAtZoom: 5, iconCreateFunction: (c) => createClusterIcon(c, "#FFD600") }),
    "ESPO": L.markerClusterGroup({ chunkedLoading: true, disableClusteringAtZoom: 5, iconCreateFunction: (c) => createClusterIcon(c, "#00E5FF") }),
    "WIN_LTD": L.markerClusterGroup({ chunkedLoading: true, disableClusteringAtZoom: 5, iconCreateFunction: (c) => createClusterIcon(c, "#D500F9") }),
    "DEFAULT": L.markerClusterGroup({ chunkedLoading: true, disableClusteringAtZoom: 5, iconCreateFunction: (c) => createClusterIcon(c, "#ECEFF1") })
};

// Функция для красивых иконок кластеров по цветам
function createClusterIcon(cluster, color) {
    return L.divIcon({
        html: `<div style="background: rgba(0,0,0,0.6); border: 2px solid ${color}; color: ${color}; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; backdrop-filter: blur(4px); box-shadow: 0 0 10px ${color}55;">${cluster.getChildCount()}</div>`,
        className: 'custom-cluster-icon',
        iconSize: [40, 40]
    });
}

// Инициализация карты
var mymap = L.map('map', {
    crs: CUSTOM_CRS,
    minZoom: 1,
    maxZoom: 5,
    zoom: 3,
    maxNativeZoom: 5,
    preferCanvas: true,
    layers: [SateliteStyle, ...Object.values(clusterGroups)], 
    center: [0, 0]
});

// Красивые имена для фильтров
const categoryLabels = {
    "WINTER_PROTOCOL": `<span class="layer-dot" style="background:#FF3D00"></span> Winter Protocol`,
    "NWC": `<span class="layer-dot" style="background:#FFD600"></span> NWC Artifacts`,
    "ESPO": `<span class="layer-dot" style="background:#00E5FF"></span> ESPO Documents`,
    "WIN_LTD": `<span class="layer-dot" style="background:#D500F9"></span> WIN LTD Files`,
    "DEFAULT": `<span class="layer-dot" style="background:#ECEFF1"></span> Others`
};

// Собираем список слоев для управления
const overlayMaps = {};
Object.keys(clusterGroups).forEach(type => {
    overlayMaps[categoryLabels[type] || categoryLabels["DEFAULT"]] = clusterGroups[type];
});

// Добавляем контроллер слоев (переключатель в углу)
var layersControl = L.control.layers({ 
    "🛰️ Satelite": SateliteStyle,
    "🗺️ Atlas": AtlasStyle,
    "🏁 Grid": GridStyle
}, overlayMaps, { collapsed: false }).addTo(mymap);

// Определяем базовый URL
const BASE_URL = "https://cdn.bazerp.com/";

// Функция для создания премиальных SVG-блипов
function getCustomIcon(type) {
    const config = {
        "WINTER_PROTOCOL": { color: "#FF3D00", secondary: "#FF9100", shape: "hexagon" },
        "NWC": { color: "#FFD600", secondary: "#FFAB00", shape: "circle" },
        "ESPO": { color: "#00E5FF", secondary: "#00B8D4", shape: "rhombus" },
        "WIN_LTD": { color: "#D500F9", secondary: "#AA00FF", shape: "circle" },
        "DEFAULT": { color: "#ECEFF1", secondary: "#CFD8DC", shape: "circle" }
    };

    const style = config[type] || config["DEFAULT"];
    
    let pathData = "";
    if (style.shape === "hexagon") {
        pathData = "M12 2l9 5v10l-9 5-9-5V7l9-5z";
    } else if (style.shape === "rhombus") {
        pathData = "M12 2l10 10-10 10-10-10L12 2z";
    } else {
        pathData = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z";
    }

    const svg = `
        <svg width="40" height="40" viewBox="0 0 24 24" style="filter: drop-shadow(0 0 4px ${style.color});">
            <defs>
                <linearGradient id="grad-${type}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${style.secondary};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${style.color};stop-opacity:1" />
                </linearGradient>
            </defs>
            <path fill="url(#grad-${type})" stroke="white" stroke-width="1.5" d="${pathData}"/>
            <circle cx="12" cy="12" r="3" fill="white" opacity="0.8">
                <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
            </circle>
        </svg>`;

    return L.divIcon({
        html: svg,
        className: 'premium-div-icon',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
}

// --- ОТРИСОВКА СОКРОВИЩ ---
yH.forEach(item => {
    // В Leaflet [Y, X]
    const lat = item.position._y;
    const lng = item.position._x;

    // Автоматически добавляем BASE_URL к путям, если они еще не содержат http/https
    const imageUrl = item.contentImage.startsWith('http') ? item.contentImage : BASE_URL + item.contentImage;
    const audioUrl = item.audio ? (item.audio.startsWith('http') ? item.audio : BASE_URL + item.audio) : null;

    // Устанавливаем иконку
    const marker = L.marker([lat, lng], { icon: getCustomIcon(item.type) });

    // Контент всплывающего окна
    let popupContent = `
        <div style="min-width:250px; font-family: sans-serif;">
            <b style="font-size:14px; color:#d35400;">${item.name}</b><br>
            <small>${item.groupName} | ${item.viewId}</small>
            <hr style="border:0; border-top:1px solid #eee; margin:8px 0;">
            <img src="${imageUrl}" style="width:100%; border-radius:4px;">
    `;

    if (audioUrl) {
        popupContent += `<audio controls style="width:100%; height:30px; margin-top:8px;"><source src="${audioUrl}" type="audio/wav"></audio>`;
    }

    popupContent += `
            <div style="margin-top: 10px; font-size: 11px; color: #555;">
                <b>Дата:</b> ${item.date}<br>
                <b>Место:</b> ${item.location}
            </div>
        </div>
    `;

    // Привязываем попап и добавляем в соответствующий кластер
    marker.bindPopup(popupContent);
    const targetCluster = clusterGroups[item.type] || clusterGroups["DEFAULT"];
    targetCluster.addLayer(marker);
});


// --- ТВОЙ UI КОД ---
mymap.on('mousemove', function(e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    var coordsDiv = document.getElementById('mouse-coordinates');
    if (coordsDiv) {
        coordsDiv.innerText = 'Lat: ' + lat.toFixed(2) + ', Lng: ' + lng.toFixed(2);
    }
});

function updateBackgroundColor(layerId) {
    const mapContainer = document.getElementById('map');
    const layerColors = {
        "SateliteStyle map": "#153E6A",
        "styleAtlas map": "#0FA8D2",  
        "styleGrid map": "#8F8F8F"      
    };
    mapContainer.style.backgroundColor = layerColors[layerId] || "#000000";
}

mymap.on('baselayerchange', function (event) {
    updateBackgroundColor(event.layer.options.id);
});

updateBackgroundColor(SateliteStyle.options.id);