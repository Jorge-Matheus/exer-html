class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    nomeid() {
        console.log(`Olá, meu nome é ${this.nome}, e tenho ${this.idade} anos.`)
    }
}


const people = new Pessoa("Matheus", 22)
people.nomeid()


class AlturaPeso {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }


    altpeso() {
        console.log(`e tenho ${this.altura}cm, e ${this.peso }k/g. `)
    }
}


const people2 = new AlturaPeso(175, 98)
people2.altpeso()

