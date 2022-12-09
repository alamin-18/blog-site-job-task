import React from 'react';

const Banner = () => {
    return (
        <div className="hero  " style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_960_720.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" mt-96 mb-10  text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Computer Engineering</h1>
                    <p className="mb-5">142,765 Computer Engineers follow this.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;