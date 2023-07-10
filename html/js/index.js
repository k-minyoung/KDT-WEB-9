//변수란 특정 값을 저장하는 공간
// abc = "abcdef~~xyz"

//키워드 변수이름 = 값
//키워드 : var , let , const

// var : 재선언, 재할당 가능
var number = 5;//변수의 선언,할당

var number1;//변수를 선언
munber1 = 5;//변수의 값을 할당


// let : 재선언 불가능, 재할당 가능
let string = "가나다라"; //문자열은 "" 해줘야 함
string = "마바사아" //가능


// const : 재선언, 재할당 불가능
const string2 = "가가가" //선언과 할당을 동시에 해줘야 함

let number2 = 1;
let string3 = `aaaa`

let name =`나`
console.log(`안녕하세요 ${name}입니다.`)

let me = `안녕하세요 ${name}입니다.`
console.log(me)

let names = ["홍길동", "성춘향", "짱구"]
//인덱싱 :번호를 매김
//인덱스 :번호, 0부터 시작!!!
console.log(names[0])


console.log(names.length)
//배열의 길이를 출력, 배열의 길이 -> 배열 안에 저장되어있는 값의 개수

//let names = ["홍길동", "성춘향", "짱구"]

names.push("짱아"); //배열의 마지막에 값을 추가하는 기능
// names = ["홍길동", "성춘향", "짱구", "짱아"];

names.pop() //배열의 가장 마지막 값을 삭제
// names = ["홍길동", "성춘향", "짱구"];

names.unshift("신형만")// 배열의 가장 앞에 값을 추가하는 기능
// names = ["신형만","홍길동", "성춘향", "짱구"]

names.shift()// 배열의 가장 앞의 값을 삭제하는 기능
// names = ["성춘향", "짱구"]

let index = names.indexOf("짱구") // 배열 안에 "짱구" 값이 몇번 인덱스에 위치해 있는지. 숫자로 반환, 결과를 담아둬야 하므로 index로 넣어줬음
//만약 값이 없을 경우엔, -1 출력, 있을 경우 인덱스가 나옴
console.log(index);
//2

let isIncludes = names.includes("짱아")//값이 포함되어 있는지 판별하는 기능, true or false로 반환
console.log(isIncludes);
//false


//실습--------------------------
let colors = ["red","orange","yellow","green","blue","navy","black"]
console.log(colors[0],colors[1],colors[2],colors[3])

let index2 = colors.indexOf("yellow");
console.log(index2)

colors.push("gray");
console.log(colors)

let black=colors.indexOf("black");
console.log(black)

colors.reverse()
console.log(colors)



