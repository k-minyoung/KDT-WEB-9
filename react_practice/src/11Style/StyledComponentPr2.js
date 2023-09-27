    import { useState } from 'react'
    import styled from 'styled-components'
    const _Input = styled.input`
        background-color:yellow
        `
    const _Div = styled.div`
        width : 200px;
        height: 200px;
        overflow-y: auto;
        border-radius : 0%
        `
    const _ul = styled.ul`
        margin : 0px;
        height: 30px;
        `
    const _Div2 = styled.div`
        display:flex;
        height: 30px;
    `
    const _Container = styled.div`
    `
    export default function StyledComponentPr2() {
            
        const [inputValue,setInputValue] = useState("")
        const [todoList,setTodoList] = useState([])

        const addData = () => {
            if(inputValue !== "") {
                setTodoList([...todoList,inputValue])
            }
        }
        return(
            <_Container>
                <_Div2>
                    <_Input onChange={(e) => setInputValue(e.target.value)}/>
                    <button onClick={addData}>add</button>
                </_Div2>
                <_Div>
                {todoList.map((value,index)=> {
                    return(
                        <>
                        <_ul key={index}>
                            <li>{value}</li>
                            <hr />
                        </_ul>
                        </>
                    )
                    
                })}
                </_Div>
            </_Container>
        )
    }