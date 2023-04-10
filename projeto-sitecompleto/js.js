class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    nomeid() {
        console.log(`Olá, Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const people1 = new Pessoa("Matheus", 22)
people1.nomeid()

class AltPeso {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }

    alturapeso() {
        console.log(`E tenho ${this.altura}cm, e ${this.peso} k/g.`)
    }
}

const people2 = new AltPeso(1.75, 90)
people2.alturapeso()

console.log('____________________________________________')
console.log(' ')

class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    nomeid2() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const people3 = new Pessoa2("Maria", 58)
people3.nomeid2()


class AltPeso2 {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }


    alturapeso2() {
        console.log(`E tenho ${this.altura}cm, e ${this.peso} k/g.`)
    }
}


const people4 = new AltPeso2(1.51, 110)
people4.alturapeso2()
