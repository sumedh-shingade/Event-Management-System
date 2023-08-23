// // import axios from "axios"
// // import { useState } from "react"
// // import ShowEmployee from "./ShowEmployee"
// import { Link, Outlet } from "react-router-dom";
// // import './css/Home.css'
// import birthday from './images/birthday.jpg'
// import corporate from './images/corporate.jpg'
// import wedding from './images/wedding.jpg'

// export default function HomeComponent() {

//     const styleobj = {
//         width: "18rem"
//     };

//     // let id = 0
//     // let [arr, setarr] = useState([])

//     // function handler() {
//     //     let p = axios.get(`https://reqres.in/api/users/${id}`)
//     //     p.then((resp) => {
//     //         let obj = resp.data.data
//     //         arr.push(obj)
//     //         setarr([...arr])
//     //         console.log(arr)
//     //     })

//     // }

//     // function display() {
//     //     return arr.map((employee) => {
//     //         return <ShowEmployee
//     //             id={employee.id}
//     //             first_name={employee.first_name}
//     //             last_name={employee.last_name}
//     //             email={employee.email}
//     //             avatar={employee.avatar}></ShowEmployee>
//     //     })

//     // }

//     return <>
//         <div>
//             <div className="container">
//                 <h1 className="display-4 text-center my-5">4S-Events</h1>
//                 <p className="lead text-center">4S-Events is a premier event management services company dedicated to creating unforgettable experiences. From weddings and birthdays to corporate gatherings, we bring your vision to life with creativity and professionalism.</p>
//             </div>


//             {/* <div class="card-container">
//                 <div class="card">
//                     <h2>Weddings</h2>
//                     <img src={wedding} alt="Wedding Event" />
//                     <div class="card-description">
//                         <p>Exquisite arrangements for your special day. Our team will create a magical atmosphere that reflects your love story.</p>
//                     </div>
//                     <button class="learn-more-btn">Learn More</button>
//                 </div>
//                 <div class="card">
//                     <h2>Birthday Parties</h2>
//                     <img src={birthday} alt="Birthday Party Event" />
//                     <div class="card-description">
//                         <p>Celebrate with style and fun. Whether it's a kids' party or an adult celebration, we have creative ideas to make it memorable.</p>
//                     </div>
//                     <button class="learn-more-btn">Learn More</button>
//                 </div>
//                 <div class="card">
//                     <h2>Corporate Events</h2>
//                     <img src={corporate} alt="Corporate Event" />
//                     <div class="card-description">
//                         <p>Professional events tailored to your needs. From seminars and conferences to team-building activities, we ensure a seamless experience.</p>
//                     </div>
//                     <button class="learn-more-btn">Learn More</button>
//                 </div>
//             </div> */}

//             {/* <div class="card" style={{ width: "18rem", margin: "10px" }}>
//                 <img class="card-img-top" src={wedding} alt="Card image cap" style={{ maxWidth: "90%", margin: "10px auto", display: "block" }} />
//                 <div class="card-body">
//                     <h5 class="card-title">Wedding</h5>
//                     <p class="card-text">Exquisite arrangements for your special day. Our team will create a magical atmosphere that reflects your love story.</p>
//                     <a href="#" class="btn btn-primary">Learn More</a>
//                 </div>
//             </div>

//             <div class="card" style={{ width: "18rem", margin: "10px" }}>
//                 <img class="card-img-top" src={birthday} alt="Card image cap" style={{ maxWidth: "90%", margin: "10px auto", display: "block" }} />
//                 <div class="card-body">
//                     <h5 class="card-title">Birthday</h5>
//                     <p class="card-text">Celebrate with style and fun. Whether it's a kids' party or an adult celebration, we have creative ideas to make it memorable.</p>
//                     <a href="#" class="btn btn-primary">Learn More</a>
//                 </div>
//             </div>

//             <div class="card" style={{ width: "18rem", margin: "10px" }}>
//                 <img class="card-img-top" src={corporate} alt="Card image cap" style={{ maxWidth: "90%", margin: "10px auto", display: "block" }} />
//                 <div class="card-body">
//                     <h5 class="card-title">Corporate Events</h5>
//                     <p class="card-text">Professional events tailored to your needs. From seminars and conferences to team-building activities, we ensure a seamless experience.</p>
//                     <a href="#" class="btn btn-primary">Learn More</a>
//                 </div>
//             </div>

//  */}
//             <div class="card-scroll-container" style={{ display: "flex", overflowX: "scroll", padding: "20px 0" }}>
//                 <div class="card" style={{ width: "18rem", margin: "10px" }}>
//                     <img class="card-img-top" src={wedding} alt="Card image cap" style={{ width: "90%", height: "150px", margin: "10px auto", display: "block" }} />
//                     <div class="card-body">
//                         <h5 class="card-title">Wedding</h5>
//                         <p class="card-text">Exquisite arrangements for your special day. Our team will create a magical atmosphere that reflects your love story.</p>
//                         <a href="#" class="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div class="card" style={{ width: "18rem", margin: "10px" }}>
//                     <img class="card-img-top" src={birthday} alt="Card image cap" style={{ width: "90%", height: "150px", margin: "10px auto", display: "block" }} />
//                     <div class="card-body">
//                         <h5 class="card-title">Birthday</h5>
//                         <p class="card-text">Celebrate with style and fun. Whether it's a kids' party or an adult celebration, we have creative ideas to make it memorable.</p>
//                         <a href="#" class="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>

//                 <div class="card" style={{ width: "18rem", margin: "10px" }}>
//                     <img class="card-img-top" src={corporate} alt="Card image cap" style={{ width: "90%", height: "150px", margin: "10px auto", display: "block" }} />
//                     <div class="card-body">
//                         <h5 class="card-title">Corporate Events</h5>
//                         <p class="card-text">Professional events tailored to your needs. From seminars and conferences to team-building activities, we ensure a seamless experience.</p>
//                         <a href="#" class="btn btn-primary">Learn More</a>
//                     </div>
//                 </div>
//             </div>



//         </div>
//     </>
// }
import React from 'react';
import { Link } from "react-router-dom";
import birthday from './images/birthday.jpg';
import corporate from './images/corporate.jpg';
import wedding from './images/wedding.jpg';
//import backgroundImage from './images/background.jpg'; // Replace with your background image path

export default function HomeComponent() {
    const cardStyle = {
        flex: "0 0 18rem",
        margin: "10px",
        display: "flex",
        flexDirection: "column"
    };

    const containerStyle = {
      //  backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
    };

    const cardImageStyle = {
        width: "100%",
        height: "150px", // Adjust the height as needed for consistent alignment
        objectFit: "cover"
    };

    return (
        <div style={containerStyle}>
            <div className="container text-center">
                <h1 className="display-4 my-5">4S Events</h1>
                <p className="lead">4S-Events is a premier event management services company dedicated to creating unforgettable experiences. From weddings and birthdays to corporate gatherings, we bring your vision to life with creativity and professionalism.</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-row">
                    <div className="card" style={cardStyle}>
                        <img className="card-img-top" src={wedding} alt="Wedding" style={cardImageStyle} />
                        <div className="card-body">
                            <h5 className="card-title">Wedding</h5>
                            <p className="card-text">Exquisite arrangements for your special day. Our team will create a magical atmosphere that reflects your love story.</p>
                            <Link to="#" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>

                    <div className="card" style={cardStyle}>
                        <img className="card-img-top" src={birthday} alt="Birthday" style={cardImageStyle} />
                        <div className="card-body">
                            <h5 className="card-title">Birthday</h5>
                            <p className="card-text">Celebrate with style and fun. Whether it's a kids' party or an adult celebration, we have creative ideas to make it memorable.</p>
                            <Link to="#" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>

                    <div className="card" style={cardStyle}>
                        <img className="card-img-top" src={corporate} alt="Corporate Events" style={cardImageStyle} />
                        <div className="card-body">
                            <h5 className="card-title">Corporate Events</h5>
                            <p className="card-text">Professional events tailored to your needs. From seminars and conferences to team-building activities, we ensure a seamless experience.</p>
                            <Link to="#" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
