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
        ProgrammeDonor: 'Become a program donor! Sponsor Programs, Sustain Success: Your Funding Keeps Initiatives Thriving',

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
        ProgrammeDonor: 'Bliv programdonor! Sponsorprogrammer, opretholde succes: Din finansiering holder initiativer i gang',

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
    const newLanguage=currentLanguage==='EN'?'DA':'EN';

    document.documentElement.lang=newLanguage;
    updateText(newLanguage);
}

//This is to update the text based on what language they choose
function updateText(language) {
    const{NavTitle1, NavTitle2, NavTitle3, NavTitle4, JoinUs, Globe, HandShake, Members, Awards, AboutDescription, AboutReadMore, FightForTitle, Empowerment, Leadership, Sustainability, Innovation, SupportGame, Donation, BecomePartner, SupportWebShop, ProgrammeDonor, StoriesGane, Contact, Booking, Press, DonorsPartners, JobInternship, WebShop}=languageData[language];
    document.getElementById('NavTitle1').textContent=NavTitle1;
    document.getElementById('NavTitle2').textContent=NavTitle2;
    document.getElementById('NavTitle3').textContent=NavTitle3;
    document.getElementById('NavTitle4').textContent=NavTitle4;
    document.getElementById('JoinUs').textContent=JoinUs;
    document.getElementById('Globe').textContent=Globe;
    document.getElementById('HandShake').textContent=HandShake;
    document.getElementById('Members').textContent=Members;
    document.getElementById('Awards').textContent=Awards;
    document.getElementById('AbourDescription').textContent=AboutDescription;
    document.getElementById('AboutReadMore').textContent=AboutReadMore;
    document.getElementById('FightForTitle').textContent=FightForTitle;
    document.getElementById('Empowerment').textContent=Empowerment;
    document.getElementById('Leadership').textContent=Leadership;
    document.getElementById('Sustainability').textContent=Sustainability;
    document.getElementById('Innovation').textContent=Empowerment;
    document.getElementById('SupportGame').textContent=SupportGame;
    document.getElementById('Donation').textContent=Donation;
    document.getElementById('BecomePartner').textContent=BecomePartner;
    document.getElementById('SupportWebShop').textContent=SupportWebShop;
    document.getElementById('StoriesGame').textContent=StoriesGame;
    document.getElementById('Contact').textContent=Contact;
    document.getElementById('Booking').textContent=Booking;
    document.getElementById('Press').textContent=Press;
    document.getElementById('DonorsPartners').textContent=DonorsPartners;
    document.getElementById('JobInternship').textContent=JobInternship;
    document.getElementById('WebShop').textContent=WebShops;
    document.getElementById('button').textContent=buttonText;
}











