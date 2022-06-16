const cartas = ["./imagens/bobrossparrot.gif",
"./imagens/explodyparrot.gif",
"./imagens/fiestaparrot.gif",
"./imagens/metalparrot.gif",
"./imagens/revertitparrot.gif",
"./imagens/tripletsparrot.gif",
"./imagens/unicornparrot.gif",];
const cartasEmJogo = [];
const jogadas = [];
let contador = 0;
let last;
function comparador() {
    return Math.random() - 0.5;
}


function iniciarJogo(){
    let qntCartas = prompt("Com quantas cartas deseja jogar?");
    if(qntCartas%2 !== 0 || qntCartas > 14 || qntCartas < 4){
        do{
            qntCartas = prompt("Numero invalido!! Por favor digite um numero par entre 4 e 14!");
        }while(qntCartas%2 !== 0 || qntCartas > 14 || qntCartas < 4)
    }
    for(let i = 0; i < (qntCartas/2); i++){
        cartasEmJogo.push(cartas[i]);
        cartasEmJogo.push(cartas[i]);
    }
    cartasEmJogo.sort(comparador);
    colocarCartas(qntCartas, cartasEmJogo);
}

function colocarCartas(numero, array){
    let local = document.querySelector(".jogo")
    for(let i = 0; i < numero; i++){
        local.innerHTML+= `        
        <div>
        <div class="cartas front" onclick="selecionar(this, ${[i]})">
            <img src="./imagens/front.png">
        </div>
        <div class="cartas back">
            <img src="${cartasEmJogo[i]}">
        </div>
        </div>  
        `
    }
}

function selecionar (elemento, indice) {
    const pai = elemento.parentNode;
    let back = pai.querySelector(".back");
    back.classList.add("virada")
    elemento.classList.add("virada");
    contador++;
    jogada(indice, elemento, back);
}

function jogada(indice, elemento, back){
    if(contador%2 === 0){
        back.classList.toggle("virada");
        elemento.classList.toggle("virada");
        console.log(contador);
        console.log(elemento)
        console.log(back)
        if(cartasEmJogo[indice] !== cartasEmJogo[last]){
            back.classList.toggle("virada");
            elemento.classList.toggle("virada");
        }
    }else{
        last = indice;
    }
}

iniciarJogo();