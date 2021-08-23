let userInput: unknown;
userInput = 5;
userInput = 'Max';

// unknown型はanyと違って型がチェックされるので特定の型を持ったものに代入しようとするとエラーになる
// 代入するときには型チェックしてそのブロック内で扱う必要がある
let userName: string;
if (typeof userInput === 'string') {
    userName = userInput;
}

// 値を返し得ない、必ずエラーを投げるなどの返り値の型としてneverがある
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('Error occurred', 500);