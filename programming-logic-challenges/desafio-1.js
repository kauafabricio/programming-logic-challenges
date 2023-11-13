// variáveis e vetores
var heroiUm = ["Morgana_Feiticeira", 10500];
var nivelHeroiUm = "";
// estrutura de decisão, switch case
switch (true) {
    case heroiUm[1]<= 1000:
        nivelHeroiUm = "Ferro";
        break;
    case heroiUm[1]<= 2000:
        nivelHeroiUm = "Bronze";
        break;
    case heroiUm[1]<=5000:
        nivelHeroiUm = "Prata";
        break;
    case heroiUm[1]<=7000:
        nivelHeroiUm = "Ouro";
        break;
    case heroiUm[1]<= 8000:
        nivelHeroiUm = "Platina";
        break;
    case heroiUm[1]<= 9000:
        nivelHeroiUm = "Ascendente";
        break;
    case heroiUm[1]<=10000:
        nivelHeroiUm = "Imortal";
        break;
    case heroiUm[1]>=10001:
        nivelHeroiUm= "Radiante";
        break;
}
// output
var outputFinal = ("O Herói de nome " + heroiUm[0] + " está no nível " + "{" + nivelHeroiUm +"}.");
console.log(outputFinal);