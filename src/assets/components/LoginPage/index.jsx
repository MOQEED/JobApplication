import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import './index.css'

let LoginPage=()=>{

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
const [loggedIn,setLoggedIn]=useState(false)

const handleLogin=(e)=>{
e.preventDefault()

const user=JSON.parse(localStorage.getItem("user"))

if(!user){
setError("User not registered")
return
}

if(user.email===email && user.password===password){
setLoggedIn(true)
}else{
setError("Invalid email or password")
}
}

if(loggedIn){
return <Navigate to="/dashboard"/>
}

return(
<div className='container'>

<h1>Login Page</h1>

<form className='card' onSubmit={handleLogin}>
    <div className='bg'>
<label htmlFor='email'>
    Email*
</label>
<input type="text" placeholder='Email'
value={email}
onChange={(e)=>setEmail(e.target.value)}/><br/>
<label htmlFor='password'>
    Password*
</label>
<input type="password" placeholder='Password'
value={password}
onChange={(e)=>setPassword(e.target.value)}/><br/>
</div>

<p style={{color:"red"}}>{error}</p>

<button className='bt1'>Login</button>

</form>

<p>
Don't have an account? 
<Link to="/register">Register</Link>
</p>

</div>
)
}

export default LoginPage