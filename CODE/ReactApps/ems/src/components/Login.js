// import axios from "axios"
// import { useState } from "react"
// import ShowEmployee from "./ShowEmployee"
// import './css/Login.css'
import loginBackground from './images/loginbackground.jpeg';
import { Link } from "react-router-dom";

export default function LoginComponent() {
   const containerStyle = {
         backgroundImage: `url(${loginBackground})`, // Replace with the correct relative path to your image
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

   
    const cardStyle = {
        width: '400px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Change to the desired color
        borderRadius: '10px' // Optionally add rounded corners
    };


    

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

    return <>
          <div style={containerStyle}>
            <div className="card p-4" style={cardStyle}>
            <h2 class="card-title text-center">Login</h2>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email"/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password"/>
                </div>
                <button class="btn btn-primary w-100" type="submit">Login</button>
            </form>
       <div className="text-center mt-3">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
        </div>
    </div>
       </>
}
