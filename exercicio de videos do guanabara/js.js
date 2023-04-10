class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    
    nomid() {
        console.log(`Olá, meu nomé é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const people = new Pessoa("Matheus" , 22)
people.nomid()


class AltPeso {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }


    nomid1() {
        console.log(`E tenho ${this.altura}cm, e peso ${this.peso} k/g`)
    }
}


const peopleat = new AltPeso(175, 84.3)
peopleat.nomid1()

console.log('_______________________________________')

class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    nomd2() {
        console.log(`Meu nome é ${this.nome}, e tenho ${this.idade} anos.`)
    }
}


const people2 = new Pessoa2("Maria", 56)
people2.nomd2()


class AltPeso2 {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }


    altpes1() {
        console.log(`E tenho ${this.altura}cm, e peso ${this.peso} k/g`)
    }
}

const peopleat2 = new AltPeso2(1.55, 102.2)
peopleat2.altpes1()