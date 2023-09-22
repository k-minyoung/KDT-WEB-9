import { useState } from "react";

export default function FuncStatePr5_answer () {
    
    const [todos, setToDos] = useState([]) //할 일 목록
    const [inputTodo, setInputTodo] = useState('') //input에 입력할 값

    const addTodo = () => {
        if(todos.length >10) {
            alert('할 일이 너무 많아요!')
        }
        if(inputTodo !== '') {
            const newTodo = {
                id: Date.now(), //특별한 id값을 줘야 오류발생x
                text : inputTodo,
                checked: false,
            }
            setToDos([...todos, newTodo]);
            setInputTodo("");
        }
    }


    const toggleTodo = (id) => {
        console.log(id)
        setToDos( todos.map( (todo) => {
            console.log(todo)
            return todo.id === id ? {...todo, checked : !todo.checked} : todo
        }   ))
    }

    const RemoveTodo = () => {
        const result = todos.filter(value => value.checked === false)
        setToDos(result)
    }

    return (
    <>
        <input  placeholder="할 일 입력" type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}/>
        <button type="button" onClick={addTodo}>추가</button>
        <ul>
            {todos.map((value)=> {
                return(
                     <li key={value.id}>
                        <input type="checkbox" checked={value.checked} onChange={()=> toggleTodo(value.id)}/>
                        {value.text}
                    </li>
                    )
            } )}
        </ul>
        <button type="button" onClick={RemoveTodo}>완료된 할 일 삭제</button>
    </>
    )
}   