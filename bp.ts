//var, let, const

/* for(let i = 0; i < 5; i++){
    console.log(i);
}

let i;
console.log(i); */

//camelCase
/* let nome;
function setNome(); */

//PascalCase
/* class Pessoa{}
interface IAnimal{} */

//any
/* let vA: any = 10;
let vU: unknown = 10;

let s1: string = vA;
let s2: string = vU;

vA.doSomething();
vU.doSomething(); */

//overloads - union types

/* interface Moment{
    utcOffSet(a: string | number): Moment;
}

let y: Moment;
function fcn(x: string | number){
    return y.utcOffSet(x);
} */