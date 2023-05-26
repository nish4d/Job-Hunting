import React from 'react';

const Category = ({data}) => {
    return (
        <div className='p-6 bg-slate-100 rounded-md mt-4 mx-2'>
            <img className='p-4 bg-slate-200 rounded' src={data.logo} alt="" />
            <h2 className='mt-4'>{data.name}</h2>
            <p className='mt-2'>{data.jobs_available}</p>
        </div>
    );
};

export default Category;