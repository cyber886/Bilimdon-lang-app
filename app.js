// Data Structure mimicking the Android app
const lessonsData = [
    { id: 1, title: "1 - Dars. Fe'lning asosiy shakli.", icon: "📚" },
    { id: 2, title: "2 - Dars. So'roq so'zlar.", icon: "❓" },
    { id: 3, title: "3 - Dars. Olmoshlar.", icon: "👥" },
    { id: 4, title: "4 - Dars. to be fe'li.", icon: "⭐" },
    { id: 5, title: "5 - Dars. Egalik olmoshlari.", icon: "🔑" },
    { id: 6, title: "6 - Dars. Turli kasblar.", icon: "👨‍🏫" },
    { id: 7, title: "7 - Dars. Sifat darajalari.", icon: "📈" },
    { id: 8, title: "8 - Dars. Ko'rsatkich so'zlar.", icon: "👉" },
    { id: 9, title: "9 - Dars. Old ko'makchilar va vaqt.", icon: "⏱️" },
    { id: 12, title: "12 - Dars. Yo'nalish va harakatlanish.", icon: "🏃" },
    { id: 13, title: "13 - Dars. Modal fe'llar.", icon: "🔮" },
    { id: 14, title: "14 - Dars. Continuous.", icon: "🔄" },
    { id: 15, title: "15 - Dars. Present Perfect.", icon: "✨" },
    { id: 16, title: "16 - Dars. Buyruq-istak mayli.", icon: "⚡" }
];

const subLessons = [
    { type: 'vocab', title: "Darsdagi so'zlar lug'ati", icon: "📖" },
    { type: 'en_uz', title: "Inglizcha-O'zbekcha lug'at mashqlari", icon: "🇬🇧" },
    { type: 'uz_en', title: "O'zbekcha-Inglizcha lug'at mashqlari", icon: "🇺🇿" },
    { type: 'sentence', title: "Matn bilan mashqlar", icon: "✍️" },
];

// Sample Exercises for Lesson 14
const sentenceExercises = [
    {
        uz: "Shomil kecha 6 dan 9 gacha rivoyatlar aytib berayotgan edi.",
        enWords: ["Shomil", "was", "telling", "stories", "from", "six", "to", "nine", "yesterday", "the", "were", "told"],
        correctOrder: ["Shomil", "was", "telling", "stories", "from", "six", "to", "nine", "yesterday"]
    },
    {
        uz: "Ular futbol o'ynayotgan edilar.",
        enWords: ["They", "were", "playing", "football", "was", "played", "the", "soccer"],
        correctOrder: ["They", "were", "playing", "football"]
    }
];

// Per-lesson vocabulary data (50+ words each)
const lessonVocab = {
    1: [ // Fe'lning asosiy shakli
        { uz: "bormoq", en: "go" }, { uz: "kelmoq", en: "come" }, { uz: "ko'rmoq", en: "see" },
        { uz: "eshitmoq", en: "hear" }, { uz: "o'qimoq", en: "read" }, { uz: "yozmoq", en: "write" },
        { uz: "yemoq", en: "eat" }, { uz: "ichmoq", en: "drink" }, { uz: "uxlamoq", en: "sleep" },
        { uz: "o'tirmoq", en: "sit" }, { uz: "turmoq", en: "stand" }, { uz: "yugurmoq", en: "run" },
        { uz: "yurimoq", en: "walk" }, { uz: "gapirmoq", en: "speak" }, { uz: "so'ramoq", en: "ask" },
        { uz: "javob bermoq", en: "answer" }, { uz: "o'rganmoq", en: "learn" }, { uz: "o'rgatmoq", en: "teach" },
        { uz: "yoqtirmoq", en: "like" }, { uz: "sevmoq", en: "love" }, { uz: "bilmoq", en: "know" },
        { uz: "tushunmoq", en: "understand" }, { uz: "o'ylash", en: "think" }, { uz: "ko'rsatmoq", en: "show" },
        { uz: "sotib olmoq", en: "buy" }, { uz: "sotmoq", en: "sell" }, { uz: "ochmoq", en: "open" },
        { uz: "yopmoq", en: "close" }, { uz: "bermoq", en: "give" }, { uz: "olmoq", en: "take" },
        { uz: "qo'ymoq", en: "put" }, { uz: "topmoq", en: "find" }, { uz: "yo'qotmoq", en: "lose" },
        { uz: "boshlash", en: "start" }, { uz: "tugatmoq", en: "finish" }, { uz: "qaytmoq", en: "return" },
        { uz: "kirmoq", en: "enter" }, { uz: "chiqmoq", en: "exit" }, { uz: "to'xtatmoq", en: "stop" },
        { uz: "davom ettirmoq", en: "continue" }, { uz: "o'zgarmoq", en: "change" }, { uz: "kiymoq", en: "wear" },
        { uz: "yechmoq", en: "take off" }, { uz: "ishlash", en: "work" }, { uz: "o'ynamoq", en: "play" },
        { uz: "qilmoq", en: "do" }, { uz: "bo'lmoq", en: "be" }, { uz: "ko'tarilmoq", en: "rise" },
        { uz: "tushmoq", en: "fall" }, { uz: "kutmoq", en: "wait" }, { uz: "sog'inmoq", en: "miss" },
        { uz: "tayyorlamoq", en: "prepare" }, { uz: "ko'chirib yozmoq", en: "copy" }
    ],
    2: [ // So'roq so'zlar
        { uz: "kim", en: "who" }, { uz: "nima", en: "what" }, { uz: "qayer", en: "where" },
        { uz: "qachon", en: "when" }, { uz: "nima uchun", en: "why" }, { uz: "qanday", en: "how" },
        { uz: "qaysi", en: "which" }, { uz: "qancha", en: "how much" }, { uz: "nechta", en: "how many" },
        { uz: "kimning", en: "whose" }, { uz: "qanday qilib", en: "how to" }, { uz: "haqiqatanmi", en: "really" },
        { uz: "haqiqiy", en: "true" }, { uz: "yolg'on", en: "false" }, { uz: "albatta", en: "of course" },
        { uz: "balki", en: "maybe" }, { uz: "ehtimol", en: "perhaps" }, { uz: "darhaqiqat", en: "indeed" },
        { uz: "so'ramoq", en: "ask" }, { uz: "javob bermoq", en: "answer" }, { uz: "tushuntirmoq", en: "explain" },
        { uz: "ayting", en: "tell" }, { uz: "bilmoq", en: "know" }, { uz: "fikr", en: "opinion" },
        { uz: "ma'lumot", en: "information" }, { uz: "savol", en: "question" }, { uz: "muammo", en: "problem" },
        { uz: "yechim", en: "solution" }, { uz: "sabab", en: "reason" }, { uz: "maqsad", en: "purpose" },
        { uz: "natija", en: "result" }, { uz: "ta'sir", en: "effect" }, { uz: "misol", en: "example" },
        { uz: "farq", en: "difference" }, { uz: "o'xshashlik", en: "similarity" }, { uz: "ma'no", en: "meaning" },
        { uz: "til", en: "language" }, { uz: "tarjima", en: "translation" }, { uz: "so'z", en: "word" },
        { uz: "gap", en: "sentence" }, { uz: "matn", en: "text" }, { uz: "kitob", en: "book" },
        { uz: "lug'at", en: "dictionary" }, { uz: "darslik", en: "textbook" }, { uz: "mashq", en: "exercise" },
        { uz: "imtihon", en: "exam" }, { uz: "test", en: "test" }, { uz: "ball", en: "score" },
        { uz: "baholash", en: "evaluate" }, { uz: "o'rganmoq", en: "learn" }, { uz: "takrorlash", en: "review" }
    ],
    3: [ // Olmoshlar
        { uz: "men", en: "I" }, { uz: "sen", en: "you" }, { uz: "u (erkak)", en: "he" },
        { uz: "u (ayol)", en: "she" }, { uz: "u (narsa)", en: "it" }, { uz: "biz", en: "we" },
        { uz: "siz", en: "you (plural)" }, { uz: "ular", en: "they" }, { uz: "meni", en: "me" },
        { uz: "seni", en: "you (object)" }, { uz: "uni", en: "him/her" }, { uz: "bizni", en: "us" },
        { uz: "ularni", en: "them" }, { uz: "menga", en: "me (dative)" }, { uz: "senga", en: "to you" },
        { uz: "unga", en: "to him/her" }, { uz: "bizga", en: "to us" }, { uz: "ularga", en: "to them" },
        { uz: "mening", en: "my" }, { uz: "sening", en: "your" }, { uz: "uning", en: "his/her" },
        { uz: "bizning", en: "our" }, { uz: "sizning", en: "your (formal)" }, { uz: "ularning", en: "their" },
        { uz: "o'zim", en: "myself" }, { uz: "o'zing", en: "yourself" }, { uz: "o'zi", en: "himself/herself" },
        { uz: "o'zimiz", en: "ourselves" }, { uz: "o'zingiz", en: "yourselves" }, { uz: "o'zlari", en: "themselves" },
        { uz: "kim", en: "who" }, { uz: "nima", en: "what" }, { uz: "kimdir", en: "someone" },
        { uz: "nimadir", en: "something" }, { uz: "hech kim", en: "nobody" }, { uz: "hech nima", en: "nothing" },
        { uz: "hamma", en: "everyone" }, { uz: "hammasi", en: "everything" }, { uz: "har kim", en: "everyone" },
        { uz: "har nima", en: "everything" }, { uz: "ba'zi", en: "some" }, { uz: "boshqa", en: "other" },
        { uz: "bu", en: "this" }, { uz: "o'sha", en: "that" }, { uz: "shular", en: "these" },
        { uz: "o'shalar", en: "those" }, { uz: "bir-biri", en: "each other" }, { uz: "qaysi", en: "which" },
        { uz: "qaysidir", en: "whichever" }, { uz: "har qaysi", en: "each" }, { uz: "hammasini", en: "all of them" }
    ],
    4: [ // to be fe'li
        { uz: "men ... man", en: "I am" }, { uz: "sen ...san", en: "you are" }, { uz: "u ...dir", en: "he/she is" },
        { uz: "biz ...miz", en: "we are" }, { uz: "ular ...lar", en: "they are" }, { uz: "edim", en: "was (I)" },
        { uz: "eding", en: "were (you)" }, { uz: "edi", en: "was/were" }, { uz: "o'qituvchi", en: "teacher" },
        { uz: "talaba", en: "student" }, { uz: "shifokor", en: "doctor" }, { uz: "muhandis", en: "engineer" },
        { uz: "baxtli", en: "happy" }, { uz: "g'amgin", en: "sad" }, { uz: "charchagan", en: "tired" },
        { uz: "band", en: "busy" }, { uz: "bo'sh", en: "free" }, { uz: "tayyor", en: "ready" },
        { uz: "kasal", en: "sick" }, { uz: "sog'lom", en: "healthy" }, { uz: "yosh", en: "young" },
        { uz: "katta yoshli", en: "old" }, { uz: "kuchli", en: "strong" }, { uz: "zaif", en: "weak" },
        { uz: "aqlli", en: "smart" }, { uz: "ahmoq", en: "foolish" }, { uz: "mehribon", en: "kind" },
        { uz: "yoqimli", en: "pleasant" }, { uz: "qo'polroq", en: "rude" }, { uz: "kamtarin", en: "humble" },
        { uz: "mag'rur", en: "proud" }, { uz: "muvaffaqiyatli", en: "successful" }, { uz: "mashhur", en: "famous" },
        { uz: "oddiy", en: "ordinary" }, { uz: "maxsus", en: "special" }, { uz: "muhim", en: "important" },
        { uz: "zarur", en: "necessary" }, { uz: "qiziqarli", en: "interesting" }, { uz: "zerikarli", en: "boring" },
        { uz: "hayratlanarli", en: "amazing" }, { uz: "ajoyib", en: "wonderful" }, { uz: "dahshatli", en: "terrible" },
        { uz: "og'ir", en: "heavy" }, { uz: "yengil", en: "light" }, { uz: "kerakli", en: "needed" },
        { uz: "ortiqcha", en: "extra" }, { uz: "asosiy", en: "main" }, { uz: "qo'shimcha", en: "additional" },
        { uz: "to'la", en: "full" }, { uz: "bo'sh (idish)", en: "empty" }, { uz: "yangi", en: "new" }
    ],
    5: [ // Egalik olmoshlari
        { uz: "mening kitobim", en: "my book" }, { uz: "sening uyingizda", en: "your house" },
        { uz: "uning mashinasi", en: "his/her car" }, { uz: "bizning oilamiz", en: "our family" },
        { uz: "ularning do'stlari", en: "their friends" }, { uz: "meniki", en: "mine" },
        { uz: "seniki", en: "yours" }, { uz: "uniki", en: "his/hers" }, { uz: "bizniki", en: "ours" },
        { uz: "ularniki", en: "theirs" }, { uz: "ota", en: "father" }, { uz: "ona", en: "mother" },
        { uz: "aka", en: "elder brother" }, { uz: "uka", en: "younger brother" }, { uz: "opa", en: "elder sister" },
        { uz: "singil", en: "younger sister" }, { uz: "bobo", en: "grandfather" }, { uz: "buvi", en: "grandmother" },
        { uz: "amaki", en: "uncle" }, { uz: "xola", en: "aunt" }, { uz: "nevara", en: "grandchild" },
        { uz: "o'g'il", en: "son" }, { uz: "qiz", en: "daughter" }, { uz: "er", en: "husband" },
        { uz: "xotin", en: "wife" }, { uz: "turmush o'rtog'i", en: "spouse" }, { uz: "qarindosh", en: "relative" },
        { uz: "tanish", en: "acquaintance" }, { uz: "qo'shni", en: "neighbor" }, { uz: "hamkasb", en: "colleague" },
        { uz: "sinfdosh", en: "classmate" }, { uz: "do'st", en: "friend" }, { uz: "yaqin do'st", en: "close friend" },
        { uz: "eng yaxshi do'st", en: "best friend" }, { uz: "uy", en: "home" }, { uz: "xona", en: "room" },
        { uz: "oshxona", en: "kitchen" }, { uz: "yotoqxona", en: "bedroom" }, { uz: "mehmonxona", en: "living room" },
        { uz: "hammom", en: "bathroom" }, { uz: "hovli", en: "yard" }, { uz: "bog'", en: "garden" },
        { uz: "maktab", en: "school" }, { uz: "kasb", en: "profession" }, { uz: "ish joyi", en: "workplace" },
        { uz: "yil", en: "year" }, { uz: "oy", en: "month" }, { uz: "kun", en: "day" },
        { uz: "sana", en: "date" }, { uz: "tug'ilgan kun", en: "birthday" }, { uz: "yodgorlik", en: "anniversary" }
    ],
    6: [ // Turli kasblar
        { uz: "o'qituvchi", en: "teacher" }, { uz: "shifokor", en: "doctor" }, { uz: "muhandis", en: "engineer" },
        { uz: "oshpaz", en: "cook/chef" }, { uz: "haydovchi", en: "driver" }, { uz: "pilot", en: "pilot" },
        { uz: "hamshira", en: "nurse" }, { uz: "advokat", en: "lawyer" }, { uz: "sud'ya", en: "judge" },
        { uz: "politsiyachi", en: "police officer" }, { uz: "harbiy", en: "soldier" }, { uz: "me'mor", en: "architect" },
        { uz: "rassom", en: "artist/painter" }, { uz: "musiqachi", en: "musician" }, { uz: "aktyor", en: "actor" },
        { uz: "yozuvchi", en: "writer" }, { uz: "jurnalist", en: "journalist" }, { uz: "fotograf", en: "photographer" },
        { uz: "programmist", en: "programmer" }, { uz: "dizayner", en: "designer" }, { uz: "hisobchi", en: "accountant" },
        { uz: "iqtisodchi", en: "economist" }, { uz: "psixolog", en: "psychologist" }, { uz: "biolog", en: "biologist" },
        { uz: "kimyogar", en: "chemist" }, { uz: "fizik", en: "physicist" }, { uz: "matematikchi", en: "mathematician" },
        { uz: "tarixchi", en: "historian" }, { uz: "diplomat", en: "diplomat" }, { uz: "siyosatchi", en: "politician" },
        { uz: "tadbirkor", en: "entrepreneur" }, { uz: "menejer", en: "manager" }, { uz: "sotuvchi", en: "salesperson" },
        { uz: "kassir", en: "cashier" }, { uz: "xavfsizlik xodimi", en: "security guard" }, { uz: "quruvchi", en: "builder" },
        { uz: "elektrik", en: "electrician" }, { uz: "santexnik", en: "plumber" }, { uz: "bog'bon", en: "gardener" },
        { uz: "chorvador", en: "farmer" }, { uz: "baliqchi", en: "fisherman" }, { uz: "ovchi", en: "hunter" },
        { uz: "tabib", en: "herbalist" }, { uz: "veterinar", en: "veterinarian" }, { uz: "farmatsevt", en: "pharmacist" },
        { uz: "stomatolog", en: "dentist" }, { uz: "jarroh", en: "surgeon" }, { uz: "professor", en: "professor" },
        { uz: "rektor", en: "rector" }, { uz: "direktor", en: "director" }, { uz: "kotib", en: "secretary" }
    ],
    7: [ // Sifat darajalari
        { uz: "katta", en: "big" }, { uz: "kattaroq", en: "bigger" }, { uz: "eng katta", en: "biggest" },
        { uz: "kichik", en: "small" }, { uz: "kichikroq", en: "smaller" }, { uz: "eng kichik", en: "smallest" },
        { uz: "baland", en: "tall" }, { uz: "balandroq", en: "taller" }, { uz: "eng baland", en: "tallest" },
        { uz: "past", en: "short" }, { uz: "pastroq", en: "shorter" }, { uz: "eng past", en: "shortest" },
        { uz: "tez", en: "fast" }, { uz: "tezroq", en: "faster" }, { uz: "eng tez", en: "fastest" },
        { uz: "sekin", en: "slow" }, { uz: "sekinroq", en: "slower" }, { uz: "eng sekin", en: "slowest" },
        { uz: "yaxshi", en: "good" }, { uz: "yaxshiroq", en: "better" }, { uz: "eng yaxshi", en: "best" },
        { uz: "yomon", en: "bad" }, { uz: "yomonroq", en: "worse" }, { uz: "eng yomon", en: "worst" },
        { uz: "ko'p", en: "many/much" }, { uz: "ko'proq", en: "more" }, { uz: "eng ko'p", en: "most" },
        { uz: "oz", en: "few/little" }, { uz: "ozroq", en: "fewer/less" }, { uz: "eng oz", en: "fewest/least" },
        { uz: "uzoq", en: "far" }, { uz: "uzoqroq", en: "farther" }, { uz: "eng uzoq", en: "farthest" },
        { uz: "yaqin", en: "near" }, { uz: "yaqinroq", en: "nearer" }, { uz: "eng yaqin", en: "nearest" },
        { uz: "og'ir", en: "heavy" }, { uz: "og'irroq", en: "heavier" }, { uz: "eng og'ir", en: "heaviest" },
        { uz: "yengil", en: "light" }, { uz: "yengilroq", en: "lighter" }, { uz: "eng yengil", en: "lightest" },
        { uz: "issiq", en: "hot" }, { uz: "issiqroq", en: "hotter" }, { uz: "eng issiq", en: "hottest" },
        { uz: "sovuq", en: "cold" }, { uz: "sovuqroq", en: "colder" }, { uz: "eng sovuq", en: "coldest" }
    ],
    8: [ // Ko'rsatkich so'zlar
        { uz: "bu", en: "this" }, { uz: "o'sha", en: "that" }, { uz: "bular", en: "these" },
        { uz: "o'shalar", en: "those" }, { uz: "bu yerda", en: "here" }, { uz: "u yerda", en: "there" },
        { uz: "shu", en: "this (emphatic)" }, { uz: "ana", en: "there (pointing)" }, { uz: "mana", en: "here (presenting)" },
        { uz: "stoл", en: "table" }, { uz: "stul", en: "chair" }, { uz: "devor", en: "wall" },
        { uz: "eshik", en: "door" }, { uz: "deraza", en: "window" }, { uz: "pol", en: "floor" },
        { uz: "shift", en: "ceiling" }, { uz: "xona", en: "room" }, { uz: "bino", en: "building" },
        { uz: "ko'cha", en: "street" }, { uz: "bozor", en: "market" }, { uz: "do'kon", en: "shop" },
        { uz: "restoran", en: "restaurant" }, { uz: "kafе", en: "cafe" }, { uz: "bank", en: "bank" },
        { uz: "kasalxona", en: "hospital" }, { uz: "maktab", en: "school" }, { uz: "universitet", en: "university" },
        { uz: "kutubxona", en: "library" }, { uz: "muzey", en: "museum" }, { uz: "park", en: "park" },
        { uz: "bog'", en: "garden" }, { uz: "maydon", en: "square/field" }, { uz: "bekat", en: "bus stop" },
        { uz: "aeroport", en: "airport" }, { uz: "temir yo'l stansiyasi", en: "train station" }, { uz: "port", en: "port" },
        { uz: "yo'l", en: "road" }, { uz: "ko'prik", en: "bridge" }, { uz: "tunnel", en: "tunnel" },
        { uz: "chorraha", en: "crossroads" }, { uz: "svetofor", en: "traffic light" }, { uz: "belgi", en: "sign" },
        { uz: "o'ng", en: "right" }, { uz: "chap", en: "left" }, { uz: "to'g'ri", en: "straight" },
        { uz: "orqaga", en: "back" }, { uz: "old", en: "front" }, { uz: "yuqori", en: "up" },
        { uz: "pastga", en: "down" }, { uz: "ichida", en: "inside" }, { uz: "tashqarida", en: "outside" }
    ],
    9: [ // Old ko'makchilar va vaqt
        { uz: "soat", en: "hour/clock" }, { uz: "daqiqa", en: "minute" }, { uz: "soniya", en: "second" },
        { uz: "kun", en: "day" }, { uz: "hafta", en: "week" }, { uz: "oy", en: "month" },
        { uz: "yil", en: "year" }, { uz: "asr", en: "century" }, { uz: "hozir", en: "now" },
        { uz: "kecha", en: "yesterday" }, { uz: "bugun", en: "today" }, { uz: "ertaga", en: "tomorrow" },
        { uz: "o'tgan hafta", en: "last week" }, { uz: "keyingi hafta", en: "next week" }, { uz: "bir oz oldin", en: "a while ago" },
        { uz: "tez orada", en: "soon" }, { uz: "doim", en: "always" }, { uz: "tez-tez", en: "often" },
        { uz: "ba'zan", en: "sometimes" }, { uz: "kamdan-kam", en: "rarely" }, { uz: "hech qachon", en: "never" },
        { uz: "har kuni", en: "every day" }, { uz: "har hafta", en: "every week" }, { uz: "har oy", en: "every month" },
        { uz: "ertalab", en: "in the morning" }, { uz: "tushdan keyin", en: "in the afternoon" }, { uz: "kechqurun", en: "in the evening" },
        { uz: "tunda", en: "at night" }, { uz: "da (vaqt)", en: "at (time)" }, { uz: "dan (vaqt)", en: "from (time)" },
        { uz: "gacha (vaqt)", en: "until (time)" }, { uz: "ichida", en: "within" }, { uz: "davomida", en: "during" },
        { uz: "oldin", en: "before" }, { uz: "keyin", en: "after" }, { uz: "paytida", en: "while/when" },
        { uz: "beri", en: "since" }, { uz: "uchun (vaqt)", en: "for (duration)" }, { uz: "biroz", en: "for a while" },
        { uz: "uzoq vaqt", en: "for a long time" }, { uz: "lahzada", en: "in a moment" }, { uz: "darhol", en: "immediately" },
        { uz: "asta-sekin", en: "gradually" }, { uz: "nihoyat", en: "finally" }, { uz: "avval", en: "first" },
        { uz: "keyin", en: "then" }, { uz: "oxirida", en: "at the end" }, { uz: "boshida", en: "at the beginning" },
        { uz: "o'rtasida", en: "in the middle" }, { uz: "vaqti-vaqtida", en: "from time to time" },
        { uz: "aniq vaqtda", en: "on time" }, { uz: "kech qolgan holda", en: "late" }
    ],
    12: [ // Yo'nalish va harakatlanish
        { uz: "yurimoq", en: "walk" }, { uz: "yugurmoq", en: "run" }, { uz: "uchmoq", en: "fly" },
        { uz: "suzmoq", en: "swim" }, { uz: "sürüş qilmoq", en: "drive" }, { uz: "minmoq", en: "ride" },
        { uz: "chiqmoq", en: "go up/exit" }, { uz: "tushmoq", en: "go down" }, { uz: "o'tmoq", en: "pass" },
        { uz: "kirmoq", en: "enter" }, { uz: "qaytmoq", en: "return" }, { uz: "ketmoq", en: "leave" },
        { uz: "bormoq", en: "go" }, { uz: "kelmoq", en: "come" }, { uz: "ko'chmoq", en: "move" },
        { uz: "o'tkazmoq", en: "transfer" }, { uz: "yibyrmoq", en: "send" }, { uz: "olib kelmoq", en: "bring" },
        { uz: "olib ketmoq", en: "take away" }, { uz: "ergashmoq", en: "follow" }, { uz: "to'xtamoq", en: "stop" },
        { uz: "o'ng tomonga", en: "to the right" }, { uz: "chap tomonga", en: "to the left" }, { uz: "to'g'ri", en: "straight ahead" },
        { uz: "ortga", en: "backwards" }, { uz: "oldinga", en: "forward" }, { uz: "yuqoriga", en: "upward" },
        { uz: "pastga", en: "downward" }, { uz: "shimol", en: "north" }, { uz: "janub", en: "south" },
        { uz: "sharq", en: "east" }, { uz: "g'arb", en: "west" }, { uz: "marshrut", en: "route" },
        { uz: "yo'nalish", en: "direction" }, { uz: "masofa", en: "distance" }, { uz: "manzil", en: "destination/address" },
        { uz: "qaerda", en: "where (location)" }, { uz: "qaerga", en: "where (direction)" }, { uz: "qaerdan", en: "from where" },
        { uz: "orqasida", en: "behind" }, { uz: "oldida", en: "in front of" }, { uz: "yonida", en: "next to" },
        { uz: "ustida", en: "on top of" }, { uz: "ostida", en: "under" }, { uz: "orasida", en: "between" },
        { uz: "atrofida", en: "around" }, { uz: "ichida", en: "inside" }, { uz: "tashqarisida", en: "outside" },
        { uz: "yaqinida", en: "near" }, { uz: "uzoqda", en: "far away" }, { uz: "qarama-qarshi", en: "opposite" }
    ],
    13: [ // Modal fe'llar
        { uz: "mumkin", en: "can/may" }, { uz: "kerak", en: "must/need to" }, { uz: "lozim", en: "should" },
        { uz: "shart", en: "have to" }, { uz: "qila olmoq", en: "be able to" }, { uz: "ruxsat etilgan", en: "allowed" },
        { uz: "taqiqlangan", en: "forbidden" }, { uz: "majbur", en: "obliged" }, { uz: "ixtiyoriy", en: "optional" },
        { uz: "can", en: "qila olmoq" }, { uz: "could", en: "qila olar edi" }, { uz: "may", en: "mumkin (ehtimol)" },
        { uz: "might", en: "ehtimol" }, { uz: "must", en: "kerak (majburiy)" }, { uz: "shall", en: "bo'ladi (va'da)" },
        { uz: "should", en: "kerak (maslahat)" }, { uz: "would", en: "bo'lardi" }, { uz: "will", en: "bo'ladi (kelajak)" },
        { uz: "ought to", en: "kerak (axloqiy)" }, { uz: "need to", en: "zarur" }, { uz: "had better", en: "yaxshisi" },
        { uz: "dare", en: "jur'at etmoq" }, { uz: "used to", en: "odatlangan edi" }, { uz: "be able to", en: "qila olmoq" },
        { uz: "have to", en: "majburiyman" }, { uz: "be allowed to", en: "ruxsat berilgan" },
        { uz: "imkoniyat", en: "ability" }, { uz: "ruxsat", en: "permission" }, { uz: "imkon", en: "possibility" },
        { uz: "zarurlik", en: "necessity" }, { uz: "o'tinch", en: "request" }, { uz: "taklif", en: "offer" },
        { uz: "maslahat", en: "advice" }, { uz: "buyruq", en: "order/command" }, { uz: "ta'qiq", en: "prohibition" },
        { uz: "majburiyat", en: "obligation" }, { uz: "istak", en: "wish" }, { uz: "umid", en: "hope" },
        { uz: "ehtimollik", en: "probability" }, { uz: "qat'iy", en: "definitely" }, { uz: "shubhali", en: "doubtful" },
        { uz: "qila olaman", en: "I can do" }, { uz: "qila olmayman", en: "I cannot do" },
        { uz: "qilishim kerak", en: "I must do" }, { uz: "qilishim shart emas", en: "I don't have to" },
        { uz: "qilsam bo'ladi", en: "I may do" }, { uz: "qilmasam ham bo'ladi", en: "I don't need to" },
        { uz: "qilishim lozim", en: "I should do" }, { uz: "qilmasligim kerak", en: "I shouldn't do" }
    ],
    14: [ // Continuous
        { uz: "hozir", en: "now" }, { uz: "ayni damda", en: "at this moment" }, { uz: "shu paytda", en: "at this time" },
        { uz: "kecha shu vaqtda", en: "at this time yesterday" }, { uz: "doim", en: "always" }, { uz: "tez-tez", en: "often" },
        { uz: "davom etmoq", en: "continue" }, { uz: "bajarmoq", en: "perform" }, { uz: "gapirmoq", en: "talk" },
        { uz: "eshitmoq", en: "listen" }, { uz: "tomosha qilmoq", en: "watch" }, { uz: "o'qimoq", en: "read" },
        { uz: "yozmoq", en: "write" }, { uz: "ishlash", en: "work" }, { uz: "o'rganmoq", en: "study" },
        { uz: "pishirmoq", en: "cook" }, { uz: "yemoq", en: "eat" }, { uz: "ichmoq", en: "drink" },
        { uz: "sayohat qilmoq", en: "travel" }, { uz: "dam olmoq", en: "rest" }, { uz: "vaqt o'tkazmoq", en: "spend time" },
        { uz: "to'plamоq", en: "collect" }, { uz: "qurmoq", en: "build" }, { uz: "loyiha", en: "project" },
        { uz: "topshiriq", en: "assignment" }, { uz: "muloqot", en: "communication" }, { uz: "murojaat", en: "address" },
        { uz: "fikrlash", en: "thinking" }, { uz: "kutmoq", en: "waiting" }, { uz: "tinglash", en: "listening" },
        { uz: "harakat", en: "action/movement" }, { uz: "jarayon", en: "process" }, { uz: "davom", en: "continuation" },
        { uz: "qo'yib bermoq", en: "let go" }, { uz: "ushlab turmoq", en: "hold" }, { uz: "ko'tarib turmoq", en: "carry" },
        { uz: "yugurmoq", en: "run" }, { uz: "sakramoq", en: "jump" }, { uz: "siljish", en: "moving" },
        { uz: "aylanmoq", en: "turn/rotate" }, { uz: "tortmoq", en: "pull" }, { uz: "itarmoq", en: "push" },
        { uz: "qoqmoq", en: "knock" }, { uz: "to'qimoq", en: "weave/knit" }, { uz: "chopmoq", en: "chop" },
        { uz: "tozalamoq", en: "clean" }, { uz: "yuvmoq", en: "wash" }, { uz: "artmoq", en: "wipe" },
        { uz: "bo'yamoq", en: "paint/color" }, { uz: "chizmoq", en: "draw" }, { uz: "bezamoq", en: "decorate" }
    ],
    15: [ // Present Perfect
        { uz: "allaqachon", en: "already" }, { uz: "hali", en: "yet" }, { uz: "hali ham", en: "still" },
        { uz: "endi", en: "just" }, { uz: "beri", en: "since" }, { uz: "davomida", en: "for (duration)" },
        { uz: "qachondir", en: "ever" }, { uz: "hech qachon", en: "never" }, { uz: "bir necha marta", en: "several times" },
        { uz: "qaytgan", en: "returned" }, { uz: "bajargan", en: "completed" }, { uz: "ko'rgan", en: "seen" },
        { uz: "eshitgan", en: "heard" }, { uz: "yegan", en: "eaten" }, { uz: "ichgan", en: "drunk" },
        { uz: "yozgan", en: "written" }, { uz: "o'qigan", en: "read (past)" }, { uz: "ishlagan", en: "worked" },
        { uz: "o'rgangan", en: "learned" }, { uz: "tugatgan", en: "finished" }, { uz: "boshlagan", en: "started" },
        { uz: "topgan", en: "found" }, { uz: "yo'qotgan", en: "lost" }, { uz: "sotib olgan", en: "bought" },
        { uz: "sotgan", en: "sold" }, { uz: "bergan", en: "given" }, { uz: "olgan", en: "taken" },
        { uz: "kelgan", en: "come" }, { uz: "borgan", en: "gone" }, { uz: "uchrashuv", en: "meeting" },
        { uz: "sayohat", en: "trip/journey" }, { uz: "tajriba", en: "experience" }, { uz: "natija", en: "result" },
        { uz: "muvaffaqiyat", en: "success" }, { uz: "yutuq", en: "achievement" }, { uz: "xato", en: "mistake" },
        { uz: "saboq", en: "lesson (learned)" }, { uz: "o'sish", en: "growth" }, { uz: "rivojlanish", en: "development" },
        { uz: "o'zgarish", en: "change" }, { uz: "yaxshilanish", en: "improvement" }, { uz: "mukammallashtirish", en: "perfection" },
        { uz: "erishmoq", en: "achieve" }, { uz: "hisob", en: "count/record" }, { uz: "qayd etmoq", en: "note down" },
        { uz: "eslab qolmoq", en: "remember" }, { uz: "unutmoq", en: "forget" }, { uz: "tanlash", en: "choice" },
        { uz: "qaror", en: "decision" }, { uz: "reja", en: "plan" }, { uz: "amalga oshirmoq", en: "implement/fulfill" }
    ],
    16: [ // Buyruq-istak mayli
        { uz: "kel", en: "come (imperative)" }, { uz: "bor", en: "go (imperative)" }, { uz: "o'tir", en: "sit (imperative)" },
        { uz: "tur", en: "stand (imperative)" }, { uz: "o'qi", en: "read (imperative)" }, { uz: "yoz", en: "write (imperative)" },
        { uz: "gapir", en: "speak (imperative)" }, { uz: "tinla", en: "listen (imperative)" }, { uz: "qara", en: "look (imperative)" },
        { uz: "ber", en: "give (imperative)" }, { uz: "ol", en: "take (imperative)" }, { uz: "ich", en: "drink (imperative)" },
        { uz: "ye", en: "eat (imperative)" }, { uz: "ishla", en: "work (imperative)" }, { uz: "o'rgan", en: "learn (imperative)" },
        { uz: "to'xta", en: "stop (imperative)" }, { uz: "davom et", en: "continue (imperative)" }, { uz: "qayt", en: "return (imperative)" },
        { uz: "kir", en: "enter (imperative)" }, { uz: "chiq", en: "exit (imperative)" }, { uz: "ko'tar", en: "lift (imperative)" },
        { uz: "qo'y", en: "put down (imperative)" }, { uz: "yur", en: "walk (imperative)" }, { uz: "yugur", en: "run (imperative)" },
        { uz: "iltimos", en: "please" }, { uz: "kechirasiz", en: "excuse me" }, { uz: "rahmat", en: "thank you" },
        { uz: "marhamat", en: "you're welcome / please (go ahead)" }, { uz: "bo'lmaydi", en: "not allowed" },
        { uz: "bo'ladi", en: "it's okay/allowed" }, { uz: "ruxsat bering", en: "please allow" },
        { uz: "buyruq", en: "command" }, { uz: "so'rov", en: "request" }, { uz: "talab", en: "demand" },
        { uz: "o'tinch", en: "plea" }, { uz: "istak", en: "wish" }, { uz: "umid", en: "hope" },
        { uz: "ariza", en: "application/request form" }, { uz: "taklif", en: "invitation/offer" },
        { uz: "shikoyat", en: "complaint" }, { uz: "mamnuniyat", en: "satisfaction" }, { uz: "norozilik", en: "dissatisfaction" },
        { uz: "qoida", en: "rule" }, { uz: "ko'rsatma", en: "instruction" }, { uz: "yo'riqnoma", en: "manual/guide" },
        { uz: "tartib", en: "order/sequence" }, { uz: "intizom", en: "discipline" }, { uz: "hurmat", en: "respect" },
        { uz: "mehribonlik", en: "kindness" }, { uz: "muruvvat", en: "generosity" }
    ]
};

// Get vocab for current lesson (fallback to lesson 1)
function getLessonVocab(lessonId) {
    return lessonVocab[lessonId] || lessonVocab[1];
}



// App State
let appState = {
    currentView: 'home',
    activeLessonId: null,
    exerciseIndex: 0,
    correctCount: 0,
    wrongCount: 0,
    currentConstructedSentence: []
};

// DOM Elements
const mainContent = document.getElementById('main-content');
const subtitle = document.getElementById('subtitle');

// Custom Alert System
function createAlertElements() {
    if (!document.getElementById('custom-overlay')) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="custom-overlay" class="overlay"></div>
            <div id="custom-alert" class="custom-alert">
                <div id="alert-icon" class="alert-icon"></div>
                <div id="alert-title" class="alert-title"></div>
                <div id="alert-message" class="alert-message"></div>
                <button id="alert-btn" class="alert-btn" onclick="closeAlert()">Davom etish</button>
            </div>
        `);
    }
}

function showAlert(isCorrect, message, onComplete) {
    createAlertElements();
    const alertBox = document.getElementById('custom-alert');
    const overlay = document.getElementById('custom-overlay');
    const title = document.getElementById('alert-title');
    const msg = document.getElementById('alert-message');
    const icon = document.getElementById('alert-icon');

    if (isCorrect) {
        icon.innerHTML = '🌟';
        title.innerHTML = 'Ajoyib!';
        title.style.color = 'var(--accent)';
    } else {
        icon.innerHTML = '😕';
        title.innerHTML = 'Xato ketdi';
        title.style.color = 'var(--danger)';
    }

    msg.innerHTML = message;

    overlay.classList.add('show');
    alertBox.classList.add('show');

    window.closeAlert = () => {
        overlay.classList.remove('show');
        alertBox.classList.remove('show');
        if (onComplete) onComplete();
    };
}

// Initialize
function init() {
    renderHome();
}

// Render Home View (Lesson List)
function renderHome() {
    appState.currentView = 'home';
    subtitle.innerText = "Darslar ro'yhati";
    mainContent.innerHTML = '';

    lessonsData.forEach((lesson, index) => {
        const item = document.createElement('div');

        // Define dynamic border color based on index for a colorful feel
        const colors = ['#6366F1', '#EC4899', '#10B981', '#F59E0B', '#8B5CF6', '#14B8A6'];
        const color = colors[index % colors.length];

        // Main Item
        const header = document.createElement('div');
        header.className = 'list-item';
        header.style.borderLeft = '5px solid ' + color;
        header.innerHTML = `
            <span class="list-icon" style="color: ${color}; background: ${color}20;">${lesson.icon}</span>
            <span class="list-text">${lesson.title}</span>
        `;

        // Sub Items List
        const subList = document.createElement('div');
        subList.className = 'sub-list';
        subList.id = 'sublist-' + lesson.id;

        subLessons.forEach(sub => {
            const subEl = document.createElement('div');
            subEl.className = 'sub-list-item';
            subEl.innerHTML = `
                <span class="sub-list-icon">${sub.icon}</span>
                <span class="sub-list-text">${sub.title}</span>
            `;
            subEl.onclick = (e) => {
                e.stopPropagation();
                if (sub.type === 'sentence') {
                    startExercise('sentence', lesson.id, lesson.title);
                } else if (sub.type === 'uz_en') {
                    startExercise('vocab_uz_en', lesson.id, lesson.title);
                } else if (sub.type === 'en_uz') {
                    startExercise('vocab_en_uz', lesson.id, lesson.title);
                } else if (sub.type === 'vocab') {
                    startExercise('study_vocab', lesson.id, lesson.title);
                }
            };
            subList.appendChild(subEl);
        });

        header.onclick = () => {
            const isActive = subList.classList.contains('active');
            document.querySelectorAll('.sub-list').forEach(sl => sl.classList.remove('active'));
            if (!isActive) {
                subList.classList.add('active');
            }
        };

        item.appendChild(header);
        item.appendChild(subList);
        mainContent.appendChild(item);
    });
}

// Start Exercise
function startExercise(type, lessonId, lessonTitle) {
    appState.currentView = type;
    appState.activeLessonId = lessonId;
    appState.exerciseIndex = 0;
    appState.correctCount = 0;
    appState.wrongCount = 0;

    updateQuizHeader(type);

    if (type === 'sentence') renderSentenceExercise();
    else if (type === 'vocab_uz_en') renderVocabExercise();
    else if (type === 'vocab_en_uz') renderVocabEnUzExercise();
    else if (type === 'study_vocab') renderStudyVocab();
}

function updateQuizHeader(type) {
    const sectionNum = type === 'sentence' ? 4 : 3;
    subtitle.innerHTML = `
        <div class="quiz-header-bar">
            <button onclick="init()" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--text-main);margin-right:10px;">❮</button><span style="flex:1;">Dars ${appState.activeLessonId} - Qism ${sectionNum} - Mashq ${appState.exerciseIndex + 1}</span>
            <span class="score-area">
                <span class="score-correct"><span>✔️</span> ${appState.correctCount}</span>
                <span class="score-wrong"><span>❌</span> ${appState.wrongCount}</span>
            </span>
        </div>
    `;
}

// Render Sentence Builder Exercise
function renderSentenceExercise() {
    if (appState.exerciseIndex >= sentenceExercises.length) {
        return renderCompletion();
    }

    appState.currentConstructedSentence = [];
    const ex = sentenceExercises[appState.exerciseIndex];
    updateQuizHeader('sentence');

    mainContent.innerHTML = `
        <div class="exercise-box">
            <div class="uzb-text">${ex.uz}</div>
            <div id="constructed-sentence"></div>
            <div class="translation-instruction">
                <span>Ingliz tiliga tarjima qiling</span>
                <span id="backspace">⌫</span>
            </div>
        </div>
        
        <div class="word-bank" id="word-bank">
            ${ex.enWords.map((word, i) => `
                <button class="word-btn" data-word="${word}" data-index="${i}" onclick="selectWord(this)">${word}</button>
            `).join('')}
        </div>
    `;

    document.getElementById('backspace').onclick = () => {
        if (appState.currentConstructedSentence.length > 0) {
            const lastWord = appState.currentConstructedSentence.pop();
            const buttons = document.querySelectorAll('.word-btn');
            for (let btn of buttons) {
                if (btn.dataset.word === lastWord && btn.classList.contains('used')) {
                    btn.classList.remove('used');
                    break;
                }
            }
            updateConstructedSentence();
        }
    };
    updateConstructedSentence();
}

window.selectWord = function (btn) {
    if (btn.classList.contains('used')) return;

    appState.currentConstructedSentence.push(btn.dataset.word);
    btn.classList.add('used');
    updateConstructedSentence();

    const ex = sentenceExercises[appState.exerciseIndex];
    if (appState.currentConstructedSentence.length === ex.correctOrder.length) {
        checkSentenceAnswer();
    }
}

function updateConstructedSentence() {
    const container = document.getElementById('constructed-sentence');
    if (appState.currentConstructedSentence.length === 0) {
        container.innerHTML = '<span style="color: #94A3B8; font-weight: 400; font-size: 16px;">So\'zlarni tanlab gap tuzing...</span>';
    } else {
        container.innerText = appState.currentConstructedSentence.join(' ');
    }
}

function checkSentenceAnswer() {
    const ex = sentenceExercises[appState.exerciseIndex];
    if (appState.currentConstructedSentence.join(' ') === ex.correctOrder.join(' ')) {
        appState.correctCount++;
        showAlert(true, "Zo'r! Siz to'g'ri topdingiz.", () => {
            appState.exerciseIndex++;
            renderSentenceExercise();
        });
    } else {
        appState.wrongCount++;
        showAlert(false, "To'g'ri javob:<br><strong style='color:var(--primary); font-size:18px; display:inline-block; margin-top:10px;'>" + ex.correctOrder.join(' ') + "</strong>", () => {
            appState.exerciseIndex++;
            renderSentenceExercise();
        });
    }
}


// Render Study Vocab (flip cards)
function renderStudyVocab() {
    var vocabList = getLessonVocab(appState.activeLessonId);
    subtitle.innerHTML = '<div class="quiz-header-bar"><button onclick="init()" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--text-main);margin-right:10px;">❮</button><span style="flex:1;">Dars ' + appState.activeLessonId + ' - So\'zlar Lug\'ati</span><span style="color:var(--text-muted);font-size:14px;">' + vocabList.length + ' ta so\'z</span></div>';
    var html = '<div style="display:grid;gap:10px;padding:4px 0;">';
    for (var i = 0; i < vocabList.length; i++) {
        var item = vocabList[i];
        html += '<div class="vocab-card" onclick="this.classList.toggle(\'flipped\')">' +
            '<div class="vocab-card-front">' +
            '<span class="vocab-num">' + (i+1) + '</span>' +
            '<span class="vocab-uz">' + item.uz + '</span>' +
            '<span class="vocab-tap">&#128070; Bosing</span>' +
            '</div><div class="vocab-card-back">' +
            '<span class="vocab-en">' + item.en + '</span>' +
            '</div></div>';
    }
    html += '</div>';
    mainContent.innerHTML = html;
}

// Render Vocab Exercise - Uzbek to English
function renderVocabExercise() {
    var vocabList = getLessonVocab(appState.activeLessonId);
    if (appState.exerciseIndex >= vocabList.length) { return renderCompletion(); }
    var ex = vocabList[appState.exerciseIndex];
    updateQuizHeader('vocab');
    mainContent.innerHTML = '<div class="exercise-box"><div class="uzb-text" style="font-size:28px;color:var(--primary-dark);">' + ex.uz + '</div><div class="translation-instruction" style="justify-content:center;border-top:1px solid #E2E8F0;padding-top:15px;margin-top:20px;">Ingliz tiliga tarjima qilib yozing</div></div><div class="type-answer-box"><span class="mic-icon">&#127908;</span><input type="text" id="vocab-input" class="answer-input" placeholder="Shu yerga yozing..." autocomplete="off" autocorrect="off"><span class="check-icon" onclick="checkVocabAnswer()">&#10148;</span></div>';
    var input = document.getElementById('vocab-input');
    input.focus();
    input.addEventListener('keypress', function(e) { if (e.key === 'Enter') checkVocabAnswer(); });
}

window.checkVocabAnswer = function() {
    var vocabList = getLessonVocab(appState.activeLessonId);
    var inp = document.getElementById('vocab-input').value.trim().toLowerCase();
    var ex = vocabList[appState.exerciseIndex];
    if (inp === '') return;
    if (inp === ex.en.toLowerCase()) {
        appState.correctCount++;
        showAlert(true, "Barakalla, to'g'ri yozdingiz!", function() { appState.exerciseIndex++; renderVocabExercise(); });
    } else {
        appState.wrongCount++;
        showAlert(false, "To'g'ri yozilishi:<br><strong style='color:var(--primary);font-size:24px;display:inline-block;margin-top:10px;'>" + ex.en + "</strong>", function() { appState.exerciseIndex++; renderVocabExercise(); });
    }
}

// Render Vocab Exercise - English to Uzbek
function renderVocabEnUzExercise() {
    var vocabList = getLessonVocab(appState.activeLessonId);
    if (appState.exerciseIndex >= vocabList.length) { return renderCompletion(); }
    var ex = vocabList[appState.exerciseIndex];
    updateQuizHeader('vocab');
    mainContent.innerHTML = '<div class="exercise-box"><div class="uzb-text" style="font-size:28px;color:var(--primary-dark);">' + ex.en + '</div><div class="translation-instruction" style="justify-content:center;border-top:1px solid #E2E8F0;padding-top:15px;margin-top:20px;">O\'zbek tiliga tarjima qilib yozing</div></div><div class="type-answer-box"><span class="mic-icon">&#127908;</span><input type="text" id="vocab-input" class="answer-input" placeholder="Shu yerga yozing..." autocomplete="off" autocorrect="off"><span class="check-icon" onclick="checkVocabEnUzAnswer()">&#10148;</span></div>';
    var input = document.getElementById('vocab-input');
    input.focus();
    input.addEventListener('keypress', function(e) { if (e.key === 'Enter') checkVocabEnUzAnswer(); });
}

window.checkVocabEnUzAnswer = function() {
    var vocabList = getLessonVocab(appState.activeLessonId);
    var inp = document.getElementById('vocab-input').value.trim().toLowerCase();
    var ex = vocabList[appState.exerciseIndex];
    if (inp === '') return;
    if (inp === ex.uz.toLowerCase()) {
        appState.correctCount++;
        showAlert(true, "Barakalla, to'g'ri yozdingiz!", function() { appState.exerciseIndex++; renderVocabEnUzExercise(); });
    } else {
        appState.wrongCount++;
        showAlert(false, "To'g'ri yozilishi:<br><strong style='color:var(--primary);font-size:24px;display:inline-block;margin-top:10px;'>" + ex.uz + "</strong>", function() { appState.exerciseIndex++; renderVocabEnUzExercise(); });
    }
}
function renderCompletion() {
    subtitle.innerHTML = "Mashqlar Yakunlandi 🌟";
    mainContent.innerHTML = `
        <div class="completed-message">
            <h2>Tabriklaymiz! 🎉</h2>
            <p style="color: var(--text-muted); font-size: 16px;">Siz bu bo'limni muvaffaqiyatli tugatdingiz.</p>
            
            <div class="completed-stats">
                <div class="stat-item">
                    <span class="stat-val val-correct">${appState.correctCount}</span>
                    <span class="stat-label">To'g'ri</span>
                </div>
                <div class="stat-item">
                    <span class="stat-val val-wrong">${appState.wrongCount}</span>
                    <span class="stat-label">Xato</span>
                </div>
            </div>
            
        </div>
        <button class="btn-back" onclick="init()">Bosh sahifaga qaytish</button>
    `;
}



// Start
init();




