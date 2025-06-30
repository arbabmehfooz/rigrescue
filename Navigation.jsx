import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login/Login'
import FleetManager from './Pages/FleetManager/FleetManager'
import JobDetails from "./Components/JobsDetails";
import InProgress from "./Pages/InProgress/InProgress";
import Completed from "./Pages/Completed/Completed";
import Shopowner from "./Pages/Shopowner/Shopowner";
import Jobs from "./Pages/Jobs/Jobs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DriverDetails from "./Components/DriverDetails";
import ProductDetails from "./Components/ProductDetails";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/FleetManager' element={<FleetManager/>}/>
        <Route path='/inprogress' element={<InProgress/>}/>
        <Route path='/completed' element={<Completed/>}/>
        <Route path='/home/shopowner' element={<Shopowner/>}/>
        <Route path='/home/Jobs' element={<Jobs/>}/>
        <Route path='/JobDetails' element={<JobDetails/>}/>
        <Route path='/DriverDetails' element={<DriverDetails/>}/>
        <Route path='/ProductDetails' element={<ProductDetails/>}/>
        <Route path='/ProductDetails' element={<ProductDetails/>}/>




      </Routes>
    </Router>
  );
}