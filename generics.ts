/* class Pessoa<T extends string | number>{
    idade: T;

    constructor(idade: T){
        this.idade = idade;
    }

    setIdade(idade: T){
        this.idade = idade;
    }
}

let pessoa = new Pessoa(5);
console.log(pessoa.idade);
pessoa.setIdade(5);
console.log(pessoa.idade); */

/* let carros: string[] = ['Palio', 'Fiesta', 'Fit'];
let numPrimos: number[] = [2, 3, 5];

function pegarPrimeiroElemento<T>(lista: T[]): T{
    return lista[0]
}

console.log(pegarPrimeiroElemento(numPrimos));
console.log(pegarPrimeiroElemento(carros)); */