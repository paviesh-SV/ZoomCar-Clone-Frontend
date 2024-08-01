import React from 'react';
import './Sucess.css'; 

const Success = () => {
    return (
        <div className="success-container">
            <h1>Transaction Successful!</h1>
            <p>Your transaction has been completed successfully.</p>
            <button onClick={() => window.location.href = '/'}>Go to Home</button>
        </div>
    );
};

export default Success;
