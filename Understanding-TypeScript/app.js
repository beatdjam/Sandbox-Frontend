function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// let combineValues : Function;
var combineValues;
combineValues = add;
console.log(combineValues(1, 2));
