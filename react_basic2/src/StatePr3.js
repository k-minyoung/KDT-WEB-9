import { Component } from "react";

class StatePr3 extends Component {

    constructor(props) {
        super(props)

        //초기화
        this.state = {
            inputWriter : "",
            inputTitle : "",
            comments : [],
            search : ''
        };
        this.onChange = this.onChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }
    onChange (event) {
        this.setState({inputWriter: event.target.value});
    }

    addComment() {
        const newComment = {
            writer: this.state.inputWriter,
            title : this.state.inputTitle
        };
        this.setState( () => ({ comments : [...this.state.comments, newComment],inputTitle: '', inputWriter: '', }))
    }
    // searchFunc = () => {
    //     const {comments, search} = this.state

    //  let searchResult = comments.filter((comment)=> {
    //     return (
    //         comment.writer.includes(search)
    //     )
    //  })
    //  this.setState({search : searchResult})
    // }
    
    render() {
        const { inputWriter,inputTitle,comments} = this.state
        
        return (
            <>
                <form>
                    <label htmlFor="writer">작성자 : </label> 
                    <input id="writer" type="text" value={inputWriter} onChange={ (e) => this.onChange(e) } />
                    <label htmlFor="title">제목 : </label>
                    <input 
                        id='title' 
                        type='text' 
                        value={inputTitle} 
                        onChange={ (e) => this.setState({inputTitle : e.target.value})}
                    />
                    <button type="button" onClick={this.addComment}>작성</button>
                    <br /><br />
                    <select>
                        <option>작성자</option>
                    </select>
                    {/* <input type="text" value={this.state.search} onChange={(e) => this.setState({search : e.target.value})}></input>
                    <button type="button" onClick={this.searchFunc}>검색</button> */}
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
                        {comments.map((value,index) => {
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
}

export default StatePr3