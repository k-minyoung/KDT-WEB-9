import { Component } from 'react'; //상속시켜주는 1번 방법
//import React from 'react'; //2번 방법
import PropTypes from 'prop-types'

//class형 컴포넌트
//class 컴포넌트명 extends Component {} <<기본형태, 상속받는 1번 방법
//class ClassComponent extends React.Component {} //2번 방법
class ClassComponent extends Component {

    //클래스형 컴포넌트에서는 render함수 필수

    render() {
        
        const name = '홍길동';
        const {age} = this.props
        
        return <>
        <h1>Hello {name}</h1>
        <h2>안녕하세요 {this.props.name}</h2>
        <h2>나이는 {age}입니다</h2>
        <p>여기는 클래스형 컴포넌트</p>
        </>

    }
}

ClassComponent.defaultProps = {
    name : "임꺽정",
    age : 13,
}

ClassComponent.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number,
}

export default ClassComponent;