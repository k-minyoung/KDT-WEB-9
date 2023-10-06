import {createStore} from 'redux'
// import {createContext, useState} from 'react'

// //context
// const CartContext = createContext({
//     cart : [],
//     setCart : () => {}
// });

// //provider component

// export function CartProvider(props) {

//     const [cart, setCart] = useState([]);

//     return <CartContext.Provider value={{cart, setCart}}>
//         {props.children}
//         </CartContext.Provider>
// }

export const ADD_LIST = "ADD_LIST"
export const DELETE_LIST = "DLELTE_LIST"

//reducer
const reducer = (state = [], action) =>{
    switch (action.type) {
        case ADD_LIST:
            const newList = {
                id : action.id,
                name : action.name,
                price : action.price
            }
        return [...state,newList]
        case DELETE_LIST :
        return state.filter (value => value.id !== id)
    }
}

//store
const store = createStore(reducer)

export default store