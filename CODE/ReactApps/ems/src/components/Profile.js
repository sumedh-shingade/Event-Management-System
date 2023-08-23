import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProfileComponent() {
  // const [email_id, setEmail_id] = useState('');
  const [bookingData, setBookingData] = useState([]);
  const [userData, setUserData] = useState({});
  // setEmail_id("abc@ems"); // Replace with the desired email ID

  const email_id = "abc@ems";


  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [expectedAttendees, setExpectedAttendees] = useState('');

  const [selectedVenue, setSelectedVenue] = useState('');
  const [customVenue, setCustomVenue] = useState({
    venueName: '',
    address: '',
    location: ''
  });

  const [selectedCatering, setSelectedCatering] = useState('');
  const [customCatering, setCustomCatering] = useState('');

  const [selectedDecoration, setSelectedDecoration] = useState('');
  const [customDecoration, setCustomDecoration] = useState('');

  const [selectedMedia, setSelectedMedia] = useState('');

  const venueOptions = [
    { label: 'Venue A', value: 'venue_a' },
    { label: 'Venue B', value: 'venue_b' },
    { label: 'Venue C', value: 'venue_c' },
    { label: 'Other', value: 'other' }
  ];

  const cateringOptions = [
    { label: 'Indian', value: 'indian' },
    { label: 'Continental', value: 'continental' },
    { label: 'Other', value: 'other' }
  ];

  const decorationOptions = [
    { label: 'Floral decoration', value: 'floral' },
    { label: 'Balloon decoration', value: 'balloon' },
    { label: 'Other', value: 'other' }
  ];

  const mediaOptions = [
    { label: 'Photography', value: 'photography' },
    { label: 'Videography', value: 'videography' },
    { label: 'Drone Photography', value: 'drone' }
  ];

  const handleVenueChange = (value) => {
    setSelectedVenue(value);
    if (value !== 'other') {
      setCustomVenue({
        venueName: '',
        address: '',
        location: ''
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomVenue((prevVenue) => ({
      ...prevVenue,
      [name]: value
    }));
  };



  const handleMediaChange = (value) => {
    if (selectedMedia.includes(value)) {
      setSelectedMedia(prevSelected => prevSelected.filter(item => item !== value));
    } else {
      setSelectedMedia(prevSelected => [...prevSelected, value]);
    }
  };

  useEffect(() => {
    // Make the Axios GET request when the component mounts
    axios.get(`http://localhost:8080/accounts/${email_id}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  useEffect(() => {
    // Make the Axios GET request when the component mounts
    axios.get(`http://localhost:8080/bookings/email/${email_id}`)
      .then(response => {
        setBookingData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once



  const [editFormData, setEditFormData] = useState({
    "event_name": bookingData.event_id,
    "start_time": "",
    "end_time": "",
    "date": "",
    "exp_attendee": "",
    "venue": { "venue_id": bookingData.venue_id, "name": "", "address": "", "location": "" },
    "catering": { "catering_id": bookingData.catering_id, "menu": "" },
    "decoration": { "decoration_id": bookingData.decoration_id, "decor_type": "" },
    "media": { "media_id": bookingData.media_id, "media_type": "" },
    "email_id": bookingData.email_id
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  const handleEdit = event_id => {
    setIsEditing(true); // Show the edit form when "Edit" is clicked
    // Fetch the existing booking data and populate the form

    const booking = bookingData[event_id];
    setEditFormData({
      event_name: booking.event_name,
      start_time: booking.start_time,
      end_time: booking.end_time,
      date: booking.date,
      exp_attendee: booking.exp_attendee,
      venue: { ...booking.venue },
      catering: { ...booking.catering },
      decoration: { ...booking.decoration },
      media: { ...booking.media },
      email_id: booking.email_id
    });

    // Make sure to validate editFormData before sending
    axios.put(`http://localhost:8080/bookings/update/${event_id}`, editFormData)
      .then(response => {
        console.log("Booking updated:", response.data);

        // Update bookingData or fetch updated data again
        // // For simplicity, you can fetch the data again here
        // axios.get(`http://localhost:8080/bookings/email/${email_id}`)
        //   .then(response => {
        //     setBookingData(response.data);
        //   })
        //   .catch(error => {
        //     console.error("Error fetching booking data:", error);
        //   });
      })
      .catch(error => {
        console.error("Error updating booking:", error);
      });
  };

  const handleEditFormChange = event => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  return (
    <div className="profile">
      <h2>Profile Information</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email_id}</p>
      <p>Mobile: {userData.mob_no}</p>

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
            {/* <tr>
              <th scope="row">1</th>
              <td>{bookingData.event_name}</td>
              <td><button type="button" class="btn btn-primary" onClick={() => handleEdit(bookingData.event_id)}>Edit</button></td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr> */}

            {Object.keys(bookingData).map(event_id => (
              <tr key={event_id}>
                <th scope="row">1</th>
                <td>{bookingData[event_id].event_name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(event_id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>


      {isEditing && (
        <div className="edit-form">
          {/* <h3>Edit Form</h3>
          <input type="text" name="event_name" placeholder="Event Name" value={editFormData.event_name} onChange={handleEditFormChange} />
          <input type="date" name="date" placeholder="date" value={editFormData.date} onChange={handleEditFormChange} />
          <input type="time" name="start_time" placeholder="start_time" value={editFormData.start_time} onChange={handleEditFormChange} />
          <input type="time" name="end_time" placeholder="end_time" value={editFormData.end_time} onChange={handleEditFormChange} />
          <input type="number" name="exp_attendee" placeholder="exp_attendee" value={editFormData.exp_attendee} onChange={handleEditFormChange} /> */}

          <div className="mb-3">
            <label htmlFor="eventName" className="form-label">Event Name:</label>
            <input type="text" className="form-control" id="eventName" name="eventName" value={eventName} required onChange={handleEditFormChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]} // Set the minimum date to the current date
              required
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="startTime" className="form-label">Start Time:</label>
              <input type="time" className="form-control" id="startTime" name="startTime" value={startTime} onChange={handleEditFormChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="endTime" className="form-label">End Time:</label>
              <input type="time" className="form-control" id="endTime" name="endTime" value={endTime} onChange={handleEditFormChange} required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="expectedAttendees" className="form-label">Expected Attendees:</label>
            <input type="number" className="form-control" id="expectedAttendees" name="expectedAttendees" value={expectedAttendees} onChange={handleEditFormChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="venue" className="form-label">Venue:</label>
            <select className="form-select" id="venue" name="venue" value={selectedVenue} onChange={handleEditFormChange} required>
              <option value="">Select a Venue</option>
              {venueOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          {selectedVenue === 'other' && (
            <div>
              <h5>Custom Venue Details</h5>
              <div className="mb-3">
                <label htmlFor="venueName" className="form-label">Venue Name:</label>
                <input type="text" className="form-control" id="venueName" name="venueName" value={customVenue.venueName} onChange={handleEditFormChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <input type="text" className="form-control" id="address" name="address" value={customVenue.address} onChange={handleEditFormChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location:</label>
                <input type="text" className="form-control" id="location" name="location" value={customVenue.location} onChange={handleEditFormChange} required />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="catering" className="form-label">Catering:</label>
            <select className="form-select" id="catering" name="catering" value={selectedCatering} onChange={handleEditFormChange} required>
              <option value="">Select Catering</option>
              {cateringOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          {selectedCatering === 'other' && (
            <div className="mb-3">
              <label htmlFor="customCatering" className="form-label">Your Choice:</label>
              <input type="text" className="form-control" id="customCatering" name="customCatering" value={customCatering} onChange={handleEditFormChange} required />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="decoration" className="form-label">Decoration:</label>
            <select className="form-select" id="decoration" name="decoration" value={selectedDecoration} onChange={handleEditFormChange} required>
              <option value="">Select Decoration</option>
              {decorationOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          {selectedDecoration === 'other' && (
            <div className="mb-3">
              <label htmlFor="customDecoration" className="form-label">Your Choice:</label>
              <input type="text" className="form-control" id="customDecoration" name="customDecoration" value={customDecoration} onChange={handleEditFormChange} required />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Media:</label>
            {mediaOptions.map(option => (
              <div className="form-check" key={option.value}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={option.value}
                  checked={selectedMedia.includes(option.value)}
                  onChange={() => handleMediaChange(option.value)}
                />
                <label className="form-check-label">{option.label}</label>
              </div>
            ))}
          </div>
          {/* <div className="mb-3">
            <label htmlFor="email_id" className="form-label">Email Id:</label>
            <input type="text" className="form-control" id="email_id" name="email_id" value={email_id} onChange={(e) => setEmail_id(e.target.value)} required />
          </div> */}

          <button type="submit" className="btn btn-success">Book Event</button>


        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
