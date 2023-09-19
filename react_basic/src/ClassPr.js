import { Component } from 'react';

class ClassPr extends Component {

    render() {

        return <>
            <h3>저는 <span style={{color : 'red'}}>{this.props.food}</span>를 좋아해요 </h3>
        </>
    }
}


ClassPr.defaultProps = {
    food : "과일"
}

export default ClassPr;