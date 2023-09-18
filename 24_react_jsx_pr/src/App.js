import logo from './logo.svg';
import './App.css';

function App() {
  const name = '꿀이';
  const animal = '강아지'
  const title = 'Hello World'

  // 두번째 실습
  const users = [
    { id: 1, name: "John", age:25, vip: true},
    { id: 2, name: "Jane", age: 19, vip: false},
    { id: 3, name: "Alice", age:30, vip: true},
    { id: 4, name: "Bob", age:18, vip: false},
    { id: 5, name: "Carlie", age: 35, vip: true}
  ];

  let result = users.filter(people => {
    return people.vip == true
  })
  console.log(result)

  const resultName = result.map( (value)=> {
    return "-" + value.name
  })
  console.log('res',resultName)

  const isLogin = true;

    return (
      
      <>
      {isLogin && <> (
        <div>
      {/* 실습1-1 */}
        <div>이것은 div입니다
          <h3>이것은 div안에있는 h3태그 입니다</h3>
        </div>

        
       
        {/* 실습1-2 */}
        <div>{3 + 5 == 8 ? <p>정답입니다</p> : <p>오답입니다</p>} </div>

        {/* 실습2 */}
        <h2>
          제 반려 동물의 이름은 <u>{name}</u> 입니다.<br />
          <u>{name}</u>는 <u>{animal}</u>입니다.
        </h2>

          {/* 실습3 */}
          <div className='test'>{title}</div>
          <div className='input'>
          아이디 : <input />
          <br />
          <br />
          비밀번호 : <input />

          {/* 실습4 */}
          </div>
          <div className='color'>
          <div className='red'></div>
          <div className='orange'></div>
          <div className='yellow'></div>
          <div className='green'></div>
          <div className='blue'></div>
          <div className='navy'></div>
          <div className='purple'></div>
          </div>

          {result.map( (value)=> {
            return <div>-{value.name}</div> 
          })}
          </div>
      )
       </>}
      
      </>
    );
}

export default App;

