import { useSelector, useDispatch } from "react-redux"
import { DELETE_LIST } from "../store/cart-redux"

export default function CartItemRedux() {

    const List = useSelector( (state) => state)
    const dispatch = useDispatch();

    const removeCart = (value) => {
        dispatch({type : DELETE_LIST, id : value.id})
    }

    return(
        <div key={value.id}>
            <span>{value.name} : {value.price}원 </span>
            <button onClick={() => removeCart(value)}>제거</button>
        </div>
    )

}