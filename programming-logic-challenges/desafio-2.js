// PROJETO CALCULADORA DE PARTIDAS RANKEADAS
//entrada de dados
let playerWins = 1500;
let playerDefeats = 1415;

//funções com parâmetros para processamento de entradas
function whichIsTheRank (wins, defeats) {
    let valRank = wins - defeats;
    let rank = "";
    switch (true) {
        case valRank <= 10:
            rank = "Ferro";
            break;
        case valRank <= 20:
            rank = "Bronze";
            break;
        case valRank <= 50:
            rank = "Prata";
            break;
        case valRank <= 80:
            rank = "Ouro";
            break;
        case valRank <= 90:
            rank = "Diamante";
            break;
        case valRank <= 100:
            rank = "Lendário";
            break;
        case valRank >= 101:
            rank = "Imortal";
            break;
    }
    return rank
}

function calRank(wins, defeats) {
    let valWins = wins - defeats;
    return valWins
}

//saída de dados

console.log("O Herói tem o saldo de " + calRank(playerWins, playerDefeats) + ", e está no nível de " + whichIsTheRank(playerWins, playerDefeats) + ".");