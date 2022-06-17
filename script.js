const cartas = ["./imagens/bobrossparrot.gif",
"./imagens/explodyparrot.gif",
"./imagens/fiestaparrot.gif",
"./imagens/metalparrot.gif",
"./imagens/revertitparrot.gif",
"./imagens/tripletsparrot.gif",
"./imagens/unicornparrot.gif",];

const cartasEmJogo = [];
let contador = 1;
let selecionados = [];
let qntCartas;

function comparador() {
    return Math.random() - 0.5;
}


function iniciarJogo(){
    qntCartas = prompt("Com quantas cartas deseja jogar?");
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
    selecionados.push(indice);
    if(contador%2 === 0){
        setTimeout(jogada, 1000, indice);
    }
    contador++;
}

function jogada(indice){
    const cartasCampo = document.querySelectorAll(".cartas");
    let pos = selecionados[selecionados.length-2];
    if(cartasEmJogo[indice] !== cartasEmJogo[pos]){
        cartasCampo[pos*2].classList.remove("virada");
        cartasCampo[(pos*2)+1].classList.remove("virada");
        cartasCampo[indice*2].classList.remove("virada");
        cartasCampo[(indice*2)+1].classList.remove("virada");
        return;
    }
    const cartasViradas = document.querySelectorAll(".cartas.virada");
    if( cartasViradas.length === cartasCampo.length){
        alert(`Você ganhou em ${contador-1} jogadas!`);
    }
}


iniciarJogo();