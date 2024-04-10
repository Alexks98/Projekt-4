//This is for the English - Danish Translation of Texts

const languageData={
    english:{
        NavTitle1: 'WHAT WE DO',
        NavTitle2: 'WHO WE ARE',
        NavTitle3: 'WHERE WE WORK',
        NavTitle4: 'GET INVOLVED',

        JoinUs: 'JOIN US',

        Globe: '9 COUNTRIES',
        HandShake: '40 PARTNERS',
        Members: '135 MEMBERS',
        Awards: '19 AWARDS',

        AboutDescription: 'GAME strives for a world with equal opportunities for all children and youth. GAME is an international NGO working for social change through youth-led street sports and culture in Africa, Europe and the Middle East.',
        AboutReadMore: 'READ MORE',

        FightForTitle: 'GAME FIGHTS FOR',
        Empowerment: 'Empowerment',
        Leadership: 'Leadership',
        Sustainability: 'Sustainability',
        Innovation: 'Innovation',

        SupportGame: 'WANT TO SUPPORT GAME',
        Donation: 'Make a donation',
        BecomePartner: 'Become a business partner',
        SupportWebShop: 'Support our webshop here! Purchases Power Operations: Shop to Fund Our Day-to-Day Impact.',
        programDonor: 'Become a program donor! Sponsor Programs, Sustain Success: Your Funding Keeps Initiatives Thriving',

        StoriesGane: 'STORIES FROM GAME',

        Contact: 'CONTACT',
        Booking: 'BOOKING',
        Press: 'PRESS',
        DonorsPartners: 'LIST OF DONORS AND PARTNERS',
        JobInternship: 'JOBS AND INTERNSHIPS',
        WebShop: 'WEBSHOP',
        buttonText: 'English'
    },
    danish: {
        NavTitle1: 'HVAD VI GØR',
        NavTitle2: 'HVEM VI ER',
        NavTitle3: 'HVOR VI ARBEJDE',
        NavTitle4: 'BLIV INVOLVERET',

        JoinUs: 'VÆR MED',

        Globe: '9 LANDE',
        HandShake: '40 PARTNERE',
        Members: '135 MEDLEMMER',
        Awards: '19 PRISER',

        AboutDescription: 'GAME stræber efter en verden lige muligheder for alle børn og unge. GAME er en international NGO, der arbejder for social forandring gennem ungdomsledet gadesport og kultur i Afrika, Europa og Mellemøsten',
        AboutReadMore: 'LÆS MERE',

        FightForTitle: 'GAME KÆMPE FOR',
        Empowerment: 'Empowerment',
        Leadership: 'Ledelse',
        Sustainability: 'Bærdygtighed',
        Innovation: 'Innovation',

        SupportGame: 'ØNSKER AT STØTTE GAME',
        Donation: 'Give en donation',
        BecomePartner: 'Bliv forretningspartner',
        SupportWebShop: 'Støt vores webshop her! Købskraftdrift: Køb for at finansiere vores daglige effekt.',
        programDonor: 'Bliv programdonor! Sponsorprogrammer, opretholde succes: Din finansiering holder initiativer i gang',

        StoriesGane: 'HISTORIER FRA GAME',

        Contact: 'KONTAKT',
        Booking: 'BESTILLING',
        Press: 'NYHEDER',
        DonorsPartners: 'LISTE OVER DONORER OG PARTNERE',
        JobInternship: 'JOB OG PRAKTIK',
        WebShop: 'WEBSHOP',
        buttonText: 'Danish'
    }
};

//This is the function to toggle between English and Dansih
function toggleLanguage() {
    const currentLanguage=document.documentElement.lang;
    const newLanguage=currentLanguage==='english'?'danish':'english';

    document.documentElement.lang=newLanguage;
    updateText('danish');
}

//This is to update the text based on what language they choose
function updateText(language) {
    const{navTitle1, navTitle2, navTitle3, navTitle4, joinUs, globe, handShake, members, awards, aboutDescription, aboutReadMore, fightForTitle, empowerment, leadership, sustainability, innovation, supportGame, donation, becomePartner, supportWebShop, programmeDonor, storiesGane, contact, booking, press, donorsPartners, jobInternship, webShop}=languageData[language];
    document.getElementById('navTitle1').textContent=navTitle1;
    document.getElementById('navTitle2').textContent=navTitle2;
    document.getElementById('navTitle3').textContent=navTitle3;
    document.getElementById('navTitle4').textContent=navTitle4;
    document.getElementById('joinUs').textContent=joinUs;
    document.getElementById('globe').textContent=globe;
    document.getElementById('handShake').textContent=handShake;
    document.getElementById('members').textContent=members;
    document.getElementById('awards').textContent=awards;
    document.getElementById('aboutDescription').textContent=aboutDescription;
    document.getElementById('aboutReadMore').textContent=aboutReadMore;
    document.getElementById('fightForTitle').textContent=fightForTitle;
    document.getElementById('empowerment').textContent=empowerment;
    document.getElementById('leadership').textContent=leadership;
    document.getElementById('sustainability').textContent=sustainability;
    document.getElementById('innovation').textContent=empowerment;
    document.getElementById('supportGame').textContent=supportGame;
    document.getElementById('donation').textContent=donation;
    document.getElementById('becomePartner').textContent=becomePartner;
    document.getElementById('supportWebShop').textContent=supportWebShop;
    document.getElementById('programDonor').textContent=programDonor;
   // document.getElementById('storiesGame').textContent=storiesGame;
    document.getElementById('contact').textContent=contact;
    document.getElementById('booking').textContent=booking;
    document.getElementById('press').textContent=press;
    document.getElementById('donorsPartners').textContent=donorsPartners;
    document.getElementById('jobInternship').textContent=jobInternship;
    document.getElementById('webShop').textContent=webShop;
   // document.getElementById('button').textContent=buttonText;
}














