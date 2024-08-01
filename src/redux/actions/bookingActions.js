import axios from 'axios';
import { message } from 'antd';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PiUpaFDimT2TUKrzsbD4PAD1eFlw4v0PYqXv5lT39ADJnJ77JEcKQC6C5SiwieGLoWyZQyHNDWJNOKLlxBp1lbs00Z0Vg0vC6');

export const bookCar = (reqObj) => async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        // Step 1: Create Checkout Session
        const response = await axios.post('http://localhost:5005/api/create-checkout-session', reqObj);

        const { id: sessionId } = response.data;

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({ sessionId });


        if (error) {
            console.error('Error redirecting to Checkout:', error);
            message.error('Failed to redirect to checkout.');
        }

        dispatch({ type: 'LOADING', payload: false });
    } catch (err) {
        console.error(err);
        dispatch({ type: 'LOADING', payload: false });
        message.error('Unable to book your car, please try again later');
    }
};

export const getAllBookings = () => async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        const response = await axios.get('http://localhost:5005/api/getallbookings');
        dispatch({ type: 'GET_ALL_BOOKINGS', payload: response.data });
        dispatch({ type: 'LOADING', payload: false });
    } catch (err) {
        console.error(err);
        dispatch({ type: 'LOADING', payload: false });
    }
};
