const pet = document.querySelector("#pet");
const display = document.querySelector("#pontos");

const alimentar = document.querySelector("#alimentar");
const brincar = document.querySelector("#brincar");
const dormir = document.querySelector("#dormir");

const historico = document.querySelector("historico");

function addHistorico(texto){
    const li = document.createElement('li');
    li.textContent = texto;
    historico.appendChild(li);
}

let pontos = 0;

//Alimentar
alimentar.addEventListener('click', function(){
    pet.innerHTML = '😋';
    pontos++;
    display.textContent = pontos;
    addHistorico('Comeu!');

});

//Brincar
brincar.addEventListener('click', function(){
    pet.innerHTML = '😘👌';
    pontos++;
    display.textContent = pontos;
    addHistorico('Brincou!');
});

//Dormir
dormir.addEventListener('click', function(){
    pet.innerHTML = '😴';
    pontos++;
    display.textContent = pontos;
    addHistorico('Dormiu!');
});

