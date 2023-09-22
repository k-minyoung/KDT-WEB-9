import {useState} from 'react'

export default function FuncStatePr3 () {

    const [inputWriter, setInputWriter] = useState("")
    const [inputTitle, setInputTitle] = useState("")
    const [list, setList] = useState([])

    const addData = () => {
        const newData = {
            title : inputTitle,
            writer : inputWriter 
        }
        setList ([...list,newData])
        console.log(list)
    }

    return (
        <>
            <form>
                작성자 : <input type='text' value={inputWriter} onChange={(e) => setInputWriter(e.target.value)}></input>
                제목 : <input type='text' value={inputTitle} onChange={(e)=> setInputTitle(e.target.value)}></input>
                <button type='button' onClick={addData}>작성</button>
            </form>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value,index)=> {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}