const pet = document.querySelector("#pet");
const display = document.querySelector("#pontos");

const alimentar = document.querySelector("#alimentar");
const brincar = document.querySelector("#brincar");
const dormir = document.querySelector("#dormir");

function addHistorico(texto, tipo){
    const li = document.createElement('li');
    const horario = new Date().toLocaleTimeString();
    const historico = document.querySelector("#historico");


    li.textContent = `${horario} -  ${texto}`;
    historico.appendChild(li);

    if(historico.children.length > 10){
        historico.removeChild(historico.firstChild);
    }

    if(tipo == 'triste'){
        li.classList.add('triste');
    }
}




let pontos = 0;
let tempoInativo = 0;
//Alimentar
alimentar.addEventListener('click', function(){
    pet.innerHTML = '<img src="../icones/comeu.png" width=200 height=150>';
    pontos = pontos++;
    display.textContent = pontos;
    addHistorico('Comeu!');

    resetarTempoInativo();
});

//Brincar
brincar.addEventListener('click', function(){
    pet.innerHTML = '<img src="../icones/brincou.png" width=200 height=150>';
    pontos++;
    display.textContent = pontos;
    addHistorico('Brincou!');

    resetarTempoInativo();
});

//Dormir
dormir.addEventListener('click', function(){
    pet.innerHTML = '<img src="../icones/dormiu.png" width=200 height=150>';
    pontos++;
    display.textContent = pontos;
    addHistorico('Dormiu!');

    resetarTempoInativo();
});

setInterval(function(){
    tempoInativo += 1;

    if(tempoInativo >= 10){
        pontos -= 1;
        if(pontos < 0) pontos = 0;
        display.textContent = pontos;
        pet.textContent = '😿';
        addHistorico('Está Triste!' , 'triste');
    }
}, 1000)

function resetarTempoInativo(){
    tempoInativo = 0;
}