type Combinable = number | string;
type ConversionDescripter = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescripter) {
    let result;
    // 型の検査をするとブロック内でその型を推論する
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

console.log(combine(30, 26, 'as-number'));
console.log(combine(30, 26, 'as-text'));
console.log(combine('test', ' hoge', 'as-text'));