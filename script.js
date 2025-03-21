let audios = [
    {caminho:'musica1.mp3', legenda:'Saudades do tempo'},
    {caminho:'musica2.mp3', legenda:'Boi soberano'},
    {caminho:'musica3.mp3', legenda:'Cabeça de gelo'},
    {caminho:'musica4.mp3', legenda:'Ceu azul'},
    {caminho:'musica5.mp3', legenda:'Pisando descalço'},
    {caminho:'musica6.mp3', legenda:'Presente de um beija flor'},
    {caminho:'musica7.mp3', legenda:'Tordilho negro'},
    {caminho:'musica8.mp3', legenda:'Um bom lugar'},
    {caminho:'musica9.mp3', legenda:'eletronica'},
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
