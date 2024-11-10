
// game website
// img path
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

const categories = {
    bergen: bergen,
    strand: strand,
    dieren: dieren,
    kunst: kunst,
    auto: auto,
    ruimte: ruimte
};
function randomIndx(categorieName) {
    const categorie = categories[categorieName];
    let randomIndex = Math.floor(Math.random() * categorie.length);
    $("#imgCanvas").css("background-image", `url(${categorie[randomIndex]})`);
    console.log(categorie[randomIndex])
}

let pixSize = 0;
function slideAnim(elem, elem2) {
    if (elem == 'foto') {
        randomIndx(elem2);
        $('.frame-1').addClass('hidden')
        $('.frame-3').addClass('slide-in')
        $('.frame-2').addClass('slide-out')
    } else if (elem == 'level') {
        $('.frame-4').addClass('slide-in')
        $('.frame-3').addClass('slide-out').removeClass('slide-in')
        $('.frame-2').removeClass('slide-out')
    }
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


// select btn with keyboard
let selectedPhoto = 0;
let selectedLevel = 0;
let level = '';
let enter = 0
$(window).keydown(function (evt) {
    // console.log(evt.which)
    // select photo
    if (evt.which == 65) { // a
        let buttonIds = []
        const buttons = document.querySelectorAll('.buttonPhoto');
        buttons.forEach(button => {
            buttonIds.push(button.id);
        });
        $('.buttonPhoto').removeClass('selectedPhoto')
        $('#' + buttonIds[selectedPhoto]).addClass('selectedPhoto')
        selectedPhoto++;
        if (selectedPhoto == buttonIds.length) {
            selectedPhoto = 0
        }
    }
    if (evt.which == 13 && level !== 'true') { // enter 
        let selectedPh = $('.selectedPhoto').val()
        randomIndx(selectedPh);
        $('.frame-1').addClass('hidden')
        $('.frame-3').addClass('slide-in')
        $('.frame-2').addClass('slide-out')
        level = 'true'
        return;
    }

    // select level
    if (level == 'true') {
        if (evt.which == 65) { // a
            let btnIds = []
            const buttons = document.querySelectorAll('.buttonLevel');
            buttons.forEach(button => {
                btnIds.push(button.id);
            });
            $('.buttonLevel').removeClass('selectedLevel')
            $('#' + btnIds[selectedLevel]).addClass('selectedLevel')
            selectedLevel++;
            if (selectedLevel == btnIds.length) {
                selectedLevel = 0
            }
            enter = 1

        }
        if (evt.which == 13 && enter == 1) { // enter

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
            $('.frame-4').addClass('slide-in')
            $('.frame-3').addClass('slide-out').removeClass('slide-in')
            $('.frame-2').removeClass('slide-out')
            level = ''
            enter = 0

        }
    }
})

// del pix
const canvas = document.getElementById('imgCanvas');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');

let currentX = 0;
let currentY = 0;

function initializeCanvas() {
    canvas.width = 4000;
    canvas.height = 4000;
    ctx.fillStyle = '#939AF7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let time = 0;
let timer;
let isRunning = false;
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            time++;
            console.log(time)
        }, 1000);
    }
}
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// del pixels met space
let baseScore = 200;
let coeficient;
let score = 0;
$(window).keydown(function (evt) {
    if (evt.which == 32 && pixSize > 0) { // space
        startTimer()
        ctx.clearRect(currentX, currentY, pixSize, pixSize);
        currentX += pixSize;

        if (currentX >= canvas.width) {
            currentX = 0;
            currentY += pixSize;
        }
    }
    if (currentX >= canvas.width || currentY >= canvas.height) {
        stopTimer()
        $('.frame-5').addClass('slide-in');
        $('.frame-4').addClass('slide-out').removeClass('slide-in');
        $('.frame-3').removeClass('slide-out');
        switch (pixSize) {
            case 500:
                coeficient = 1
                break;
            case 250:
                coeficient = 2
                break;
            case 150:
                coeficient = 3
                break;

        }
        if (score == 0) {
            score = Math.round(((baseScore * coeficient) / time) * 100);
            $('#score-area').val(score);
            console.log(score)

            if (score > 0) {
                setTimeout(startConfetti, 1000);
            }

        }
    }
})
// del pixels met btn
// function showImg() {
//     startTimer()
//     ctx.clearRect(currentX, currentY, pixSize, pixSize);
//     currentX += pixSize;

//     if (currentX >= canvas.width) {
//         currentX = 0;
//         currentY += pixSize;
//     }

//     if (currentX >= canvas.width || currentY >= canvas.height) {
//         stopTimer()
//         $('.frame-5').addClass('slide-in');
//         $('.frame-4').addClass('slide-out').removeClass('slide-in');
//         $('.frame-3').removeClass('slide-out');
//         switch (pixSize) {
//             case 500:
//                 coeficient = 1
//                 console.log(score)
//                 break;
//             case 250:
//                 coeficient = 2
//                 break;
//             case 150:
//                 coeficient = 3
//                 break;

//         }
//         if (score == 0) {
//             score = ((baseScore * coeficient) / time) * 100;
//             $('#score-area').val(score);
//         }
//     }
// }
initializeCanvas();

// frame-5

// confetti
const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function startConfetti() {
    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 150 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}