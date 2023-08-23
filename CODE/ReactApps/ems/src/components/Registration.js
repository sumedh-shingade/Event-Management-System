import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registration from './images/registration.jpg';

function RegistrationComponent() {
    const containerStyle = {
        backgroundImage: `url(${registration})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        mobile: '',
        terms: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form validation here
        const { name, email, password, address, mobile, terms } = formValues;
        if (name && email && password && address && mobile && terms) {
            // All fields are filled, navigate to '/'
            window.location.href = '/';
        } else {
            // Some fields are missing, display an error message or style the fields
            alert('Please fill in all the required fields.');
        }
    };

    return (
        <div style={containerStyle}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="bg-white p-5 rounded shadow">
                            <div className="text-center">
                                <h3 className="text-primary"><strong>Register Now</strong></h3>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        value={formValues.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        name="mobile"
                                        value={formValues.mobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                        name="terms"
                                        checked={formValues.terms}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions.</label>
                                </div>
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-primary btn-rounded w-75">Register Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationComponent;
