function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0
for (let i = 0; i < listaDeTeclas.length; i++) {

    const teclas = listaDeTeclas[i];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[i].onclick = () => {
        tocaSom(idAudio);
    };
}
