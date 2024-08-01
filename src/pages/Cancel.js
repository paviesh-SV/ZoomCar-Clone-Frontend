import React from 'react';
import './Cancel.css';

const Cancel = () => {
    return (
        <div className="cancel-container">
            <h1>Transaction Canceled</h1>
            <p>Your transaction has been canceled. Please try again if this was a mistake.</p>
            <button onClick={() => window.location.href = '/'}>Go to Home</button>
        </div>
    );
};

export default Cancel;
