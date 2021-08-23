const userName = 'Max';

let userAge = 30;
userAge = 29;

const add = (a: number, b: number = 0) => a + b;
const printOutput: (output: string | number) => void = output => console.log(output);

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = {
    personName: 'hoge',
    age: 30
}
const copiedPerson = {
    ...person
};

const addRest = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const {personName, age} = person;