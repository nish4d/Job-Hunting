import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'





const Card = ({ data }) => {


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
    <div className="p-8 m-8 mt-4 border border-opacity-25 border-primary rounded space-y-2">
      <img className="w-32" src={company_logo} alt="" />
      <h2 className="text-xl font-bold">{job_title}</h2>
      <h3 className="text-secondary">{company_name}</h3>
      <div>
        <Link>
          <button
            className="small-btn"
          >
            {remote_or_onsite}
          </button>
        </Link>
        <Link>
          <button className="small-btn ml-2">{fulltime_parttime}</button>
        </Link>
      </div>
      <div className="flex items-center gap-2 text-secondary">
        <MapPinIcon className="h-5 w-5 text-primary" />
        <p>{location}</p>
        < CurrencyDollarIcon className="h-5 w-5 text-primary" />
        <p>{ salary}</p>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button className="btn bg-gradient border-0 mt-3">View Details</button>
      </Link>
    </div>
  );
};

export default Card;
