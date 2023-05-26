import React, { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import { addToDb, getShoppingCart } from "../Utils/fakedb";
import SmallHeader from "./SmallHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AppContext } from "../App";


const AllJobsDetails = () => {
  const fromContext = useContext(AppContext)
  console.log(fromContext);

    
  const [allData, setAllData] = useState({})
  const { id } = useParams();
 
  useEffect(()=> {
    fetch('/featured_job.json')
    .then(res=> res.json())
    .then(data=>{
        const newData = data.jobs;
        const jobs = newData.find(job => job.id == id)
        // console.log(jobs);
        setAllData(jobs)
    })
  },[])

const { job_description,job_responsibility,educational_requirements,experiences,job_title,salary,location,contact_information, } = allData;
//   console.log(allData);

const handleApply = (id) => {
  const tostForGetItem = getShoppingCart()
   addToDb(id);
   for( const item in tostForGetItem){
    // console.log(item);
    if(item == id){
      toast.warn('😡 Wow so easy!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     }
   }
}

  return (
    <div>
      {/* sm header */}
      <div className="hidden md:block">
      <SmallHeader>Applied All Jobs</SmallHeader>
      </div>
      {/* job details */}
      <div className="md:flex md:gap-12 md:mx-32 mt-12">
      <div className="md:w-[70%] mx-4 space-y-5 mt-10">
        <p> <span className="font-bold text-xl">Job Description: </span> {job_description}</p>
        <p> <span className="font-bold text-xl">Job Responsibility: </span> {job_responsibility}</p>
        <p> <span className="font-bold text-xl">Educational Requirements: </span>{educational_requirements}</p>
        <p > <span className="font-bold text-xl">Experiences: </span> {experiences}</p>
      </div>
      <div className="md:w-[30%] my-4 mx-4 bg-purple-300 rounded-xl p-8 bg-opacity-50">
        <div className="space-y-3">
        <h3>Job Details</h3>
        <hr className="bg-gradient p-[1px]" />
         
         <p> <span className="font-bold text-md">Salary: </span>{salary} </p>
         <p> <span className="font-bold text-md">Job Title: </span> {job_title}</p>
         
         <h3>Contact Information</h3>
         <hr className="bg-gradient p-[1px]" />
         <p> <span className="font-bold text-md">Phone: </span>{contact_information?.phone}</p>
         <p> <span className="font-bold text-md">Email: </span> {contact_information?.email} </p>
         <p> <span className="font-bold text-md">Address: </span>{location} </p>
        </div>
             <button onClick={()=>handleApply(allData.id)} className="btn bg-gradient border-0 mt-3">Apply Now</button>
      </div>
    </div>
    <ToastContainer />
    </div>
  );
};

export default AllJobsDetails;
