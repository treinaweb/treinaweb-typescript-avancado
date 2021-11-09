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

function minSize(size: number){
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
console.log(lgTV.size);