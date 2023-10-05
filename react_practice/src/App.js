import Cart from './14Context/Cart';
import ProductList from './14Context/ProductList';
import { CartProvider } from './14Context/store/cart-context';
import './App.css'

function App() {

   return (
        <>
            <CartProvider>
                <ProductList />
                <Cart />
            </CartProvider>
        </>
    );
}

export default App;
