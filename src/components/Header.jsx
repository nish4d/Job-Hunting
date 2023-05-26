import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <div className="flex justify-between bg-slate-100 p-4 sm:px-8 md:px-20 py-4">
        <Link className="text-gradient font-extrabold text-2xl" to="/">JOB HUNTING</Link>
        <nav className="space-x-10 hidden md:block">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gradient" : "font-bold"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gradient" : "font-bold"
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gradient" : "font-bold"
            }
            to="/jobs"
          >
            Applied Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gradient" : "font-bold"
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </nav>
        <Link onClick={handleClickScroll} className="hidden md:block px-4 py-2 bg-gradient rounded z-10">
          Start Applying
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Bars3BottomRightIcon className="h-6 w-6 text-[#8D7FFE] "></Bars3BottomRightIcon>
        </button>
      </div>
      <div className="md:hidden">
        {open && (
          <nav className="mb-12 p-4">
            <div className="flex flex-col gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-gradient px-2 rounded "
                    : "px-2 text-gradient"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-gradient px-2 rounded"
                    : "px-2 text-gradient"
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-gradient px-2 rounded"
                    : "px-2 text-gradient"
                }
                to="/jobs"
              >
                Applied Jobs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-gradient px-2 rounded"
                    : "px-2 text-gradient"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </div>
            <div className="mt-4">
              <Link onClick={handleClickScroll} className=" px-3 py-2 bg-gradient rounded ">
                Start Applying
              </Link>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Header;
