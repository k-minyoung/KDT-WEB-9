//자바스크립트의 경우
// function jsFunc(a, b) {
//     console.log(a)
//     console.log(b)
// }
// jsFunc(1,2);

//타입스크립트의 경우
//기본
function tsFunc(a: number, b: number, c?: number) : number {
    return a + b;
}
tsFunc(1,2,3);
tsFunc(4,5)

//화살표함수
const arrowTsFunc = (a: number, b: number, c?: number) : number => {
    return a + b;
}

//리턴 생략된 경우(축약형)
const arrowTsFunc2 = (a: number, b:number) => a * b

//리턴 없는 경우
function printFunc(a: string , b: string): void {
    console.log(a,b)
}
/////////////////////////////////////

//never 타입
//never : 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
//항상 함수 끝에 도달하지 않는 경우
function goingOn(a:number):never {
    while(true) {
        console.log('go')
    }
}
goingOn(1);