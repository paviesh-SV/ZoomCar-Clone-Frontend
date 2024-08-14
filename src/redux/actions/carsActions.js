import axios from "axios";
import { message } from 'antd';

export const getAllCars = () => async dispatch => {
    dispatch({type: 'LOADING', payload: true})

    try {
        const cars = await axios.get('https://zoomcar-clone-backend-45xc.onrender.com/api/cars/getallcars')
        // const cars = await axios.get('http://localhost:5005/api/cars/getallcars')
        dispatch({type: 'GET_ALL_CARS', payload: cars.data})
        dispatch({type: 'LOADING', payload: false})
    } catch(err) {
        dispatch({type: 'LOADING', payload: false})
        console.error(err);
    }
}

export const editCar = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})

    try{
        await axios.post('https://zoomcar-clone-backend-45xc.onrender.com/api/cars/editcar', reqObj)
        // await axios.post('http://localhost:5005/api/cars/editcar', reqObj)
        dispatch({type: 'LOADING', payload: false})
        message.success('Successfully edited car details')
        setTimeout(() => {
            window.location.href = "/admin"
        }, 1000)
    } catch(err) {
        console.error(err);
        dispatch({type: 'LOADING', payload: false})
    }
}

export const deleteCar = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})

    try{
        await axios.post('https://zoomcar-clone-backend-45xc.onrender.com/api/cars/deletecar', reqObj)
        // await axios.post('http://localhost:5005/api/cars/deletecar', reqObj)
        dispatch({type: 'LOADING', payload: false})
        message.success('Successfully deleted car details successfully')
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    } catch(err) {
        console.error(err)
        dispatch({type: 'LOADING', payload: false})
    }
}

export const addCar = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})

    try{
        await axios.post('https://zoomcar-clone-backend-45xc.onrender.com/api/cars/addcar', reqObj)
        // await axios.post('http://localhost:5005/api/cars/addcar', reqObj)
        dispatch({type: 'LOADING', payload: false})
        message.success('Added new car succesfully')
        setTimeout(() => {
            window.location.href = "/admin"
        }, 1000)
    } catch(err) {
        console.error(err)
        dispatch({type: 'LOADING', payload:false})
    }
}