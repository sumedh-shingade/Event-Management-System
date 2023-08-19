// import axios from "axios"
// import { useState } from "react"
// import ShowEmployee from "./ShowEmployee"
// import './css/Login.css'

export default function LoginComponent() {

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
        <div class="login-container">
            <h2>Login</h2>
            <form>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <button class="login-button" type="submit">Login</button>

            </form>
        </div>

    </>
}
