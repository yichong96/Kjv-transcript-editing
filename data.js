/**
 * Database consisting of the correct IPA pronunciations for mis-pronounced words by the AI
 */
const IPA_PRONUNCIATIONS = {
    clave: "klɛ́jv",
    herb: "hɜːrb",
    Laban: "laˈban",
    Keturah: "keɪˈtʊra",
    Medan: "miˈdan",
    Dedan: "deɪˈdæn",
    Sheba: "ʃeɪˈbɑ",
    Leummim: "leɪˈuːmɪm",
    Hanoch: "χaˈnɔx",
    Mamre: "ˈmʌmri",
    Lahairoi: "leɪˌhaɪˈrɔɪ",
    Jetur: "dʒərtʊr",
    Naphish: "neɪfɪʃ",
    Kedemah: "kiːˈdɛmɑː",
    sware: "swɛər",
    Padanaram: "padanaram",
    "Padan-aram": "padanaram",
    Leban: "laˈban",
    Rehoboth: "riˈhoːβoθ",
    Ahuzzath: "ʔaˈħuzatχ",
    Phichol: "ˈfaɪˌkɔl",
    Beeri: "biːˈraɪ",
    Bashemath: "baʃemɑθ",
    badest: "ˈbeɪdɪst",
    Hazezontamar: "hazɛzɔntaˈmaʁ",
    Chedorlaomer: "kɪdohˈlɑɑhohma",
    Shaveh: "ʃɛɪˈva",
    Aner: "ɑˈnɛʁ",
    Eliezer: "ɛliˈʕɛzɛr",
    Ur: "ʔur",
    Dan: "Dan",
    Kenizzites: "kɛnɪˈzaɪts",
    Rephaims: "ˈrɛfəˌɪmz",
    Beerlahairoi: "bɛərlɑːˈhaɪ.rɔɪ",
    Ammon: "ˈæhmən",
    Emins: "ˈiːmɪmz",
    Birsha: "ˈbɪrʃə",
    Elam: "ˈeːləm",
    Haran: "ˈhærɑn",
    "Nahor's": "ˈneɪhɔrz",
    Nahor: "ˈneɪhɔːr",
    Machpelah: "maːxˈpɛlɑː",
    Mahalath: "meɪˈhəlæθ",
    Nebajoth: "nɛbˈeɪˌdʒoθ",
    Naphtali: "ˈnæf.təli",
    Gad: "ɡad",
    Hanoch: 'heɪˈnɑx',
    Phallu: "ˈfælu",
    Simeon: "ˈsɪmiən",
    Jemuel: "dʒɛmjuːɛl",
    Jamin: "dʒamɪn",
    Jachin: "ˈdʒahɪn",
    Shaul: "ʃeɪʊl",
    Gershon: "ˈɡɜrʃen",
    Onan: "ˈoʊnən",
    Shelah: "ˈʃiːlə",
    Zerah: "ˈzɛrə",
    Hamul: "ˈhɑːmul",
    Phuvah: "ˈfuːvə",
    Job: "dʒoʊb",
    Sered: "ˈsɛrɛd",
    Elon: "ˈɛlɑn",
    Jahleel: "ˈdʒɑːliːl",
    Ziphion: "ˈzɪfiən",
    Haggi: "hɑɡaɪ",
    Shuni: "ˈʃuːni",
    Ezbon: "ˈɛzˌbɑn",
    Eri: "ˈɛraɪ",
    Arodi: "ˈɑːroʊdi",
    Areli: "ˈɑːrelaɪ",
    Asher: "ˈaʃər",
    Isui: "ˈiːsuːi",
    Beriah: "bɛˈraɪə",
    Serah: "ˈsɛrə",
    straitly: "ˈstreɪtli",
    Belah: "beɪˈlɑː",
    Becher: "ˈbiːhːkɜr",
    Gera: "ˈɡɛrə",
    Naaman: "ˈneːɑːmɑ:n",
    Ehi: "iːhaɪ",
    Rosh: "rəʊʃ",
    Muppim: "ˈmupɪm",
    Huppim: "ˈhupɪm",
    Dan: "daˈn",
    Guni: "ˈɡuni",
    Jezer: "dʒeɪzɜr",
    moreover: "mɔːrˈoʊvər",
    Padan:"pəːdan",
    Ephrath: "ˈiːvːfræθ",
    Shewed: "ʃoʊd",
    blessed: "blɛst",
    Ephron: "ivfrɑːn",
    Atad: "ˈɑːtɑːd",
    "Abel-mizraim": "ˈɑːbəlmɪzˈreɪɪm",
    Mamre: "ˈmaˈmreɪ",
    Machir: "ˈmɑːkiər",
    Phares: "ˈfɛrəs",
    Thamar: "ˈθeɪmɑːr",
    Esrom: "ˈɛzrəm",
    Naasson: "ˈneɑːsɔn",
    Booz: "boʊɔz",
    Rachab: "reɪˈkɑb",
    Urias: "juːˈraɪəs",
    Abia: "əˈbaɪə",
    Josaphat: "dʒɒsəfæt",
    Joram: "dʒɔːrəm",
    Ozias: "oʊˈzaɪəs",
    Joatham: "ˈdʒoʊəθʌm",
    Achaz: "ˈeɪkʌz",
    Ezekias: "əziːkaɪəs",
    Manases: "məˈnæsiːz",
    Amon: "ɑːmən",
    Jechonias: "d͡ʒɛkənaɪəs",
    Salathiel: "sæleɪˈθɪɛl",
    Zorobabel: "ˈzɒroʊˈbʌbɛl",
    Abiud: "ɑˈbaɪˈʊd",
    Eliakim: "ɪˈlaɪəkɪm",
    Azor: "ˈeɪzɔːr",
    Sadoc: "ˈseɪdɑk",
    Achim: "ˈeɪˈkɪm",
    Eliud: "ɪˈlaɪʊd",
    Eleazar: "eˈlɪeɪzʌr",
    Jeremy: "ˈdʒɛrəmi",
    Rama: "ˈrɑːmə",
    Zabulon: "ˈzæbjʊlən",
    Blessed: "blɛsɪd",
    Raca: "ˈreɪkə",
    Gergesenes: "gɜːgɜˈsiːnz",
    eaten: "ˈiː.tən",
    eunuchs: "ˈjuː.nəks",
    "mother's": "ˈmʌðərz",
    sow: "saʊ",
    Bethphage: "ˈbɛθfeɪdʒ",
    cummin: "ˈkjuːmɪn",
    Barachias: "bɛrəkaɪəs",
    Noe: "noə",
    cursed: "ˈkɜːsɪd",
    bewrayeth: "bɪˈtreɪəθ",
    Cyrene: "saɪˈriːni",
    sabachthani: "səˈbakθənaɪ",
    Joses: "ˈdʒoʊzɪz",
    alway: "ˈɔːlweɪ",
    falleth: "ˈfɔːləθ",
    Jochebed: "ˈdʒɑːkəbɛd",
    Yet: "jɛt",
    Bethsaida: "bɛɪθˈsaɪda",
    Nineveh: "nɪˈnɪvɪ",
    Joses: "ˈdʒoʊsiz",
    lead: "lɛd",
    Moab: "ˈmoʊæb",
    Hur: "huːr",
    bow: "baʊ",
    aul: "ɔl",
    wound: "wuːnd",
    sacrificeth: "ˈsæk.rə.faɪs.ɪθ",
    sow: "soʊ",
    Abib: "aˈbib",
    heave: "hiːv",
    defileth: "dɪˈfaɪlɪθ",
    jubile: "ˈdʒuːbɪliː",
    man: "mæn",
    yea: "jeɪ",
    begat: "bɪˈɡɛt",
    pursueth: "pərˈsuːɜrθ",
    ass: "æs",
    seethe: "sið",
    ephod: "ˈiː.fɒd",
    taches: "ˈtæʃɪz",
    brasen: "ˈbreɪzən",
    Ahisamach: "əhɪsəmax",
    four: "fɔɹ",
    Issachar: "iˈsəkə",
    "Lord's": "lɔrdz",
    Eldad: "ɛlˈdəd",
    Jephunneh: "dʒɛfuːne",
    rebel: "rɪˈbɛl",
    bade: "beɪd",
    slander: "ˈslɛndər",
    sojourn: "ˈsəʊdʒɜːn",
    sojourneth: "ˈsəʊdʒɜːnɛθ",
    goats: "ɡoʊts",
    ribband: "ˈrɪbənd",
    seemeth: "ˈsiːmɛf",
    Abiram: "ˈabaɪram",
    Issachar: "ɪsəkɑr",
    Manasseh: "məˈnæsə",
    ephah: "ˈi fə",
    Merari: "məˈrɑri",
    Pedahzuh: "pɛdəˈzuːr",
    baptize: "ˈbæpˌtaɪz",
    driveth: "ˈdraɪvɛθ",
    Capernaum: "kəˈpɜːrniəm",
    seweth: "ˈsoʊ.ɪθ",
    putteth: "ˈpʊtɛθ",
    hungered: "ˈhʌŋɡərd",
    Idumea: "ˌaɪduːˈmeɪːə",
    calleth: "ˈkɔːlɛθ",
    Thaddaeus: "ˈθædiəs",
    ariseth: "əˈraɪzɛθ",
    Gadarenes: "ˌɡædərɪ́jns",
    Jairus: "ˈdʒaɪrəs",
    sleepeth: "ˈsliːpɪθ",
    "Talitha cumi": "ˈtælɪθə ˈkuːmaɪː",
    Herod: "ˈhɛrəd",
    pennyworth: "ˈpɛniwɜrθ",
    Gennesaret: "gənɛ́zərɪt",
    sojourneth: "ˈsoʊd͡ʒɚnɜrθ",
    Hor: "hɔːr",
    Arad: "ˈarʌd",
    Oboth: "ɔːrˈboʊθ",
    Ijeabarim: "iˈd͡ʒeɪa.baˈrim",
    Zared: "ˈzarɛd",
    Nahaliel: "nəˈhæliɛl",
    Bamoth: "ˈbæmɒθ",
    Sihon: "ˈsaɪ.hɒn",
    Dibon: "ˈdɪbɒn",
    Jaazer: "ˈdʒeɪzər",
    Bashan: "ˈbaˈʃan",
    Balak: "ˈbalʌk",
    Zippor: "ˈzɪpɔr",
    Baal: "baal",
    Aram: "ˈaram",
    Peor: "ˈpiːɔːr",
    seeth: "si:əθ",
    coucheth: "ˈkaʊtʃɛθ",
    enlargeth: "ɪnˈlɑːrdʒəθ",
    rideth: "ˈraɪdɛθ",
    Reubenites: "ˈruːbɪnˌaɪts",
    rebel: "rɪˈbɛl",
    Nun: "nun",
    Og: "ˈɔːrɡ",
    shew: "ʃoʊ",
    ye: "jiː",
    Girgashites: "ˈɡɜrɡəˌʃaɪts",
    soles: "soʊlz",
    Zaretan: "ˈzarətan",
    Gilgal: "ˈɡɪlɡʌl",
    accursed: "ərˈkɜːrst",
    Ai: "a-i",
    liest: "laɪːəst",
    Achor: "ˈa.kɔr",
    hand: "hænd",
    Ebal:"ˈiːbəl",
    Gerizim: "ˈɡɛrɪzɪm",
    clouted: "ˈklaʊtɪd",
    Chephirah: "chəˈfiːrə",
    Kirjathjearim: "ˈkir.dʒaθ dʒɪˈærɪm",
    Adonizedek: "ˌædəˈnaɪzədɛk",
    Hebron: "ˈhɛbrən",
    Hoham: "ˈhoʊhæm",
    Lachish: "ˈlakɪʃ",
    Eglon: "ˈɛɡlɒn",
    Libnah: "ˈlɪbnə",
    Kadeshbarnea: "ˈkadɛʃ bɑrˈneə",
    Hazor: "ˈhazɔːr",
    Madon: "ˈma.dɒn",
    Shimron: "ˈʃɪmrɒn",
    Achshaph: "ˈɑrkʃæf",
    Merom: "ˈmɛrɒm",
    Misrephothmaim: "ˌmɪsreɪfɒθˈmaɪm",
    houghed: "hɒɡd",
    Halak: "ˈhalʌk",
    Edrei: "ˈɛdreɪ",
    Baalgad: "bɑːˈɑːlˈɡɑd",
    Seir: "sɪər",
    Bethel: "bɛθəl",
    Tappuah: "ˈtɑ:puə",
    Tannach: "ˈtɑːanak",
    Geshuri: "ɡəˈʃju:rai",
    sihor: "si:hor",
    Avites: "ˈeɪvaɪts",
    Giblites: "ˈɡɪblɑɪts",
    Hamath: "ˈhɑmɑθ",
    Aroer: "ˈæroʊər",
    Dibon: "ˈdɪbən",
    "Barmoth-baal": "ˈbɑːrmɒθˈbɑːˈɑːl",
    "Beth-baal-meon": "bɛθˈbɑːˈɑːlmiːɒn",
    Evi: "ˈiːvai",
    Rekem: "ˈrɛːkɛm",
    Beor: "biːɔːr",
    Mahanaim: "ˈmahənaɪɪm",
    espy: "ˈɛspaɪ",
    Chinnereth: "kɪnəˈrɛθ",
    Ahihud: "əˈhaɪˌhʊd",
    Tophel: "ˈtoʊ.fɛl",
    Elath: "ˈiː.læθ",
    Zered: "ˈzɛˌrɛd",
    Kedemoth: "ˈkeɪdəˌmɑθ",
    "Baalpeor": "ˈbaal ˈpiːɔr",
    seest: "ˈsiɪst",
    "Bethpeor": "ˈbɛθ ˈpeːɔr",
    hast: "hæst",
    thou: "ðaʊ",
    champaign: "ʃæmˈpeɪn",
    Moreh: "moˈreɪ",
    proveth: "ˈpruːvɪθ",
    divideth: "dɪˈvaɪdɪθ",
    flieth: "ˈflaɪɪθ",
    puttest: "ˈpʊtɪst",
    evilfavouredness: "ˌiːvəlˈfeɪvərdnəs",
    inasmuch: "ˌɪnəzˈmʌtʃ",
    Balaam: "ˈbeɪləm",
    livest: "ˈlɪvɪst",
    Hushai: "ˈhuːʃaɪ",
    Beersheba: "bɪərˈʃiːbə",
    Abiathar: "əˈbɪəθɑːr",
    Ahimaaz: "əˈhɪməæz",
    Enrogel: "ɛnˈroʊɡəl",
    wench: "wɛntʃ",
    Bahurim: "ˈbahuːɹɪm",
    Amasa: "aˈmasa",
    Ithran: "ɪθran",
    Zeruiah: "zəˈruːaɪə",
    Shobi: "ˈʃoʊbaɪ",
    Ammiel: "ˈamiˌɛl",
    Rogelim: "ˈroʊɡəlɪm",
    Cushi: "ˈkuːʃaɪ",
    Shimei: "ˈʃɪmɪaɪ",
    Bahurim: "ˈbahuːrɪm",
    die: "daɪ",
    Mephibosheth: "məhˈfɪbəʃɛθ",
    Barzillai: "ˈbɑːrzɪˌləaɪ",
    Chimham: "ˈkɪmhæm",
    // Belial: "",
    Bichri: "ˈbɪkraɪ",
    Berites: "ˈbɛraɪts",
    Benaiah: "bənəˈaɪə",
    Adoram: "aˈdɔːrəm",
    Gibeonites: "ˈɡɪbiəˌnaɪts",
    Aiah: "aɪˈɪə",
    Armoni: "ˈɑːrmənaɪ",
    Michal: "ˈmaɪkəl",
    Ishibenob: "ˈɪʃbaɪbənɔb",
    Jaareoregim: "ˈdʒɑrəoʊrəɡɪm",
    riseth: "ˈraɪzɛθ",
    arose: "əˈroʊz",
    hew: "hjuː",
    cast: "kɑːst",
    Jachin: "ˈdʒɑkɪn",
    // "fir trees": "",
    Baalath: "ˈbaalæθ",
    Perizzites: "ˈpɛrɪˌzaɪts",
    Eziongeber: "əːzɪɒnˌɡəbər",
    Edom: "ˈiːdəm",
    Ophir: "ˈoʊfɪər",
    thee: "ðiː",
    Tharshish: "ˈθɑːrʃɪʃ",
    sentest: "sɛnˌtɛst",
}   

module.exports = {
    IPA_PRONUNCIATIONS
}
