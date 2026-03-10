import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import './index.css'

let RegisterPage=()=>{

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [confirm,setConfirm]=useState('')
const [error,setError]=useState('')
const [registered,setRegistered]=useState(false)

const handleRegister=(e)=>{
e.preventDefault()

if(!name || !email || !password || !confirm){
setError("*Required")
return
}

if(password!==confirm){
setError("Passwords do not match")
return
}

const user={name,email,password}

localStorage.setItem("user",JSON.stringify(user))

setRegistered(true)
}

if(registered){
return <Navigate to="/" />
}

return(
<div className='container'>
<h1>Register Page</h1>

<form className='card' onSubmit={handleRegister}>
<div className='bg'>
    <label  htmlFor='name'>
        Name
    </label>
<input type="text" placeholder='Name'
value={name}
onChange={(e)=>setName(e.target.value)}/><br/>
<label htmlFor='email'>
    Email
</label>
<input type="text" placeholder='Email'
value={email}
onChange={(e)=>setEmail(e.target.value)}/><br/>
<label htmlFor='password'>
    Password
</label>
<input type='password' placeholder='Password'
value={password}
onChange={(e)=>setPassword(e.target.value)}/><br/>
<label htmlFor='confirm'>
    Confirm Password
</label>
<input type='password' placeholder='Confirm Password'
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}/><br/>
</div>

<p style={{color:"red"}}>{error}</p>

<button className='btn'>Register</button>

</form>
<p>
Already have an account? 
<Link to="/">Login</Link>
</p>

</div>
)
}

export default RegisterPage