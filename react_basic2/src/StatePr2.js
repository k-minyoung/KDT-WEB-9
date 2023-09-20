import { Component } from "react";

class StatePr2 extends Component {
    state = {
        button : '사라져라',
        text : '안녕하세요',
    }
    
    buttonText = () => {
        if( this.state.button === "사라져라") {
            this.setState({button : "보여라", text : ''})
        } else {
            this.setState({button : "사라져라", text : '안녕하세요'})
        }
    }

    render() {

        return <>
        <button onClick={this.buttonText}>{this.state.button}</button>
        <h1>{this.state.text}</h1>
        </>
    }
}

export default StatePr2