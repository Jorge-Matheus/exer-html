class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    noid() {
        console.log(`Olá, Meu nome é ${this.nome}, e tenho ${this.idade} anos.`)
    }
}

const people = new Pessoa("Matheus", 22)
people.noid()


class AltPeso {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }


    altuida() {
        console.log(`E tenho ${this.altura}cm, e ${this.peso} k/g`)
    }
}


const people1 = new AltPeso(1.75, 95.2)
people1.altuida()

console.log('__________________________________')


class Pessoa1 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    noid2() {
        console.log(`Olá, meu nome é ${this.nome}, e tenho ${this.idade} anos.`)
    }
}

const people2 = new Pessoa1("Osmar", 60)
people2.noid2()


class AltPeso2 {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }


    altuida2() {
        console.log(`E, tenho ${this.altura}cm, E ${this.peso} k/g`)
    }
}


const people3 = new AltPeso2(1.62, 73.2)
people3.altuida2()



