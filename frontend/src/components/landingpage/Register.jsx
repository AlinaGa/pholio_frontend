import React, { useState } from 'react';
import './landingpage.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyname: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform your form submission or validation logic here
        console.log(formData);
    };

    return (
        <div className="register-layout">
            <div className='registerimage'>
            </div>
            <div className='register-container'>
                <span className='registertitle'>Create your Account</span>
                <div className='registerform'>
                    <p className='description'>Please fill in the fields below</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Your Full Name'
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="companyname">Company Name</label>
                            <button type="button" class="tooltipbutton" data-toggle="tooltip" data-placement="top" title="Your company name will be displayed to your clients on their page. It will also be in the URL to login page for your clients (Example: pholio.com/yourcompanyname)">
                                <i class="bi bi-info-circle-fill"></i> </button>
                            <input
                                type="text"
                                id="companyname"
                                name="companyname"
                                placeholder='Name of your Company'

                                value={formData.companyname}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email Adress'

                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Choose a secure password'

                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className='registerbutton'>
                            <button className="register" type="submit">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;