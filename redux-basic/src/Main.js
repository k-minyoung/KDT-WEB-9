import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TODO , DELETE_TODO} from "./store/todo";

export default function Main () {

    const [text,setText] = useState('');
    
    //useSelector() : 리덕스 store의 state를 조회
    //인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있읍니다
    //자동으로 subscribe를 하고 있기때문에 데이터가 변형되면 컴포넌트가 재실행
    const todos = useSelector( (state) => state)
    console.log(todos);

    //dispatch는 우리가 호출 할 수 있는 함수
    const dispatch = useDispatch();
    
    const onsubmit = (e) => {
        e.preventDefault();
        // console.log('add누르면 작동하나요?')

        dispatch({type: ADD_TODO ,text : text })
        setText('');
    };

    const onClick = (id) => {
        dispatch({type : DELETE_TODO,id : id})
    } 
    return (
        <div>
            <h1>To Dos</h1>
            <form onSubmit={onsubmit}>
                <input type="text" placeholder="할 일 추가" 
                value={text} onChange={(e)=> setText(e.target.value)}/>
                <button id="add">ADD</button>
            </form>
            <ul>
                {todos.map(todo => {
                    return(
                    <li key={todo.id} id={todo.id}>
                        {todo.text}
                        <button onClick={() => onClick(todo.id)}>삭제</button>
                        </li>
                        
                    )
                })}
            </ul> 
        </div>
    )
}