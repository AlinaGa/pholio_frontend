import React from 'react';

import "./client.css";
import "../../App.css";

const ClientLogin = () => {
    return (
        <>
            <div className='clientlogin'>
                <h3>Login to see your Galleries</h3>

                <div className='clientlogincontainer'>
                    <div className='clientloginfields'>
                        <label htmlFor=''>
                            Email Address
                        </label>

                        <input className='form-control' type='text' />
                        <label htmlFor=''>
                            Password
                        </label>

                        <input className='form-control' type='text' />

                    </div>
                    <button onClick={() => alert('Logged in successfully!')}>
                        Log In!
                    </button>
                </div>

            </div>
        </>
    );
}

export default ClientLogin;