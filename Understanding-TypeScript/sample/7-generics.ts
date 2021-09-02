// unionも持てる
// const names: Array<string | number> = ['Max', 'Manuel'];
//
// const names: Array<string> = ['Max', 'Manuel'];
//
// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//        resolve('10');
//     }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// T,Uの交差型であることを推論できる
const mergedObject = merge({name: 'Max'}, {age: 30});
console.log(mergedObject.age);
console.log(mergedObject.name);

// 明示的にこう書くのと等価
const mergedObject2 = merge<{ name: string }, { age: number }>({name: 'Max'}, {age: 30});

// lenghがあればいいのでstringとかarrayでも使える
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('hoge'));

// keyofでobjectのkeyであることを指定できる
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

// Genericsを使ったclass
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item : T) {
        this.data.push(item);
    }
    removeItem(item : T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) : CourseGoal {
    // Partialで宣言するとあとからプロパティを設定できる
    // builderみたい
    let courseGoal : Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; // 最後にasしてやらないといけないのはキモい
}

// 読み取り専用の配列作れる
// freezeみたいな？
const names: Readonly<string[]> = ['Max', 'Manu'];

