import { Component } from "react"

class EventPr extends Component {
    
    show = () => {
        alert(this.props.message)
    }

    render() {

        return <>
        <button onClick={this.show}>Show Message</button>
        </>
    }
}

export default EventPr