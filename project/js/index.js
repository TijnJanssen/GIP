let pixSize = 0;
function slideAnim(elem, elem2 ) {
    if (elem == 'foto') {
        $('.frame-1').removeClass('frame-1')
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
    return pixSize;
}

function showImg() {
    ctx.clearRect(currentX, currentY,pixSize,pixSize);
    currentX +=pixSize;

    if (currentX >= canvas.width) {
        currentX = 0;
        currentY +=pixSize;
    }

    if (currentY >= canvas.height) {
        $('.frame-5').addClass('slide-in')
        $('.frame-4').addClass('slide-out').removeClass('slide-in')
        $('.frame-3').removeClass('slide-out')
    }
}
// function showImg() {
//     ctx.clearRect(currentX, currentY,pixSize,pixSize);
//     currentX +=pixSize;

//     if (currentX >= canvas.width) {
//         currentX = 0;
//         currentY +=pixSize;
//     }else if(currentX = ){

//     }elseif (currentY >= canvas.height) {
//     }else{
//         $('.frame-5').addClass('slide-in')
//         $('.frame-4').addClass('slide-out').removeClass('slide-in')
//         $('.frame-3').removeClass('slide-out')
//     }
// }