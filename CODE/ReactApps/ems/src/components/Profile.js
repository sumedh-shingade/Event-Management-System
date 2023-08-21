import React from "react";
import { Link } from "react-router-dom";

function ProfileComponent() {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "123-456-7890",
  };

  return (
    <div className="profile">
      <h2>Profile Information</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Mobile: {userData.mobile}</p>

      <div>
        <table class="table table-hover">
   <thead>
    <tr>
      <th scope="col">Sr No</th>
      <th scope="col">Booked Events</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><Link to="/#" className="nav-link">Wedding</Link></td>
      <td><button type="button" class="btn btn-primary">Edit</button></td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
  
  </tbody>
</table>
      </div>

      
    </div>
  );
}

export default ProfileComponent;
