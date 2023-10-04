function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio)
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


while(contador < 9){
listaDeTeclas[contador].onclick = function (){
    tocaSom('som_tecla_cap');
}
}