import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

let JobApplications=()=>{

const navigate = useNavigate()

const [jobs,setJobs]=useState([])
const [search,setSearch]=useState("")
const [statusFilter,setStatusFilter]=useState("All")

useEffect(()=>{
const stored=JSON.parse(localStorage.getItem("jobs")) || []
setJobs(stored)
},[])

const deleteJob=(id)=>{
const confirmDelete = window.confirm("Are you sure you want to delete this job?")
if(!confirmDelete) return

const updated=jobs.filter(j=>j.id!==id)
setJobs(updated)
localStorage.setItem("jobs",JSON.stringify(updated))
}

const filteredJobs = jobs.filter(job=>{
const matchSearch =
job.company.toLowerCase().includes(search.toLowerCase()) ||
job.role.toLowerCase().includes(search.toLowerCase())

const matchStatus =
statusFilter === "All" || job.status === statusFilter

return matchSearch && matchStatus
})

return(

<div className="jobsContainer">

<h1 className="title">Job Applications</h1>

<button
className="addBtn"
onClick={()=>navigate("/addjob")}
>
Add Job
</button>

<div className="filterRow">

<input
type="text"
placeholder="Search company or role..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select
value={statusFilter}
onChange={(e)=>setStatusFilter(e.target.value)}
>
<option>All</option>
<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>
</select>

</div>

<table className="jobsTable">

<thead>
<tr>
<th>Company</th>
<th>Role</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{filteredJobs.length===0 ?(
<tr>
<td colSpan="4" className="noJobs">No jobs found</td>
</tr>
):(filteredJobs.map(job=>(

<tr key={job.id}>

<td>{job.company}</td>
<td>{job.role}</td>
<td>{job.status}</td>

<td>

<button
className="editBtn"
onClick={()=>navigate(`/editjob/${job.id}`)}
>
Edit
</button>

<button
className="deleteBtn"
onClick={()=>deleteJob(job.id)}
>
Delete
</button>

</td>

</tr>

)))}

</tbody>

</table>

</div>

)
}

export default JobApplications