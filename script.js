let cartas = [];

function iniciarJogo(){
    let qntCartas = prompt("Com quantas cartas deseja jogar?");
    if(qntCartas%2 !== 0 || qntCartas > 14 || qntCartas < 4){
        do{
            qntCartas = prompt("Numero invalido!! Por favor digite um numero par entre 4 e 14!");
        }while(qntCartas%2 !== 0 || qntCartas > 14 || qntCartas < 4)
    }
    colocarCartas(qntCartas);
}

function colocarCartas(numero){
    
}

iniciarJogo();