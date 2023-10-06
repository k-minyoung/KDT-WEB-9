

import CartItemRedux from "./CartItemRedux"

export default function CartRedux() {



    //reduce : 배열의 모든 요소를 더할때 사용, 하나의 결과를 반환
   // a.reduce(( acc, curr ) => acc + curr , 0)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

    return( 
        <div>
            <h2>장바구니</h2>
            {cart.map((value) =>(
            <CartItemRedux key={value.id} value={value}/>
            ))}
            총액 : {totalPrice}원
        </div>
    )
}