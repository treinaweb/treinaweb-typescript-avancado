"use strict";
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
var carros = ['Palio', 'Fiesta', 'Fit'];
var numPrimos = [2, 3, 5];
function pegarPrimeiroElemento(lista) {
    return lista[0];
}
console.log(pegarPrimeiroElemento(numPrimos));
console.log(pegarPrimeiroElemento(carros));
