import ClassComponent from "./ClassComponent";
import ClassPr from "./ClassPr";
import FunctionComponent from "./FunctionComponent";
import FunctionPr from "./FunctionPr";
import './FunctionPr.css';
// import BugComponent from "./bug";
import './bug.css';
import Test from "./test"
import Test2 from "./test2";
import Event from "./Event";
import EventClass from "./EventClass";
import EventPr from "./EventPr";




function App() {
  return (
    <>
        {/* <ClassComponent></ClassComponent>
        <FunctionComponent />
        <ClassComponent />
        <BugComponent></BugComponent>
        <Test></Test>
        <Test2></Test2> */}
        {/* <ClassComponent name="김민영" age={10}></ClassComponent>
        <ClassComponent /> */}
        {/* <FunctionComponent myClass ='kdt9'>코딩</FunctionComponent> */}
        {/* <ClassPr food='사과'></ClassPr>
        <ClassPr></ClassPr>
        <FunctionPr title="나의 하루는 4시 40분에 시작된다" author="저자 : 김유진" price="판매가 : 13,500원" type = '구분 : 자기계발서'></FunctionPr> */}
        {/* <Event></Event>
        <EventClass /> */}

        <EventPr message="클릭성공"></EventPr>
    </>
  )
}

export default App;
