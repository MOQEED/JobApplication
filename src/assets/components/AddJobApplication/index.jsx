import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './index.css'

let AddJobApplication=()=>{

const [company,setCompany]=useState('')
const [role,setRole]=useState('')
const [status,setStatus]=useState('Applied')

const [github,setGithub]=useState(null)
const [ageData,setAgeData]=useState(null)

const getCompanyInfo=async()=>{

if(!company){
    return
}
const res1=await fetch(`https://api.github.com/users/${company}`)
const data1=await res1.json()

const res2=await fetch(`https://api.agify.io/?name=${company}`)
const data2=await res2.json()

setGithub(data1)
setAgeData(data2)
}

const handleAdd=(e)=>{
e.preventDefault()
const newJob={
id:Date.now(),
company,
role,
status
}
const jobs=JSON.parse(localStorage.getItem("jobs")) || []
jobs.push(newJob)
localStorage.setItem("jobs",JSON.stringify(jobs))
setCompany('')
setRole('')
setStatus('Applied')
setGithub(null)
setAgeData(null)
}

return(
<div className="container">
 <h1>Add Job Application</h1>
 <form onSubmit={handleAdd}>
 <input
 placeholder="Company Name"
 value={company}
 onChange={(e)=>setCompany(e.target.value)}
 /><br/>
 <button type="button" onClick={getCompanyInfo}>
  Get Company Info
 </button>

 {github && (
  <div className="companyBox">
  <img src={github.avatar_url} width="80" alt="company"/>
  <h3>{github.login}</h3>
  <p>Followers: {github.followers}</p>
  {ageData && (
  <>
   <p>Age: {ageData.age}</p>
   <p>Count: {ageData.count}</p>
  </>
  )}
 <a href={github.html_url} target="_blank" rel="noreferrer">
  View GitHub Profile
 </a>
</div>
)}

<input
placeholder="Job Role"
value={role}
onChange={(e)=>setRole(e.target.value)}
/><br/>

<select value={status} onChange={(e)=>setStatus(e.target.value)}>
  <option>Applied</option>
  <option>Interview</option>
  <option>Offer</option>
  <option>Rejected</option>
</select>
<br/><br/>
<button type="submit">Add Job</button>
</form>
<br/>
<Link to="/jobs">
<button>View Job Applications</button>
</Link>
</div>
)}

export default AddJobApplication