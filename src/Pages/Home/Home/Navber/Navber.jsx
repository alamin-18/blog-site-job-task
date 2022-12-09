import React from 'react';

const Navber = () => {
    return (
        <div className="navbar justify-between  bg-base-100">
            <div className="">
                <a href='/' className="btn btn-ghost normal-case text-xl"><span className='text-[#27A365]'>ATC.</span><span>WORLD</span></a>
            </div>
            <div className="">
                <input type="text" placeholder="Search" className="rounded-full border-2 h-10 w-96 " />
            </div>
            <div className="l">
                <h1>Create accout</h1>
            </div>

        </div>
    );
};

export default Navber;