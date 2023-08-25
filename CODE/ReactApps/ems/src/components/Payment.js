import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentComponent = () => {
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isPaymentSuccessful) {
            const timeout = setTimeout(() => {
                navigate('/profile');
            }, 4000);

            return () => clearTimeout(timeout);
        }
    }, [isPaymentSuccessful, navigate]);

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
                <p>Total Venue Cost: ""</p>
                <p>Total Catering Cost: ""</p>
                <p>Total Media Cost: ""</p>
                <p>Total Decoration Cost: ""</p>
                <p className="total">Total Amount:""</p>
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