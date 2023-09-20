import { useState } from "react";

export default function CounterFunc() {

    const [number, setNumber] = useState(0); //클래스형의 state = { number : 0}
    const [name, setName] = useState('');  //이렇게 state 추가

    const handleIncrement = () => {
        setNumber(number + 1);
    }
    const handleDecrement = () => {
        setNumber(number - 1);
    }

    return <div>
        <h1>{number}</h1>
        <button onClick={handleIncrement}>증가</button>
        <button onClick={handleDecrement}>감소</button>
    </div>

}