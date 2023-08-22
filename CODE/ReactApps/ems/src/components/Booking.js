import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const predefinedVenues = ['Venue A', 'Venue B', 'Venue C'];
const predefinedAddresses = ['Address A', 'Address B', 'Address C'];
const predefinedLocations = ['Location A', 'Location B', 'Location C'];

const predefinedCatering = ['Menu 1', 'Menu 2', 'Menu 3'];
const predefinedDecorations = ['Decoration 1', 'Decoration 2', 'Decoration 3'];
const predefinedMedia = ['Media 1', 'Media 2', 'Media 3'];



function BookingForm() {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [expectedAttendees, setExpectedAttendees] = useState('');
    const [selectedVenue, setSelectedVenue] = useState('');
    const [selectedCatering, setSelectedCatering] = useState('');
    const [selectedDecoration, setSelectedDecoration] = useState('');
    const [selectedMedia, setSelectedMedia] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const selectedVenueIndex = predefinedVenues.indexOf(selectedVenue);

        const bookingData = {
            "event_name": eventName,
            "date": date,
            "start_time": startTime,
            "end_time": endTime,
            "exp_attendee": expectedAttendees,
            "venue": {
                "name": selectedVenue,
                "address": predefinedAddresses[selectedVenueIndex],
                "location": predefinedLocations[selectedVenueIndex]
            },
            "catering": { "menu": selectedCatering },
            "decoration": { "decor_type": selectedDecoration },
            "media": { "media_type": selectedMedia }
        };

        try {
            const response = await axios.post('http://localhost:8080/bookings/insert', bookingData);
            alert('Booking has been successfully created!');
            console.log('Response:', response.data);
            setBookingSuccess(true);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Create Booking</h1>
            <form onSubmit={handleSubmit}>
                <label>Event Name:</label>
                <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />

                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <label>Start Time:</label>
                <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />

                <label>End Time:</label>
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />

                <label>Expected Attendees:</label>
                <input
                    type="number"
                    value={expectedAttendees}
                    onChange={(e) => setExpectedAttendees(e.target.value)}
                    required
                />

                <label>Venue:</label>
                <select value={selectedVenue} onChange={(e) => setSelectedVenue(e.target.value)} required>
                    <option value="">Select a Venue</option>
                    {predefinedVenues.map((venue, index) => (
                        <option key={index} value={venue}>{venue}</option>
                    ))}
                </select>

                <label>Catering:</label>
                <select value={selectedCatering} onChange={(e) => setSelectedCatering(e.target.value)} required>
                    <option value="">Select a Catering</option>
                    {predefinedCatering.map((catering, index) => (
                        <option key={index} value={catering}>{catering}</option>
                    ))}
                </select>

                <label>Decoration:</label>
                <select value={selectedDecoration} onChange={(e) => setSelectedDecoration(e.target.value)} required>
                    <option value="">Select a Decoration</option>
                    {predefinedDecorations.map((decoration, index) => (
                        <option key={index} value={decoration}>{decoration}</option>
                    ))}
                </select>

                <label>Media:</label>
                <select value={selectedMedia} onChange={(e) => setSelectedMedia(e.target.value)} required>
                    <option value="">Select a Media</option>
                    {predefinedMedia.map((media, index) => (
                        <option key={index} value={media}>{media}</option>
                    ))}
                </select>

                {/* ... Other dropdowns for Catering, Decoration, and Media */}

                <button type="submit" >Create Booking</button>

                {bookingSuccess && (
                    <Link to="/profile" className="nav-link active" aria-current="page">
                        Profile
                    </Link>
                )}
            </form>
        </div>
    );
}

export default BookingForm;
