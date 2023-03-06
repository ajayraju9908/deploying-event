import React from 'react';

import { Link } from 'react-router-dom';


import './Styles/Cart.css'


function Cart(props) {
    console.log(props.cartItems);

  return (
    <div className='header-section'>
      <div><Link to={'/gamelist'}>Back TO Games</Link></div>
         <ul>
{props.cartItems.map((item, index) => (
<li key={index}>
{item.name} - ${item.price}
</li>
))}
</ul>
<div>
<button> <Link to={'/checkoutpage'}>Checkoutpage</Link></button>
</div>
</div>

  )
}

export default Cart