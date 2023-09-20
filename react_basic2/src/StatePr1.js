import { Component } from "react";

class StatePr1 extends Component {
    state = {
        text : '검정색 글씨',
        color : 'black'
    }
    handleColorRed = () => {
        // this.setState( { text : '빨간색 글씨' } )
        // this.setState( { color : 'red' } )
        this.setState( (prevState) => {
            return {text: prevState.text = '빨간색 글씨',color : prevState.color = 'red'}
        })
        // this.setState( (prevState) => {
        //     return {color: prevState.color = 'red'}
        // })  
    }

    handleColorBlue = () => {
        // this.setState( { text : '빨간색 글씨' } )
        // this.setState( { color : 'red' } )
        this.setState( (prevState) => {
            return {text: prevState.text = '파란색 글씨',color: prevState.color = 'blue'}
        })
        // this.setState( (prevState) => {
        //     return {color: prevState.color = 'blue'}
        // })  
    }

    render () {

        return <>
        <h1 style={{color : this.state.color}}>{this.state.text}</h1>
        <button onClick={this.handleColorRed}>빨간색</button>
        <button onClick={this.handleColorBlue}>파란색</button>

        </>
    }
}

export default StatePr1