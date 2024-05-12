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
    shewed: "ʃuːd",
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
    Eleazar: "ɪˈlɪəzər",
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
    Abiram: "ˈabaɪram"
}

module.exports = {
    IPA_PRONUNCIATIONS
}