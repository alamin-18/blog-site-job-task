import React from 'react';
import banner from '../../images/singUp.png'

const SingUpModal = () => {
    return (
        <div>
            
            <input type="checkbox" id="singUpModal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box">
                    <div>
                        <div className="form-control w-11/12  mx-auto">
                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="First Name" className="input input-bordered" />
                                <input type="text" placeholder="last name" className="input input-bordered" />
                            </label>
                            <input type="text" placeholder="Enter Your Email" className="input from-none-focus input-bordered w-full " />
                            <input type="text" placeholder="Password" className="input input-bordered w-full " />
                            <input type="text" placeholder="Confirm Password" className="input input-bordered w-full " />
                        </div>
                        <button className='btn btn-primary w-11/12 mt-5'>Create account</button>
                        <button className='btn btn-primary w-11/12 mt-5'>Sing Up Facebook</button>
                        <button className='btn btn-primary w-11/12 mt-5'>Sing Up Google</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SingUpModal;