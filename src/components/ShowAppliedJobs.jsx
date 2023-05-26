import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const ShowAppliedJobs = ({ data }) => {
  const {
    id,
    company_logo,
    company_name,
    fulltime_parttime,
    remote_or_onsite,
    location,
    salary,
    job_title,
  } = data;
  return (
    <div className="md:flex justify-between border p-8 rounded w-3/4 mx-auto mt-4">
      <div className="md:flex">
        <img className="w-44 p-4 object-contain" src={company_logo} alt="" />
        <div className="ml-6">
          <p className="font-extrabold">{job_title}</p>
          <p className="text-slate-500 font-semibold">{company_name}</p>
          <div className="flex space-x-2 mt-2">
            <p className="small-btn">{fulltime_parttime}</p>
            <p className="small-btn">{remote_or_onsite}</p>
          </div>
          <div className="flex space-x-2 items-center mt-3 text-secondary">
            <MapPinIcon className="h-5 w-5 text-primary" />
            <p>{location}</p>
            <CurrencyDollarIcon className="h-5 w-5 text-primary" />
            <p>{salary}</p>
          </div>
        </div>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button className="bg-gradient border-none btn">view details</button>
      </Link>
    </div>
  );
};

export default ShowAppliedJobs;
