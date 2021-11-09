function setOS(os: string){
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
console.log(tvSony);