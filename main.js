function tocaSom (idElementAudio) {
    document.querySelector().play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;

    contador += 1

    console.log(contador)
}