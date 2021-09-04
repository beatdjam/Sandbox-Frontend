// デコレータ
function Logger(constructor: Function) {
    console.log('ログ出力');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('initialize');
    }
}

const pers = new Person();
console.log(pers);