/* type Idade = number;

function exibirPessoa(nome: string, idade: Idade){
    console.log(`O nome é ${nome} e tem ${idade} anos`);
}

function exibirAnimal(nome: string, especie: string, idade: Idade){
    console.log(`O nome é ${nome}, ${especie} e tem ${idade} anos`);
}

exibirPessoa('Marina', 8);
exibirAnimal('Simba', 'mamifero', 9); */

/* function showStatus(status: number | boolean){
    if (typeof status === 'number'){
        console.log(status.toExponential(2));
        console.log('Status é um Number');
    }else if (typeof status === 'boolean'){
        console.log(status.valueOf());
        console.log('Status é um Boolean');
    }
}

showStatus(4); */

type PessoaFisica = {
    nome: string;
    cpf: string;
}

type PessoaJuridica = {
    nome: string;
    cnpj: string;
}

const PF: PessoaFisica = {
    nome: 'Marina',
    cpf: '0000'
}

const PJ: PessoaJuridica = {
    nome: 'Marina',
    cnpj: '5555'
}

function showPessoa(pessoa: PessoaFisica | PessoaJuridica) {
   if('cpf' in pessoa) {
    console.log(pessoa.cpf);
   }else {
    console.log(pessoa.cnpj);
   }
}

showPessoa(PF);
