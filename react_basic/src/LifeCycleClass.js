import { Component } from "react";

class MyComponent extends Component {
    
    //생성될때
    componentDidMount() {
        console.log('Mount!')
    }

    //업데이트 될때
    componentDidUpdate() {
        console.log('Update!')
    }

    //제거 될때
    componentWillUnmount() {
        console.log('Unmount!')
    }

    render() {
        return <>
            <div>my Component {this.props.number}</div>
        </>
    }
}

class LifeCycleClass extends Component {
    state = {
        number : 0,
        visible : true,
    };

    changeNmuberState = () => {
        this.setState({number : this.state.number + 1});
    };

    changeVisibleState = () => {
        this.setState({ visible : !this.state.visible})
    }

    render() {
        return <>
            <button onClick={this.changeNmuberState}>PLUS</button>
            <button onClick={this.changeVisibleState}>ON/OFF</button>
            {this.state.visible && <MyComponent number={this.state.number} />}
        </>
    }
}

export default LifeCycleClass