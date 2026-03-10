import React,{useState,useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import './index.css'

let EditJob=()=>{

const {id}=useParams()
const navigate = useNavigate()

const [company,setCompany]=useState("")
const [role,setRole]=useState("")
const [status,setStatus]=useState("Applied")

useEffect(()=>{

const jobs=JSON.parse(localStorage.getItem("jobs")) || []

const job=jobs.find(j=>j.id==id)

if(job){
setCompany(job.company)
setRole(job.role)
setStatus(job.status)
}

},[id])

const updateJob=()=>{

let jobs=JSON.parse(localStorage.getItem("jobs")) || []

jobs=jobs.map(j=>{
if(j.id==id){
return {...j,company,role,status}
}
return j
})

localStorage.setItem("jobs",JSON.stringify(jobs))

navigate("/jobs")

}

return(

<div className="editContainer">

<h1 className="editTitle">Edit Job</h1>

<input 
value={company} 
onChange={(e)=>setCompany(e.target.value)}
placeholder="Company"
/>

<input 
value={role} 
onChange={(e)=>setRole(e.target.value)}
placeholder="Role"
/>

<select 
value={status} 
onChange={(e)=>setStatus(e.target.value)}
>
<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>
</select>

<button className="updateBtn" onClick={updateJob}>
Update
</button>

</div>

)
}

export default EditJob