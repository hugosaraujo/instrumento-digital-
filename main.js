function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Esse elemento não existe ou é inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const teclas = listaDeTeclas[i];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = () => {
        tocaSom(idAudio);
    }

    teclas.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            teclas.classList.add('ativa');
        }
    }
    teclas.onkeyup = () => {
        teclas.classList.remove('ativa');
    }
}