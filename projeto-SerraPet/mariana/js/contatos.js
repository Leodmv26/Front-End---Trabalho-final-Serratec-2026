function moverCachorro() {
    var cachorro = document.getElementsByClassName("animacao")[0];
    var posicao = Math.random() * (70 - 10) + 10;
    cachorro.style.top = posicao + '%';
}

setInterval(moverCachorro, 6000);