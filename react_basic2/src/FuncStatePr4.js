import {useState} from 'react'

export default function FuncStatePr4 () {

    const [inputWriter, setInputWriter] = useState("")
    const [inputTitle, setInputTitle] = useState("")
    const [list, setList] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    const [searchType, setSearchType] = useState("title")
    const [result, setResult] = useState([])


    const addData = () => {
        const newData = {
            title : inputTitle,
            writer : inputWriter 
        }
        setList ([...list,newData])
        console.log(list)
    }

    const searchData = () => {
        const searchResult = list.filter( value => {
           // console.log(value)
           const type = value[searchType]
           //console.log(type)
           const include = type.includes(inputSearch)
           if(!include) {
            return false;
           }else{
            return true;
           }
        })
        setResult(searchResult)
    }
    return (
        <>
            <form>
                작성자 : <input type='text' value={inputWriter} onChange={(e) => setInputWriter(e.target.value)}></input>
                제목 : <input type='text' value={inputTitle} onChange={(e)=> setInputTitle(e.target.value)}></input>
                <button type='button' onClick={addData}>작성</button>
            </form>

            <form>
                <select value={searchType} onChange={(e)=> setSearchType(e.target.value)}>
                    <option value='title'>제목</option>
                    <option value='writer'>작성자</option>
                </select>
                <input type='text' placeholder='검색어' onChange={(e)=> setInputSearch(e.target.value)}></input>
                <button type='button' onClick={searchData}>검색</button>
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
            <br />
            <br />
            <br />
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((value,index)=> {
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