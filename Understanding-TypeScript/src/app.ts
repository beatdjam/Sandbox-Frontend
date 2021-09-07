// クラスデコレータ
function Logger(constructor: Function) {
    console.log('ログ出力');
    console.log(constructor);
}

function LoggerFactory(str: string) {
    return function (constructor: Function) {
        console.log('ログ出力 + str' + str);
        console.log(constructor);
    }
}

// template: dom
// hookId: Id
function WithTemplate(template: string, hookId: string) {
    return function<T extends {new(..._: any[]): {name: string}} > (originConstructor: T) {
        // デコレータを呼び出した
        // @ts-ignore
        return class extends originConstructor {
            constructor() {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@Logger
@LoggerFactory('hoge')
@WithTemplate('', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('initialize');
    }
}

const pers = new Person();
console.log(pers);

// プロパティデコレータ
function Log(target: any, propertyName: string | Symbol) {
    console.log(target, propertyName);
}

// アクセサデコレータ
function Log2(target: any, name: string, descripter: PropertyDescriptor) {
    console.log(target);
    console.log(name);
    console.log(descripter);
}

// メソッドデコレータ
function Log3(target: any, name: string | Symbol, descripter: PropertyDescriptor) {
    console.log(target);
    console.log(name);
    console.log(descripter);
}

// パラメータデコレータ
function Log4(target: any, name: string | Symbol, position: number) {
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('invalid number');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}