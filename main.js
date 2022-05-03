function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0
while (i < listaDeTeclas.length) {
    listaDeTeclas[i].onclick = () => {
        tocaSom('#som_tecla_pom');
    };
    i += 1;

    console.log(listaDeTeclas);
}
