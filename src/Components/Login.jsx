

import React from 'react';

import './Styles/Login.css'
    import { Link } from 'react-router-dom';
    const Login = () => {
    return (
      
    <div className="Container">

    
    <form>
    <div className="form" >
    <h1>Welcome to Event Game Booking</h1>
    <input className='email' type="email"
    placeholder={'Email'}
    
    required
    /><br/><br/>
    <input className="pass" type="password"
    placeholder={'Password'}
   
    required
   
    /><br/><br/>
    <button><Link to={'/forgetpassword'}>Forget Password?</Link></button>{' '}
    
    <button ><Link to={'/gamelist'}>Log In</Link></button>
   
    <br/><br/>
    <div>
    New User?{' '}
   <button> <Link to={'/signup'}>Sign Up</Link></button>
   

</div>
</div>
</form>
</div>

);
};
export default Login;