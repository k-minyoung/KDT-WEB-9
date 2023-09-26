import { useState,useCallback } from 'react'

// function ChildComponent({onClick}) {
//     // console.log('Child Component')
//     return(
//         <>
//         <button onClick={onClick}>PLUS</button>
//         </>
//     )
// }

export default function UseCallback () {

    const [count, setCount] = useState(0)
    // const [inputValue,setInputValue] = useState("")

    //useCallback 미사용
    const plusCount= () => {
        console.log('plusCount',count)
        setCount(()=> count + 1)
    }

    //useCallback 사용
    //반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸줘서 함수를 메모이제이션션
    const plusCountCallback = useCallback(() => {
        console.log('plusCountCallback',count)
        setCount((prev) => prev + 1)
    },[])

    return(
        <>
            {/* <input value={inputValue} onChange={(e)=>onChange(e)} /> */}
            {/* <ChildComponent onClick={plusCountCallback} /> */}
            <button onClick={plusCountCallback}>plus</button>
            <p>{count}</p>
        </>
    )
}