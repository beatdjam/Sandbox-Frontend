// セクション2 9~14
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) console.log(phrase + result);
    else return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

// セクション2 15~
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

// object
const person: {
    name: string;
    age: number;
    hobbies: string[]; // array
    // role: [number, string] // tuple
    role: Role
} = {
    name: 'taro',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR,
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name)


