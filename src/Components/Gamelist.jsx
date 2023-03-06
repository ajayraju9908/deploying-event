

import { Link } from 'react-router-dom';

import './Styles/gamelist.css'


function GameList({cartItems,addToCart}) {
// Define an array of game objects with names and prices

const games = [
{ name: 'Hi Stricker', price: 9.99 },
{ name: 'Puch Challange', price: 14.99 },
{ name: 'Bow & Arrow', price: 12.99 },
{ name: 'Catch Fish', price: 8.99 },
];
// Define a state variable to hold the cart items

// Define a function to add a game to the cart

return (
<div className='header-section '>
<h2>Games</h2>

<ul>
{games.map((game, index) => (
<li key={index}>
{game.name} - ${game.price}
<button onClick={() => addToCart(game)}>Add to Cart</button>


</li>
))}
</ul>
<div>
<button ><Link to='/cart'>cart{cartItems.length>0?cartItems.length:""}</Link></button>
</div>



</div>
);
}
export default GameList;