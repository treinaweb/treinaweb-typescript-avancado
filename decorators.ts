/* function setOS(os: string){
    return (target: any) => {
        return class extends target {
            version = os;
        }
    }
}


@setOS('WebOs 3.0')
class LG{    
}

let tvLg = new LG();
console.log(tvLg);

@setOS('Android TV 2.1')
class Sony{    
}

let tvSony = new Sony();
console.log(tvSony); */

/*function minSize(size: number){
    return (target: any, key: any) => {
        let val = target[key]

        const getter = () => val;
        const setter = (value: number) => {
            if(value < size){
                console.log(`O tamanho da tela deve ser maior que ${size} polegadas`);
            } else {
                val = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

class LG{
    @minSize(10)
    size: number;

    constructor(size: number){
        this.size = size;
    }
}

let lgTV = new LG(10);
console.log(lgTV.size); */

/* function delay(time: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        let method = descriptor.value;

        descriptor.value = function (...args: any) {
            setTimeout(() => {
                method.apply(this, args)
            }, time);
        }

        return descriptor;
    }
} */ 


/* class Timer {

    @delay(5000)
    showMsg(){
        console.log("mensagem após 5 segundos");
    }

    @delay(500)
    newTimer(cont: number): number{
        if (cont === 0 ) {
            return 0
        }else {
            console.log(`Contador em ${cont}`);
            return this.newTimer(cont - 1);
        }
    }
}

let t = new Timer();
t.showMsg();
t.newTimer(5); */