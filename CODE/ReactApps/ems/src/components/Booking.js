import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library
import { useNavigate } from 'react-router-dom';




function BookingComponent() {

    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

        // If not logged in, redirect to login page
        if (!isLoggedIn) {
            navigate('/login'); // Replace '/login' with the actual login route
        }
    }, [navigate]);

    const [venueCost, setVenueCost] = useState(0);
    const [cateringCost, setCateringCost] = useState(0);
    const [decorationCost, setDecorationCost] = useState(0);
    const [mediaCost, setMediaCost] = useState(0);




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
            switch (value) {
                case 'venue_a':
                    setCustomVenue({
                        venueName: 'Venue A Name',
                        address: 'Venue A Address',
                        location: 'Venue A Location',
                        venueCost: 20000
                    });
                    break;
                case 'venue_b':
                    setCustomVenue({
                        venueName: 'Venue B Name',
                        address: 'Venue B Address',
                        location: 'Venue B Location',
                        venueCost: 25000
                    });
                    break;
                case 'venue_c':
                    setCustomVenue({
                        venueName: 'Venue C Name',
                        address: 'Venue C Address',
                        location: 'Venue C Location',
                        venueCost: 30000

                    });
                    break;
                default:
                    setCustomVenue({
                        venueName: '',
                        address: '',
                        location: '',
                        venueCost: 50000
                    });
                    break;
            }
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCustomVenue((prevVenue) => ({
            ...prevVenue,
            [name]: value
        }));
    };


    // const handleMediaChange = (value) => {
    //     if (selectedMedia.includes(value)) {
    //         setSelectedMedia(prevSelected => prevSelected.filter(item => item !== value));
    //     } else {
    //         setSelectedMedia(prevSelected => [...prevSelected, value]);
    //     }
    // };


    // New state variables for selected option details and image URL
    const [selectedOptionDetails, setSelectedOptionDetails] = useState(null);


    const handleOptionChange = (optionValue) => {
        // Update selected option details and image based on the option value
        switch (optionValue) {
            case 'venue_a':
                setSelectedOptionDetails(
                    'Details for Venue A: Price: 20,000/- Per Day'
                );
                break;
            case 'venue_b':
                setSelectedOptionDetails('Details for Venue B: Price: 25,000/- Per Day');
                break;
            case 'venue_c':
                setSelectedOptionDetails('Details for Venue C: Price: 30,000/- Per Day');
                break;
            default:
                setSelectedOptionDetails(null);
                break;
        }
    };



    const [selectedCateringOptionDetails, setSelectedCateringOptionDetails] = useState(null);


    const handleCateringOptionChange = (optionValue) => {
        // Update selected option details and costs based on the option value
        switch (optionValue) {
            case 'indian':
                setSelectedCateringOptionDetails(
                    'Details for Menu: Price: 200/- Per Head'
                );
                setCateringCost(200);
                break;
            case 'continental':
                setSelectedCateringOptionDetails('Details for Menu : Price: 250/- Per Head');
                setCateringCost(250);
                break;
            default:
                setSelectedCateringOptionDetails(null);
                setCateringCost(0);
                break;
        }
    };


    const [selectedDecorOptionDetails, setSelectedDecorOptionDetails] = useState(null);


    const handleDecorOptionChange = (optionValue) => {
        // Update selected option details and costs based on the option value
        switch (optionValue) {
            case 'floral':
                setSelectedDecorOptionDetails(
                    'Details for Floral Decoration: Price: 10,000/- Per Event'
                );
                setDecorationCost(10000);
                break;
            case 'balloon':
                setSelectedDecorOptionDetails('Details for Balloon Decoration: Price: 5,000/- Per Event');
                setDecorationCost(5000);
                break;
            default:
                setSelectedDecorOptionDetails(null);
                setDecorationCost(0);
                break;
        }
    };


    const [selectedMediaOptionDetails, setSelectedMediaOptionDetails] = useState(null);


    const handleMediaOptionChange = (optionValue) => {
        // Update selected option details and costs based on the option value
        switch (optionValue) {
            case 'photography':
                setSelectedMediaOptionDetails(
                    'Details for Photography: Price: 30,000/- Per Event'
                );
                setMediaCost(30000);
                break;
            case 'videography':
                setSelectedMediaOptionDetails('Details for Videography: Price: 50,000/- Per Event');
                setMediaCost(50000);
                break;
            case 'drone':
                setSelectedMediaOptionDetails('Details for Drone-Photography: Price: 1,00,000/- Per Event');
                setMediaCost(100000);
                break;
            default:
                setSelectedMediaOptionDetails(null);
                setMediaCost(0);
                break;
        }
    };





    // Calculate total costs
    const totalCost = customVenue.venueCost + cateringCost * expectedAttendees + decorationCost + mediaCost;

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(date, startTime, endTime);

        try {
            const availabilityResponse = await axios.get(`http://localhost:8080/bookings/date/${date}/${startTime}/${endTime}`);

            if (availabilityResponse.data.length > 0) {

                // Date is not available
                alert("This time slot is not available. Please select another date.");

                console.log(availabilityResponse.data);


            } else {
                // Date is available, proceed with booking


                // Create the booking object with selected data
                const bookingData = {
                    "event_name": eventName,
                    "start_time": startTime,
                    "end_time": endTime,
                    "date": date,
                    "exp_attendee": expectedAttendees,
                    "venue": {
                        // venue_id: 11,
                        "name": customVenue.venueName,
                        "address": customVenue.address,
                        "location": customVenue.location,
                        "venue_cost": customVenue.venueCost
                    },
                    "catering": {
                        // "catering_id": 22,
                        "menu": selectedCatering,
                        "menu_cost": cateringCost
                    },
                    "decoration": {
                        // "decoration_id": 33,
                        "decor_type": selectedDecoration,
                        "decor_cost": decorationCost
                    },
                    "media": {
                        // "media_id": 44,
                        "media_type": selectedMedia,
                        "media_cost": mediaCost
                    },
                    "payment": {
                        "status": "Pending",
                        "venue_amt": customVenue.venueCost,
                        "catering_amt": cateringCost,
                        "media_amt": mediaCost,
                        "decoration_amt": decorationCost,
                        "total": totalCost
                    },
                    "email_id": email_id


                    // ... Catering, Decoration, and Media objects ...
                };



                try {
                    // Send the booking data to the server
                    const response = await axios.post('http://localhost:8080/bookings/insert', bookingData);
                    console.log('Booking data sent successfully:', response.data);
                    alert("Event booked successfully!")
                    console.log(bookingData);
                } catch (error) {
                    console.error('Error sending booking data:', error);
                    alert(error)
                    console.log(bookingData);

                }
            }
        } catch (error) {
            console.error('Error checking date availability:', error);
            alert("An error occurred while checking date availability.");
        }
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
                    <select className="form-select" id="venue" name="venue" value={selectedVenue} onChange={(e) => {
                        handleVenueChange(e.target.value);
                        handleOptionChange(e.target.value);
                    }} required>
                        <option value="">Select a Venue</option>
                        {venueOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                {selectedOptionDetails && (
                    <div>
                        <h5>Venue Details:</h5>
                        <p>{selectedOptionDetails}</p>
                    </div>
                )}
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
                    <select className="form-select" id="catering" name="catering" value={selectedCatering} onChange={(e) => {
                        setSelectedCatering(e.target.value);
                        handleCateringOptionChange(e.target.value);
                    }} required>
                        <option value="">Select Catering</option>
                        {cateringOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                {selectedCateringOptionDetails && (
                    <div>
                        <h5>Catering Details:</h5>
                        <p>{selectedCateringOptionDetails}</p>
                    </div>
                )}
                {selectedCatering === 'other' && (
                    <div className="mb-3">
                        <label htmlFor="customCatering" className="form-label">Your Choice:</label>
                        <input type="text" className="form-control" id="customCatering" name="customCatering" value={customCatering} onChange={(e) => setCustomCatering(e.target.value)} required />
                    </div>
                )}







                <div className="mb-3">
                    <label htmlFor="decoration" className="form-label">Decoration:</label>
                    <select className="form-select" id="decoration" name="decoration" value={selectedDecoration} onChange={(e) => {
                        setSelectedDecoration(e.target.value);
                        handleDecorOptionChange(e.target.value);
                    }} required>
                        <option value="">Select Decoration</option>
                        {decorationOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                {selectedOptionDetails && (
                    <div>
                        <h5>Decoration Details:</h5>
                        <p>{selectedDecorOptionDetails}</p>
                    </div>
                )}
                {selectedDecoration === 'other' && (
                    <div className="mb-3">
                        <label htmlFor="customDecoration" className="form-label">Your Choice:</label>
                        <input type="text" className="form-control" id="customDecoration" name="customDecoration" value={customDecoration} onChange={(e) => setCustomDecoration(e.target.value)} required />
                    </div>
                )}







                <div className="mb-3">
                    <label className="form-label">Media:</label>
                    <select className="form-select" id="media" name="media" value={selectedMedia} onChange={(e) => {
                        setSelectedMedia(e.target.value);
                        handleMediaOptionChange(e.target.value);
                    }} required>
                        <option value="">Select Media</option>
                        {mediaOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                {selectedOptionDetails && (
                    <div>
                        <h5>Media Details:</h5>
                        <p>{selectedMediaOptionDetails}</p>
                    </div>
                )}




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
