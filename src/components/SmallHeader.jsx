import React from "react";

const SmallHeader = ({ children }) => {
  return (
    <div className="bg-slate-100 z-0 h-52 text-indigo-300 font-extrabold  text-5xl flex justify-center items-center relative">
      <div className="left-0 absolute bottom-0 w-64">
        <img src="https://i.postimg.cc/BvPb8FPs/Vector.png" alt="" />
      </div>
      <div className="right-0 absolute -top-20 w-64">
        <img src="https://i.postimg.cc/Xv1PPZsZ/Vector-1.png" alt="" />
      </div>
      {children}
    </div>
  );
};

export default SmallHeader;
