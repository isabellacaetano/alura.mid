function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio)
}
const listaDeTeclas = document.querySelectorAll('.tecla');




for (contador = 0; contador < listaDeTeclas.lenght){
    const instrumento = listaDeTeclas[contador]
    
    const tecla = listaDeTeclas [contador];

const idAudio = ´#som_${instrumento}´;
tocaSom('#om_tecla_clap');
tecla.onclick = function (){
tocaSom(idAudio);
}

};
