"use strict";
/* type Idade = number;

function exibirPessoa(nome: string, idade: Idade){
    console.log(`O nome é ${nome} e tem ${idade} anos`);
}

function exibirAnimal(nome: string, especie: string, idade: Idade){
    console.log(`O nome é ${nome}, ${especie} e tem ${idade} anos`);
}

exibirPessoa('Marina', 8);
exibirAnimal('Simba', 'mamifero', 9); */
var PF = {
    nome: 'Marina',
    cpf: '0000'
};
var PJ = {
    nome: 'Marina',
    cnpj: '5555'
};
function showPessoa(pessoa) {
    if ('cpf' in pessoa) {
        console.log(pessoa.cpf);
    }
    else {
        console.log(pessoa.cnpj);
    }
}
showPessoa(PF);
//# sourceMappingURL=types.js.map