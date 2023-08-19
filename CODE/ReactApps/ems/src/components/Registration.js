// import axios from "axios"
// import { useState } from "react"
// import ShowEmployee from "./ShowEmployee"
// import './css/Registration.css'

export default function RegistrationComponent() {

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
       <div class="container">
    <h2>Registration</h2>
    <form>
        <div class="mb-3">
            <label for="email" class="form-label">Email ID:</label>
            <input type="email" class="form-control" id="email" name="email" required/>
        </div>

        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required/>
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" id="password" name="password" required/>
        </div>

        <div class="mb-3">
            <label for="address" class="form-label">Address:</label>
            <input type="text" class="form-control" id="address" name="address" required/>
        </div>

        <div class="mb-3">
            <label for="mobile" class="form-label">Mobile Number:</label>
            <input type="number" class="form-control" id="mobile" name="mobile" required/>
        </div>

        <div class="mb-3">
            <label for="role" class="form-label">Role:</label>
            <select class="form-select" id="role" name="role" required>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</div>

     

    </>
}