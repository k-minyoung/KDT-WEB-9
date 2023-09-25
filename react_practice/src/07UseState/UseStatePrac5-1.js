import { useState } from "react";

export default function UseStatePrac5_1 () {
    const [todoList,setTodoList] = useState("")
    const [checkList,setCheckList] = useState([])

    
    const newTodo = {
        text : todoList,
        id : Date.now(),
        checked : false
    }
    const addList = () => {
        if(checkList.length >= 10) {
            alert('할일이 너무 많아요')
            setCheckList([...checkList,newTodo])
        }
        setCheckList([...checkList,newTodo])
    }


    const toggleCheck = (id)=> {
       setCheckList(
            checkList.map((todo) => {
                console.log(todo);
                return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
                //기존 todo들의 모든속성은 놔두고, checked속성만 반전시킨다는 뜻(false에서 true로)
            })
        );
    }
    const remove = () => {
        const result = checkList.filter((value) => value.checked === false);
        //그리고 false인것만 골라서 다시 렌더링
        setCheckList(result);
    }


    return(
        <>
            <input type="text" placeholder="할 일 입력" onChange={(e)=>setTodoList(e.target.value)} />
            <button onClick={addList}>추가</button>
            <ul>
                {checkList.map((value)=> {
                return(    
                <li key={value.id}>
                    <input type="checkbox" checked={value.checked} onChange={() => toggleCheck(value.id)}/>
                    {value.text}
                </li>
                )
                })}
            </ul>
            <button onClick={remove}>완료된 할 일 삭제</button>
        </>
    )
}