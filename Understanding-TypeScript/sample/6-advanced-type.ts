// 交差型(Intersection Types)
type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

// Object型の交差型は両方を結合したtypeを定義する
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: '',
    privileges: ['creat-server'],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;
// Union型の場合は交差している型(双方が持っている型)になる
type Universal = Combinable & Numeric;

// function overload
function add(a: number, b:number): number;
function add(a: string, b: string): string;
// type guard
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

// 型ガード
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log('Privileges :' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log('Start Date :' + emp.startDate);
    }
}

class Car {
    drive() {
        console.log('car driving');
    }
}

class Truck {
    drive() {
        console.log('truck driving');
    }

    loadCargo(amount: number) {
        console.log('load cargo :' + amount);
    }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

// 判別可能なUnion型
interface Bird {
    type: 'bird',
    flyingSpeed: number;
}

interface Horse {
    type: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

// typeで実際の型を判別する
function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}

// 型キャスト
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input') as HTMLInputElement;

// !を使わないとき
if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'hoge';
}

// index型
interface ErrorContainer {
    // {email: 'invalid address', username: 'invalid name'}
    [prop: string] : string;
}

const errorBag: ErrorContainer = {
    email: 'invalid address',
    username: 'invalid name',
}

// 関数オーバーロード
const result = add(1, 5);
const result2 = add('Hello', 'TypeScript');
result2.split(' ');

// optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        description: 'TypeScript',
    }
}

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing Operator
const userInput = null;
// これは空文字でもデフォルト値が入っちゃう
// const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? 'DEFAULT'; // これだとnullかundefinedのときだけデフォルト値になる
