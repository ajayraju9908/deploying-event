import {  Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import CheckoutPage from './Components/Checkoutpage';
import GameList from './Components/Gamelist';
import Login from './Components/Login';

import Signup from './Components/Signup';

import { useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState([]);
    function addToCart(game) {
        setCartItems([...cartItems, game]);
        }
return (

<Routes>
<Route path="/" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/gamelist" element={<GameList cartItems={cartItems} addToCart={addToCart} />} />
<Route path="/checkoutpage" element={<CheckoutPage/>} />
<Route path="/cart" element={<Cart cartItems={cartItems}/>} />

</Routes>


);
}
export default App;