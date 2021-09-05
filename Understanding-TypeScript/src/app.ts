// デコレータ
function Logger(constructor: Function) {
    console.log('ログ出力');
    console.log(constructor);
}

function LoggerFactory(str : string){
    return function(constructor: Function) {
        console.log('ログ出力 + str' + str);
        console.log(constructor);
    }
}

// template: dom
// hookId: Id
function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
            hookEl.innerHTML = template;
            const p = new constructor();
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// 複数のデコレータを定義すると下から実行される
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