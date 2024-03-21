
/*DECLARANDO A VARIAVEL*/
const goku = document.querySelector('.goku');
const obstaculo = document.querySelector('.obstaculo');


const jump = () => {
    goku.classList.add('jump');

setTimeout(() => {

    goku.classList.remove('jump');

}, 500);
}

const loop = setInterval(() => {

    console.log ('loop')

    const obstaculoPosition = obstaculo.offsetLeft;
    const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px', '');

    console.log(gokuPosition);
    
    /*POSIÇÃO QUE SE O GOKU ENCOSTAR NO OBSTACULO PERDE O GAME*/
    if (obstaculoPosition <= 60 && obstaculoPosition > 0 && gokuPosition < 100){

        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        goku.style.animation = 'none';
        goku.style.bottom = `${gokuPosition}px`;

        /*APÓS PERDER APARECER A IMAGEM GAME OVER*/
        goku.src = 'images/game-over.png';
        goku.style.width = '290px';
        goku.style.marginLeft = '39.5%';
        goku.style.bottom = '160px';
        goku.style.position = 'center';

        clearInterval(loop)
        document.addEventListener('keydown', restartGame);
    }

}, 10);

/*VARIAVEL PARA SEMPRE QUE DER GAME OVER, QUALQUER TECLA REINICIA O GAME*/
const restartGame = () => {
    location.reload();
}

document.addEventListener('keydown', jump);

function startGame() {
    document.querySelector('.overlay').style.display = 'none';
    document.addEventListener('keydown', jump);
}