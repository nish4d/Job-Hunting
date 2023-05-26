import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { getShoppingCart } from "../Utils/fakedb";
import ShowAppliedJobs from "./ShowAppliedJobs";
import SmallHeader from "./SmallHeader";

const AppliedJobs = () => {
  const [bigData, setBigData] = useState([]);
  const [filters, setFilters] = useState([]);

  const jobs = useContext(AppContext);
  const fromLocal = getShoppingCart();

  useEffect(() => {
    const localJob = [];
    for (const id in fromLocal) {
      const item = jobs.find((job) => job.id == id);
      // console.log(item);
      if (item) {
        localJob.push(item);
      }
    }
    
    setBigData(localJob);
    setFilters(localJob);
  }, []);
 

  // function
  const handleSortRemote = (job) => {
    const newData = filters.filter((data) => data.remote_or_onsite == job);
    setBigData(newData);
  };
  const handleSortOnside = (job) => {
    const newData = filters.filter((data) => data.remote_or_onsite == job);
    setBigData(newData);
  };

  return (
    <div>
      {/* banner section  */}

      <div className="hidden md:block">
      <SmallHeader>Applied All Jobs</SmallHeader>
      </div>

      {/* items section */}
      <div className="space-y-4">
        <div className="w-3/4 mx-auto mt-4 text-end">
          <div className="dropdown dropdown-bottom ">
            <label
              tabIndex={0}
              className="btn btn-sm m-1 bg-gradient border-none"
            >
              Filter
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-gradient rounded-box w-52"
            >
              {/* button */}
              <li>
                <a onClick={() => handleSortRemote("Remote")}>Remote Job</a> 
              </li>
              <li>
                <a onClick={() => handleSortOnside("Onsite")}>Onside Job</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-20">
        {bigData.map((data) => (
          <ShowAppliedJobs key={data.id} data={data}></ShowAppliedJobs>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
