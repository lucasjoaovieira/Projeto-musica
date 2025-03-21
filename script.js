let audios = [
    {caminho:'musica1.mp3', legenda:'Matuto de verdade'},
    {caminho:'musica2.mp3', legenda:'Arash'},
    {caminho:'musica3.mp3', legenda:'Paula Fernandes'},
    {caminho:'musica4.mp3', legenda:'Hayit'},
    {caminho:'musica5.mp3', legenda:'Helena'},
    {caminho:'musica6.mp3', legenda:'Paula Fernandes'},
    {caminho:'musica7.mp3', legenda:'Paula Fernandes'},
    {caminho:'musica8.mp3', legenda:'Paula Fernandes'},
    {caminho:'musica9.mp3', legenda:'Titanic'},
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
