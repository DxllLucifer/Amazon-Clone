import React, { useState } from 'react'
import amazon__darkLogo from '../Assets/amazon_darkLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
function Login() {
    const nav = useNavigate()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange =(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange= (e)=>{
        setPassword(e.target.value)
    }
    const handleSignIn= async(e)=>{
       e.preventDefault()
       try {
            const response = await axios.post('http://localhost:5000/users/signin',{email,password})
            const data = response.data
            localStorage.setItem('user',JSON.stringify(data));  
            setEmail('');
            setPassword('');  
            nav('/')  
       } catch (error) {
        console.log(error);
       }
    }
    const handleCreateAccount = ()=>{
        nav('/signup')
    }
  return (
    <div className="login">
        <Link to='/'>
            <img className='login__logo' src={amazon__darkLogo} alt="img" /> 
        </Link>
        <div className="login__container">
           <h1>Sign in</h1>
           <form >
            <h5>E-mail</h5>
            <input value={email} type="text" onChange={handleEmailChange} />
            <h5>Password</h5>
            <input value={password} type="password" onChange={handlePasswordChange}  />
            <button type='submit' onClick={handleSignIn} className='login__signInButton'>Sign In</button>
           </form>
           <p>
            By signing-in you agree to Amazon Clone Condition of Use & Sale, Please
            see our Privacy Notice, Our Cookies Notice
            and our Intrest-Based Ads Notice.
           </p>
           <button onClick={handleCreateAccount} className='login__signUpButton' >Create Your Account</button>
        </div>
    </div>
  )
}

export default Login