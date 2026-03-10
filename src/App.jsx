import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./assets/components/LoginPage";
import RegisterPage from "./assets/components/RegisterPage";
import Dashboard from "./assets/components/Dashboard";
import AddJobApplication from "./assets/components/AddJobApplication";
import JobApplications from "./assets/components/JobApplications";
import EditJob from "./assets/components/EditJob";
import './App.css'

let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Dashboard/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addjob" element={<AddJobApplication />} />
        <Route path="/jobs" element={<JobApplications />} />
        <Route path="/editjob/:id" element={<EditJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;