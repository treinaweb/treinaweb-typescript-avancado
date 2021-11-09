"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* function minSize(size: number){
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
function delay(time) {
    return function (target, key, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            setTimeout(function () {
                method.apply(_this, args);
            }, time);
        };
        return descriptor;
    };
}
var Timer = /** @class */ (function () {
    function Timer() {
    }
    Timer.prototype.showMsg = function () {
        console.log("mensagem após 5 segundos");
    };
    Timer.prototype.newTimer = function (cont) {
        if (cont === 0) {
            return 0;
        }
        else {
            console.log("Contador em " + cont);
            return this.newTimer(cont - 1);
        }
    };
    __decorate([
        delay(5000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Timer.prototype, "showMsg", null);
    __decorate([
        delay(500),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Number)
    ], Timer.prototype, "newTimer", null);
    return Timer;
}());
var t = new Timer();
t.showMsg();
t.newTimer(5);
