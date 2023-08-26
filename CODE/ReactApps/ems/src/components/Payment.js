import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

const PaymentComponent = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

        // If not logged in, redirect to login page
        if (!isLoggedIn) {
            navigate('/login'); // Replace '/login' with the actual login route
        }
    }, [navigate]);




    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const eventId = queryParams.get('eventId');

    const [paymentDetails, setPaymentDetails] = useState(null);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    // const navigate = useNavigate(); console.log(eventId);

    // useEffect(() => {
    //     if (isPaymentSuccessful) {
    //         const timeout = setTimeout(() => {
    //             navigate('/profile');
    //         }, 4000);

    //         return () => clearTimeout(timeout);
    //     }
    // }, [isPaymentSuccessful, navigate]);

    useEffect(() => {
        // Fetch payment details based on the event_id prop
        axios.get(`http://localhost:8080/payment/${eventId}`)
            .then(response => {
                setPaymentDetails(response.data);
                console.log(paymentDetails);
            })
            .catch(error => {
                console.error('Error fetching payment details:', error);
            });
    }, [eventId]);

    const handlePayNow = () => {
        // Simulate payment processing
        setTimeout(() => {
            setIsPaymentSuccessful(true);
        }, 1000);
    };

    return (
        <div className="container mt-5">
            <div className="payment-container border p-4 text-center">
                <h2>Payment Summary</h2>
                {paymentDetails ? (
                    <>
                        <p>Total Venue Cost: {paymentDetails.venue_amt}</p>
                        <p>Total Catering Cost: {paymentDetails.catering_amt}</p>
                        <p>Total Media Cost: {paymentDetails.media_amt}</p>
                        <p>Total Decoration Cost: {paymentDetails.decoration_amt}</p>
                        <p className="total">Total Amount: {paymentDetails.total}</p>
                    </>
                ) : (
                    <p>Loading payment details...</p>
                )}
                {!isPaymentSuccessful ? (
                    <button className="btn btn-primary pay-button" onClick={handlePayNow}>
                        Pay Now
                    </button>
                ) : (
                    <p className="payment-success text-success font-weight-bold">Payment Successful!</p>
                )}
            </div>
        </div>
    );
};

export default PaymentComponent;
