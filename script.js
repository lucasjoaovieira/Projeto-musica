let audios = [
    {caminho:'Boi Soberano.mp3', legenda:'Matuto de verdade'},
    {caminho:'Mamba Negra.mp3', legenda:'Arash'},
    {caminho:'Céu Azul.mp3', legenda:'Paula Fernandes'},
    {caminho:'Cabeça de Gelo.mp3', legenda:'Hayit'},
    {caminho:'Pisando Descalso.mp3', legenda:'Helena'},
    {caminho:'Presente De Um Beija-Flor.mp3', legenda:'Paula Fernandes'},
    {caminho:'Um Bom lugar.mp3', legenda:'Paula Fernandes'},
    {caminho:'Tordilho Negro Teixeirinha.mp3', legenda:'Paula Fernandes'},
    {caminho:'Saldades do Tempo.mp3', legenda:'Titanic'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});

