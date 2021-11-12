type Idade = number;

function exibirPessoa(nome: string, idade: Idade){
    console.log(`O nome é ${nome} e tem ${idade} anos`);
}

function exibirAnimal(nome: string, especie: string, idade: Idade){
    console.log(`O nome é ${nome}, ${especie} e tem ${idade} anos`);
}

exibirPessoa('Marina', 8);
exibirAnimal('Simba', 'mamifero', 9);