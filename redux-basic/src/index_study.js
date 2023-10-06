import {createStore} from 'redux';

//실습1

const input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')
//상수의 변수
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

//reducer
const reducer = (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case ADD_TODO :
        const newTodo = { text :action.text , id: Date.now()}
        return [newTodo,...state ]
    case DELETE_TODO : 
      return state.filter(el => el.id !== action.id)
    default : 
      return state;
  }
}

//store
const store = createStore(reducer)

const removeTodo = (event) => {
  event.preventDefault()
  store.dispatch({ type : DELETE_TODO, id : Number(event.target.parentNode.id)  })
}

// store.subscribe( () => console.log(store.getState()))

//데이터가 변할 때 안에있는 함수 실행 = todos가 변할 때 반복해서 넣기
store.subscribe( () => {
  const todos = store.getState()
  ul.innerHTML = '';
  todos.map(value => {
    const li = document.createElement('li')
    li.id = value.id
    li.innerText = value.text
    ul.appendChild(li);

    const btn = document.createElement('button')
    btn.innerText = '삭제'
    btn.addEventListener("click", removeTodo)
    li.appendChild(btn)

  })
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('eventTest')
  store.dispatch({ type : ADD_TODO, text : input.value})
  input.value = ""
});







/*
//redux를 이용한 숫자 증가/감소 코드
const add = document.querySelector('#add')
const minus = document.querySelector('#minus')
const num = document.querySelector('#num')

const ADD = "ADD"
const MINUS = "MINUS"

//리듀서
const countReducer = (state = 0, action) => {
  console.log(state, action)
  switch(action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    case 'fasd':
      return state * 2;
    default:
      return state;
  }
}
//store는 데이터를 넣는곳
//createStore : store생성, 리듀서 함수 필수
const countStore = createStore(countReducer)
console.log(countStore)
//subscribe() : 데이터와 저장소가 변경될때마다 콜백함수를 실행
countStore.subscribe(()=> {
  //getState()는 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
  num.textContent = countStore.getState()
})

add.addEventListener('click', () => {
  countStore.dispatch({type: ADD})
})
minus.addEventListener('click', () => {
  countStore.dispatch({type: MINUS})
})


// countStore.dispatch({type: "ADD"})

// console.log(countStore.getState());



//자바스크립트를 이용한 숫자 증가/감소 코드
// let count = 0;

// add.addEventListener('click', () => {
//   count = count + 1
//   num.textContent = count
// })

// minus.addEventListener('click', () => {
//   count = count - 1
//   num.textContent = count
// })

*/