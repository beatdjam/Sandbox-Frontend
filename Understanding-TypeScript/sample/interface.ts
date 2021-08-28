// interface Person {
//     name: string;
//     age: number;
//
//     greet(phrase: string): void;
// }

// interfaceと似たようなことができるけど、interfaceはオブジェクトの表現に特化している
// type Person = {
//     name: string;
//     age: number;
//
//     greet(phrase: string): void;
// }

// 関数のカスタム型と同じようなこともできる
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (n1: number, n2: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

interface Named {
    readonly name: string;
    outputName?: string; // Optional
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    constructor(public name: string, public readonly age: number) {
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }

}

let user: Person;

user = {
    name: 'Max',
    age: 30,

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user.greet('Hello');

let user1: Greetable;
user1 = new Person('Max', 30);
user1.greet('Hello I am');
console.log(user1);