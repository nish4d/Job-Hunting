import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import { AppContext } from "../App";
import Card from "./Card";

const Home = () => {
  const [seeAllJobs, setSeeAllJobs] = useState(true)
  const [jobCategory, setJobCategory] = useState([])
  const bigData = useContext(AppContext)

  useEffect(()=>{
    fetch('/job_category.json')
    .then(res=>res.json())
    .then(data=> setJobCategory(data.category))
  },[])

    

    
  return (
    <div>
        {/* hero section */}
      <section className="md:mx-20 lg:mx-32 mt-12 mx-8 md:flex items-center">
        <div>
          <h1 className="text-4xl md:text-5xl md:w-3/4 font-extrabold">
            One Step Closer To Your
            <span className="text-gradient"> Dream Job</span>
          </h1>
          <p className="mt-6 md:w-3/4 text-secondary">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link>
            <button className="btn bg-gradient border-0 mt-4">
              Get Started
            </button>
          </Link>
        </div>
        <div className="mt-8">
          <img src="https://i.postimg.cc/C11gBTQ8/ezgif-com-gif-maker.png" alt="" />
        </div>
      </section>
      {/* job category section */}
      <section>
        <div className="text-center my-12">
        <h2 className="font-bold text-3xl mb-4">Job Category List</h2>
        <p className="text-secondary">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:mx-32 my-6">
            {
              jobCategory.map((data,i) => <Category
                key={i}
                data={data}
                ></Category>  )
            }
        </div>
      </section>
      {/* Featured Jobs section */}
      <section className="mb-12">
      <div className="text-center my-12" id="section-1">
        <h2 className="font-bold text-3xl mb-4">Featured Jobs</h2>
        <p className="text-secondary">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid md:grid-cols-2 md:px-32">
          {
            bigData.slice(0, seeAllJobs ? 4 : 6).map(data=> <Card
            key={data.id}
            data={data}
            ></Card>)
          }
        </div>
        {
          seeAllJobs && (<div className="text-center">
          <Link><button onClick={()=>setSeeAllJobs(false)} className="btn bg-gradient border-0">See All Jobs</button></Link>
        </div>)
        }
      </section>
    </div>
  );
};

export default Home;
