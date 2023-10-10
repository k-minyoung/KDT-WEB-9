let value: string | number ='안녕하세요';

value = 1000

// 함수에 모든 값이 들어 올 수 있다 => 제네릭 타입 사용
function getValue(val : string | number | boolean | object | null) {
    return val;
}
getValue('hi')

//위 함수를 제네릭 타입으로 변경
function getValue2<T>(val : T): T {
    return val;
}
console.log(getValue2<string>('문자열'))
console.log(getValue2<number>(100))

function arrLength<T>(arr: T[]) {
    return arr.length;
}
console.log(arrLength<string>(['a','b','c']))
console.log(arrLength<number>([1,2,3,4,5,6]))

function printFunc<T>(x: T, y: T) {
    console.log(x)
    console.log(y)
    return x
}
console.log(printFunc<string>('hi','hello'))