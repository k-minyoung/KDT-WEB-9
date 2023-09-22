import {useState} from 'react'

export default function FuncStatePr5 () {
    const [inputtodo, setInputToDo] = useState("")
    const [todolist,setToDoList] = useState([])
    const [id,setId] = useState(1)
    const [check,setCheck] = useState([])

    const addList = () => {
        const newData = {
            todo : inputtodo
        }
        setToDoList([...todolist,newData])
        setId(id + 1)
        //console.log(todolist)
    }
    const remove = () => {
        const result = todolist.filter(value => value.checked === false)
        setToDoList(result)
    }
    return(
    <>
        <input type='text'placeholder='할 일 입력' onChange={(e)=> setInputToDo(e.target.value)}></input>
        <button type='button' onClick={addList}>추가</button>
        {todolist.map((value)=> {
            return (
                <div>
                    <ul key={id}>
                        <input type='checkbox' onChange={(e)=> setCheck(e.target.checked)}></input>
                        {value.todo}
                    </ul>
                </div>
            )
        })}
        <button onClick={remove}>완료된 할 일 삭제</button>
    </>
    )
}