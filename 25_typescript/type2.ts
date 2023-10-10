//인터페이스
interface Student {
    name: string,
    grade : number,
    isPassed? : boolean,
}

let me : Student = {
    name : 'min',
    grade : 4,
    // isPassed : false,
}

//타입
type Gender = 'Female' | 'male' | 'Boy' | "Girl" | 'helicopter';
const gender: Gender = 'Boy'


