
// game website
// img link
const bergen = [
    './ImgForDem/bergen/berg-1.jpg',
    './ImgForDem/bergen/berg-2.jpg',
    './ImgForDem/bergen/berg-3.jpg',
];
const strand = [
    './ImgForDem/strand/strand-1.jpg',
    './ImgForDem/strand/strand-2.jpg',
    './ImgForDem/strand/strand-3.jpg',
    './ImgForDem/strand/strand-4.jpg',
    './ImgForDem/strand/strand-5.jpg',
];
const dieren = [
    './ImgForDem/dieren/anim-1.jpg',
    './ImgForDem/dieren/anim-2.jpg',
    './ImgForDem/dieren/anim-3.jpg',
    './ImgForDem/dieren/anim-4.jpg',
    './ImgForDem/dieren/anim-5.jpg',
    './ImgForDem/dieren/anim-6.jpg',
];
const kunst = [
    './ImgForDem/kunst/art-1.jpg',
    './ImgForDem/kunst/art-2.jpg',
    './ImgForDem/kunst/art-3.jpg',
];
const auto = [
    './ImgForDem/auto/auto-1.jpg',
    './ImgForDem/auto/auto-2.jpg',
    './ImgForDem/auto/auto-3.jpg',
    './ImgForDem/auto/auto-4.jpg',
    './ImgForDem/auto/auto-5.jpg',
    './ImgForDem/auto/auto-6.jpg',
    './ImgForDem/auto/auto-7.jpg',
    './ImgForDem/auto/auto-8.jpg',
    './ImgForDem/auto/auto-9.jpg',
    './ImgForDem/auto/auto-10.jpg',
];
const ruimte = [
    './ImgForDem/ruimte/space-1.jpg',
    './ImgForDem/ruimte/space-2.jpg',
    './ImgForDem/ruimte/space-3.jpg',
    './ImgForDem/ruimte/space-4.jpg',
];

const afbeeldingCateg = {
    bergen,
    strand,
    dieren,
    kunst,
    auto,
    ruimte,
};

// Functie om een willekeurige afbeelding te kiezen uit een geselecteerde categorie
function randomIndx(categorieName) {
    const categorie = afbeeldingCateg[categorieName];
    // een willekeurig getal uit een bepaalde array te kiezen.
    let randomIndex = Math.floor(Math.random() * categorie.length);
    // de link van de geselecteerde foto toevoegen 
    $("#imgCanvas").css("background-image", `url(${categorie[randomIndex]})`);
    console.log(categorie[randomIndex])
}

// Variabele voor de grootte van de pixelblokken
let pixSize = 0;

// Functie om het thema van afbeelding en de moeilijkheidsgraad te selecteren zonder het toetsenbord te gebruiken.
function slideAnim(elem, elem2) {
    // functie om thema van afbeelding selecteren
    if (elem == 'foto') {
        randomIndx(elem2);
        $('.frame-2').addClass('slide-in')
        $('.frame-1').addClass('slide-out')
    }
    // functie om moeilijkheidsgraad selecteren
    else if (elem == 'level') {
        $('.frame-3').addClass('slide-in')
        $('.frame-2').addClass('slide-out').removeClass('slide-in')
        $('.frame-1').removeClass('slide-out')
        switch (elem2) {
            case 'easy':
                pixSize = 500;
                console.log('easy');
                break;
            case 'medium':
                pixSize = 250;
                console.log('medium');
                break;
            case 'complex':
                pixSize = 150;
                console.log('complex');
                break;
        }
    }
}


let selectedPhoto = 0;
let selectedLevel = 0;
let level = false;
let enter = false;
let gameplay = false;

// Functie om het thema van afbeelding en de moeilijkheidsgraad te selecteren met het toetsenbord.
$(window).keydown(function (evt) {

    // krijg de waarde van de ingedrukte toets (van ASCII-tabel) 
    // console.log(evt.which)

    // thema van afbeelding selecteren  (frame-1)
    if (evt.which == 65 && !gameplay) { // a
        let btnIds = []
        // Deze methode selecteert alle elementen met de class buttonPhoto en geeft terug een array van de gevonden elementen.
        const buttons = document.querySelectorAll('.buttonPhoto');
        // voegt alle ids toe aan de btnIds
        buttons.forEach(button => {
            btnIds.push(button.id);
        });
        // Dit zorgt ervoor dat slechts één knop is geselecteerd op het moment van selectie.
        $('.buttonPhoto').removeClass('selectedPhoto')
        // Selecteert een knop op index uit de array en voegt een class toe om deze te selecteren.
        $('#' + btnIds[selectedPhoto]).addClass('selectedPhoto')
        selectedPhoto++;
        // wanneer het einde van de array is bereikt, wordt de index opnieuw ingesteld
        if (selectedPhoto == btnIds.length) {
            selectedPhoto = 0
        }
        enter = true;
    }
    // selecteer een fotocategorie door op enter te drukken
    if (evt.which == 13 && !level && enter) { // enter 
        // krijg de categorienaam van het geselecteerde item
        let selectedPh = $('.selectedPhoto').val()
        // een willekeurige foto uit een bepaalde categorie selecteren 
        randomIndx(selectedPh);
        $('.frame-2').addClass('slide-in')
        $('.frame-1').addClass('slide-out')
        btnIds = [];
        level = true;
        enter = false;
    }

    // kies level (frame-2)
    if (level) {
        if (evt.which == 65) { // a
            let btnIds = []
            // Deze methode selecteert alle elementen met de class buttonLevel en geeft terug een array van de gevonden elementen.
            const buttons = document.querySelectorAll('.buttonLevel');
            // voegt alle ids toe aan de buttonIds
            buttons.forEach(button => {
                btnIds.push(button.id);
            });
            // Dit zorgt ervoor dat slechts één knop is geselecteerd op het moment van selectie.
            $('.buttonLevel').removeClass('selectedLevel')
            // Selecteert een knop op index uit de array en voegt een class toe om deze te selecteren.
            $('#' + btnIds[selectedLevel]).addClass('selectedLevel')
            selectedLevel++;
            // wanneer het einde van de array is bereikt, wordt de index opnieuw ingesteld
            if (selectedLevel == btnIds.length) {
                selectedLevel = 0
            }
            enter = true;

        }
        if (evt.which == 13 && enter) { // enter
            // value van geselecterde btn krijgen
            let selectedLv = $('.selectedLevel').val()
            switch (selectedLv) {
                case 'easy':
                    pixSize = 500;
                    console.log('easy');
                    break;
                case 'medium':
                    pixSize = 250;
                    console.log('medium');
                    break;
                case 'complex':
                    pixSize = 150;
                    console.log('complex');
                    break;
            }
            $('.frame-3').addClass('slide-in')
            $('.frame-2').addClass('slide-out').removeClass('slide-in')
            $('.frame-1').removeClass('slide-out')
            level = false;
            enter = false;
            gameplay = true;
        }
    }
})
// Vind het canvas-element met het id 'imgCanvas'
const canvas = document.getElementById('imgCanvas');
// Verkrijg de 2D-tekencontext van het canvas
const ctx = canvas.getContext('2d');

// canvas tekenen
function initializeCanvas() {
    canvas.width = 4000;
    canvas.height = 4000;
    ctx.fillStyle = '#939AF7';
    // Vul het hele canvas met de opgegeven kleur
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let time = 0;
let timer;
let isRunning = false;
// Functie om de timer te starten
function startTimer() {
    // Controleer of de timer niet al actief is
    if (!isRunning) {
        isRunning = true;
        // Stel een interval in dat elke seconde wordt uitgevoerd
        timer = setInterval(() => {
            time++;
            console.log(time)
        }, 1000);// Interval van 1000 milliseconden (1 seconde)
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// del pixels met space
let currentX = 0;
let currentY = 0;
let baseScore = 100;
let coeficient;
let score = 0;
// Functie om 
$(window).keydown(function (evt) {
    // Als de spatie wordt ingedrukt
    if (evt.which == 32 && pixSize > 0) { // space
        startTimer()
        // Wis een blok pixels
        ctx.clearRect(currentX, currentY, pixSize, pixSize);
        // Ga naar de volgende positie in de rij
        currentX += pixSize;
        // Controleer of het einde van de rij is bereikt
        if (currentX >= canvas.width) {
            currentX = 0;
            currentY += pixSize;
        }
    }
    // Controleer of het einde van het canvas is bereikt 
    if (currentX >= canvas.width || currentY >= canvas.height) {
        stopTimer()
        // ga naar de volgende frame
        $('.frame-4').addClass('slide-in');
        $('.frame-3').addClass('slide-out').removeClass('slide-in');
        $('.frame-2').removeClass('slide-out');
        // Stel de moeilijkheidscoëfficiënt in op basis van de pixelgrootte
        switch (pixSize) {
            case 500:
                coeficient = 1; // Gemakkelijk
                break;
            case 250:
                coeficient = 2; // Medium
                break;
            case 150:
                coeficient = 3; // Moeilijk
                break;
        }
        if (score == 0) {
            // Formule voor scoreberekening
            score = Math.round(((baseScore * coeficient) / time) * 100);
            $('#score-area').val(score);
            console.log('score: ' + score)

            // Start confetti als de score groter is dan 0
            if (score > 0) {
                setTimeout(startConfetti, 1000);
            }
        }
    }
})

initializeCanvas();

//frame-4

function reloadbtn() {
    setTimeout(function () {
        // pagina vernieuwen
        location.reload();
    }, 500)
}

// confetti instellingen
const duration = 15 * 1000; // Hoe lang de confetti duurt (15 seconden)
const animationEnd = Date.now() + duration; // Bereken wanneer de animatie stopt
const defaults = {
    startVelocity: 30, // Hoe snel de confetti begint te bewegen
    spread: 360, // Richting van de confetti (360 graden, overal)
    ticks: 60, // Hoe lang elke confettideeltje zichtbaar blijft
    zIndex: 0 // Z-index, zodat het achter andere elementen kan staan
};

// Functie om een willekeurig getal tussen een minimum en maximum te krijgen
function randomInRange(min, max) {
    return Math.random() * (max - min) + min; // Geef een getal tussen min en max
}

// Start de confetti-animatie
function startConfetti() {
    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now(); // Hoeveel tijd is er nog over?
        if (timeLeft <= 0) {
            return clearInterval(interval); // Stop de animatie als de tijd op is
        }
        const particleCount = 150 * (timeLeft / duration); // Minder confetti naarmate de tijd afloopt
        // Laat confetti vallen van een willekeurige plek (iets boven de normale positie)
        confetti(
            Object.assign({}, defaults, {
                particleCount, // Hoeveel deeltjes er nu verschijnen
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, // Links van het scherm
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount, // Hoeveel deeltjes er nu verschijnen
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, // Rechts van het scherm
            })
        );
    }, 250); // Update de animatie elke 250 milliseconden
}