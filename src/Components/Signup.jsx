
    import React from 'react';
    import './Styles/Signup.css'
    import { Link } from 'react-router-dom';
    const Signup = () => {
    return (
    <div className='Container'> 
    <form>
    <div className='form'> 
    <h1>Signup</h1>
  
      
    
    <input type="text"
    placeholder={'Name'}
    required/>
    <input type="password"
    placeholder={'Email'}
   required
    />
    <input type="password"
    placeholder={'Password'}
    required
 />{' '}<br/>
    <button> Sign Up</button>
    <div className='al'>
    Already Signed Up?{' '}
    <button className='lo'>
    <Link to={'/'}>Login In</Link>
    </button>
    </div>
    </div>
    </form>
    </div>
    );
    };
    export default Signup;