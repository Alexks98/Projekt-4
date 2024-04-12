//html part of the toggle language
<div id= "languageToggle">
    <button onclick="changeLanguage('en')">English</button>
    <button onclick="changeLanguage('da')">Danish</button>
</div>

//the function to toggle between the languages
let languageContent={
    "en":{
        "navTitle1": "WHAT WE DO",
        "navTitle2": "WHO WE ARE",
        "navTitle3": "WHERE WE WORK",
        "navTitle4": "GET INVOLVED",
        "joinUs": "JOIN US",
        "globe": "9 COUNTRIES",
        "handShake": "40 PARTNERS",
        "members": "135 MEMBERS",
        "awards": "19 AWARDS",
        "aboutDescription": "GAME strives for a world with equal opportunities for all children and youth. GAME is an international NGO working for social change through youth-led street sports and culture in Africa, Europe and the Middle East.",
        "aboutReadMore": "READ MORE",
        "fightForTitle": "GAME FIGHTS FOR",
        "empowerment": "Empowerment",
        "leadership": "Leadership",
        "sustainability": "Sustainability",
        "innovation": "Innovation",
        "supportGame": "WAYS TO SUPPORT GAME",
        "donation": "Make a donation! <br> Donations Boost Capacity: <br> More Resources for Community Impact",
        "becomePartner": "Become a business partner! <br> Drive Growth: <br> Collaborate for Expanded Reach",
        "supportWebShop": "Support our webshop here! <br> Purchases Power Operations: <br> Shop to Fund Our Day-to-Day Impact",
        "programDonor": "Become a program donor! <br> Sponsor Programs, Sustain Success: <br> Your Funding Keeps Initiatives Thriving",
        "storiesGame": "STORIES FROM GAME",
        "signUpNewsletter": "SIGN UP FOR OUR NEWSLETTER",
        "getNews": "Be the first to get the news!",
        "contact": "CONTACT",
        "booking": "BOOKING",
        "DonorsPartners": "LIST OF DONORS AND PARTNERS",
        "jobInternship": "JOBS AND INTERNSHIPS",
        "webShop": "WEBSHOP"
    },
    "da":{
        "navTitle1": "HVAD VI GØR",
        "navTitle2": "HVEM VI ER",
        "navTitle3": "HVOR VI ARBEJDE",
        "navTitle4": "BLIV INVOLVERET",
        "joinUs": "VÆR MED",
        "globe": "9 LANDE",
        "handShake": "40 PARTNERE",
        "members": "135 MEDLEMMER",
        "awards": "19 PRISER",
        "aboutDescription": "GAME stræber efter en verden lige muligheder for alle børn og unge. GAME er en international NGO, der arbejder for social forandring gennem ungdomsledet gadesport og kultur i Afrika, Europa og Mellemøsten",
        "aboutReadMore": "LÆS MERE",
        "fightForTitle": "GAME KÆMPE FOR",
        "empowerment": "Empowerment",
        "leadership": "Ledelse",
        "sustainability": "Bærdygtighed",
        "innovation": "Innovation",
        "supportGame": "ØNSKER AT STØTTE GAME",
        "donation": "Giv en donation! <br> Donationer øger kapaciteten: <br> Flere ressourcer til fællesskabspåvirkning",
        "becomePartner": "Bliv forretningspartner! <br> Drive vækst: <br> Samarbejd for udvidet rækkevidde",
        "supportWebShop": "Støt vores webshop her! <br> Købskraftdrift: <br> Shop for at finansiere vores daglige effekt",
        "programDonor": "Bliv programdonor! <br> Sponsorprogrammer, opretholde succes: <br> Din finansiering holder initiativer i gang",
        "storiesGame": "HISTORIE FRA GAME",
        "signUpNewsletter": "SKRIV DIG OP TIL VORES NYHEDSBREV",
        "getNews": "Vær den første til at få nyhederne",
        "contact": "KONTACT",
        "booking": "BESTILLING",
        "DonorsPartners": "LISTE OVER DONORER OG PARTNERE",
        "jobInternship": "JOB OG PRAKTIK",
        "webShop": "WEBSHOP"
    }
}
function switchcLang(lang) {
    for (let key in languageContent[lang]) {
        document.getElementById(key).innerHTML=languageContent[lang][key];
    }
}
