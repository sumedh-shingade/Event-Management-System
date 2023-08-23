import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library

function BookingComponent() {

    const [email_id, setEmail_id] = useState('');
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

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle form submission logic here
    // };

    const handleMediaChange = (value) => {
        if (selectedMedia.includes(value)) {
            setSelectedMedia(prevSelected => prevSelected.filter(item => item !== value));
        } else {
            setSelectedMedia(prevSelected => [...prevSelected, value]);
        }
    };

    // const [dateSubmitted, setDateSubmitted] = useState(false);
    // useEffect(() => {
    //     if (dateSubmitted) {
    //         // Make the Axios GET request here
    //         axios.get(`http://localhost:8080/accounts/${date}`)
    //             .then(response => {
    //                 // Assuming response.data contains the booking data for the selected date
    //                 if (response.data.length > 0) {
    //                     alert("This date is already booked. Please select another date");
    //                     return;
    //                 }
    //             })
    //             .catch(error => {
    //                 // console.error("Error fetching booking data:", error);
    //             });
    //     }
    // }, [date, dateSubmitted]); // Dependency array with 'date' to run the effect when the date changes

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create the booking object with selected data
        const bookingData = {
            "event_name": eventName,
            "start_time": startTime,
            "end_time": endTime,
            "date": date,
            "exp_attendee": expectedAttendees,
            "venue": {
                venue_id: 11,
                name: selectedVenue === 'other' ? customVenue.venueName : selectedVenue,
                address: selectedVenue === 'other' ? customVenue.address : '',
                location: selectedVenue === 'other' ? customVenue.location : '',
            },
            "catering": {
                catering_id: 22,
                indian: selectedCatering === 'indian' ? 'selected' : 'not selected',
                continental: selectedCatering === 'continental' ? 'selected' : 'not selected',
                other: selectedCatering === 'other' ? customCatering : 'selected',
            },
            "decoration": {
                decoration_id: 33,
                floral_decor: selectedDecoration === 'floral' ? 'selected' : 'not selected',
                balloon_decor: selectedDecoration === 'balloon' ? 'selected' : 'not selected',
                other_decor: selectedDecoration === 'other' ? customDecoration : 'selected',
            },
            "media": {
                media_id: 44,
                photography: selectedMedia.includes('photography') ? 'selected' : 'not selected',
                videography: selectedMedia.includes('videography') ? 'selected' : 'not selected',
                drone_photography: selectedMedia.includes('drone_photography') ? 'selected' : 'not selected',
            },
            "email_id": email_id


            // ... Catering, Decoration, and Media objects ...
        };


        try {
            // Send the booking data to the server
            const response = await axios.post('http://localhost:8080/bookings/insert', bookingData);
            console.log('Booking data sent successfully:', response.data);
            alert("Event booked successfully!")
        } catch (error) {
            console.error('Error sending booking data:', error);
        }


        // useEffect(() => {
        //     // Make the Axios GET request when the component mounts
        //     axios.get(`http://localhost:8080/accounts/${date}`)
        //         .then(response => {
        //             // Assuming response.data contains the booking data for the selected date
        //             if (response.data.length > 0) {
        //                 alert("This date is already booked. Please select another date");
        //             }
        //         })
        //         .catch(error => {
        //             console.error("Error fetching booking data:", error);
        //         });
        // }, [date]); // Dependency array with 'date' to run the effect when the date changes
    };


    return (
        <div className="container">
            <h2 className="text-center my-5">Event Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="eventName" className="form-label">Event Name:</label>
                    <input type="text" className="form-control" id="eventName" name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
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
                        <input type="time" className="form-control" id="startTime" name="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="endTime" className="form-label">End Time:</label>
                        <input type="time" className="form-control" id="endTime" name="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="expectedAttendees" className="form-label">Expected Attendees:</label>
                    <input type="number" className="form-control" id="expectedAttendees" name="expectedAttendees" value={expectedAttendees} onChange={(e) => setExpectedAttendees(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="venue" className="form-label">Venue:</label>
                    <select className="form-select" id="venue" name="venue" value={selectedVenue} onChange={(e) => handleVenueChange(e.target.value)} required>
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
                            <input type="text" className="form-control" id="venueName" name="venueName" value={customVenue.venueName} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input type="text" className="form-control" id="address" name="address" value={customVenue.address} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input type="text" className="form-control" id="location" name="location" value={customVenue.location} onChange={handleInputChange} required />
                        </div>
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="catering" className="form-label">Catering:</label>
                    <select className="form-select" id="catering" name="catering" value={selectedCatering} onChange={(e) => setSelectedCatering(e.target.value)} required>
                        <option value="">Select Catering</option>
                        {cateringOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                {selectedCatering === 'other' && (
                    <div className="mb-3">
                        <label htmlFor="customCatering" className="form-label">Your Choice:</label>
                        <input type="text" className="form-control" id="customCatering" name="customCatering" value={customCatering} onChange={(e) => setCustomCatering(e.target.value)} required />
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="decoration" className="form-label">Decoration:</label>
                    <select className="form-select" id="decoration" name="decoration" value={selectedDecoration} onChange={(e) => setSelectedDecoration(e.target.value)} required>
                        <option value="">Select Decoration</option>
                        {decorationOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                {selectedDecoration === 'other' && (
                    <div className="mb-3">
                        <label htmlFor="customDecoration" className="form-label">Your Choice:</label>
                        <input type="text" className="form-control" id="customDecoration" name="customDecoration" value={customDecoration} onChange={(e) => setCustomDecoration(e.target.value)} required />
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
                <div className="mb-3">
                    <label htmlFor="email_id" className="form-label">Email Id:</label>
                    <input type="text" className="form-control" id="email_id" name="email_id" value={email_id} onChange={(e) => setEmail_id(e.target.value)} required />
                </div>

                <button type="submit" className="btn btn-success">Book Event</button>
            </form>
        </div>
    );
}

export default BookingComponent;
