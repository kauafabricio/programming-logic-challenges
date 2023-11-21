class Heroes {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        switch (true) {
            case this.tipo === "mago":
                console.log(`O ${this.tipo} ${this.nome} atacou usando magia!`);
                break;
            case this.tipo === "guerreiro":
                console.log(`O ${this.tipo} ${this.nome} atacou usando a espada!`);
                break;
            case this.tipo === "monge":
                console.log(`O ${this.tipo} ${this.nome} atacou usando artes marciais!`);
                break;
            case this.tipo === "ninja":
                console.log(`O ${this.tipo} ${this.nome} atacou usando shuriken!`);
                break;
        }
    }
}
let firstHero = new Heroes("Jorge-Ben", 19, "guerreiro");
firstHero.atacar();
let secondHero = new Heroes("David-Bowie", 30, "ninja");
secondHero.atacar();