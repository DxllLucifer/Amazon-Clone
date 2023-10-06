import React, { useState } from 'react'
import amazon__darkLogo from '../Assets/amazon_darkLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import axios from 'axios'


function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [userRole, setuserRole] = useState('')
    const nav = useNavigate()
    
    const handleEmailChange =(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange= (e)=>{
        setPassword(e.target.value)
    }
    const handleSignUp = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/users/signup',{email,password,username,userRole})
            console.log(response.data);
            setEmail('');
            setPassword('');
            setUsername('');
            setuserRole('');
            nav('/')
        } catch (error) {
            console.log(error)
        }
    }
    const handleSignIn = ()=>{
        nav("/Login")
    }
  return (
    <div className="signup">
         <Link to='/'>
            <img className='signup__logo' src={amazon__darkLogo} alt="img" /> 
        </Link>
        <div className="signup__container">
           <h1>Sign in</h1>
           <form >
            <h5>Username</h5>
            <input value={username} type="text" onChange={(e)=>{ setUsername(e.target.value)}} />
            <h5>E-mail</h5>
            <input value={email} type="text" onChange={handleEmailChange} />
            <h5>UserRole</h5>
            <select value={userRole} onChange={(e)=>{setuserRole(e.target.value)}} >
                <option value="1">Seller</option>
                <option value="2">Consumer</option>
            </select>
            <h5>Password</h5>
            <input value={password} type="password" onChange={handlePasswordChange}  />
            <button type='submit' onClick={handleSignUp} className='signup__signUpButton'>Sign Up</button>
           </form>
           <p>
            By signing-in you agree to Amazon Clone Condition of Use & Sale, Please
            see our Privacy Notice, Our Cookies Notice
            and our Intrest-Based Ads Notice.
           </p>
           <button onClick={handleSignIn} className='signup__signIn' >Sign In</button>
        </div>
    </div>
  )
}

export default SignUp