// import axios from "axios"
// import { useState } from "react"
// import ShowEmployee from "./ShowEmployee"
// import './css/Registration.css'

//export default function RegistrationComponent() {

    // let id = 0
    // let [arr, setarr] = useState([])

    // function handler() {
    //     let p = axios.get(`https://reqres.in/api/users/${id}`)
    //     p.then((resp) => {
    //         let obj = resp.data.data
    //         arr.push(obj)
    //         setarr([...arr])
    //         console.log(arr)
    //     })

    // }

    // function display() {
    //     return arr.map((employee) => {
    //         return <ShowEmployee
    //             id={employee.id}
    //             first_name={employee.first_name}
    //             last_name={employee.last_name}
    //             email={employee.email}
    //             avatar={employee.avatar}></ShowEmployee>
    //     })

    // }

    import React from 'react';
    import registrationimage from './images/registrationimage.jpg';
    
    export default function RegistrationComponent() {
        const containerStyle = {
            backgroundImage: `url(${registrationimage})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        };
    
        const formStyle = {
            background: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            display: "flex", // Display flex to align items horizontally
        };
    
        const imageStyle = {
            width: "50%", // Adjust as needed
        };
    
        return (
            <div style={containerStyle}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div style={formStyle}>
                                <img src={registrationimage} alt="Side Image" style={imageStyle} />
                                <div className="ms-3"> {/* Add margin for spacing */}
                                    <h2 className="text-center mb-4">Create an Account</h2>
                                    <form>
                                        {/* Form fields */}
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email ID:</label>
                                            <input type="email" className="form-control" id="email" name="email" required />
                                        </div>
    
                                        <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required/>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required/>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" className="form-control" id="address" name="address" required/>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                    <input type="number" className="form-control" id="mobile" name="mobile" required/>
                </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    