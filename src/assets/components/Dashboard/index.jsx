import React from "react";
import { Link } from "react-router-dom";
import './index.css'

let Dashboard = () => {

const user = JSON.parse(localStorage.getItem("user"))

const jobs = JSON.parse(localStorage.getItem("jobs")) || []

const interviews = jobs.filter(j => j.status === "Interview").length
const offers = jobs.filter(j => j.status === "Offer").length

return (

<div className="container">

<div className="topBar">

<h2>Welcome {user?.name}</h2>

<button className="logoutBtn">
    <Link to="/">Logout</Link>
    </button>

</div>

<h1 className="title">Job Tracker Dashboard</h1>

<div className="cards">

<div className="card">
<h3>Total Applications</h3>
<p>{jobs.length}</p>
</div>

<div className="card">
<h3>Interviews</h3>
<p>{interviews}</p>
</div>

<div className="card">
<h3>Offers</h3>
<p>{offers}</p>
</div>

</div>

<div className="buttons">

<Link to="/addjob">
<button className="blueBtn">Add Job Application</button>
</Link>

<Link to="/jobs">
<button className="blueBtn">View Job Applications</button>
</Link>

</div>

</div>

)
}

export default Dashboard