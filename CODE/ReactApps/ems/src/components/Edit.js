

function EditComponent() {

    const [editFormData, setEditFormData] = useState({
        "event_id": bookingData.event_id,
        "event_name": "",
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

