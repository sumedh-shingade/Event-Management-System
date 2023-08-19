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
                <label for="email">Email ID:</label>
                <input type="email" id="email" name="email" required />

                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <label for="address">Address:</label>
                <input type="text" id="address" name="address" required />

                <label for="mobile">Mobile Number:</label>
                <input type="number" id="mobile" name="mobile" required />

                <label for="role">Role:</label>
                <select id="role" name="role" required>
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <button type="submit">Register</button>
            </form>
        </div>

    </>
}
