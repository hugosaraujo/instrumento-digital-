function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0
while (i < listaDeTeclas.length) {
    const teclas = listaDeTeclas[i];
    const instrumento = teclas.classList[1];

    const idAudio = `#som_${instrumento}`
    console.log(idAudio);

    listaDeTeclas[i].onclick = () => {
        tocaSom(idAudio);
    };
    i += 1;
}
