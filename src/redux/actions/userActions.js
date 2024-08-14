import axios from "axios";
import {message} from "antd";

export const userLogin = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})

    try{
        const response = await axios.post("https://zoomcar-clone-backend-45xc.onrender.com/api/users/login", reqObj)
        // const response = await axios.post("http://localhost:5005/api/users/login", reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Logged in Succesfully')
        dispatch({type: 'LOADING', payload: false})
        setTimeout(() => {
            window.location.href = '/'
        }, 1000)
    } catch(err) {
        console.error(err)
        message.error('Unable to Log in')
        dispatch({type: 'LOADING', payload: false})
    }
}

export const userRegister = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})

    try{
        const response = await axios.post('https://zoomcar-clone-backend-45xc.onrender.com/api/users/register', reqObj)
        // const response = await axios.post('http://localhost:5005/api/users/register', reqObj)
        message.success('Registered your data succesfully')
        dispatch({type: 'LOADING', payload: false})
        setTimeout(() => {
            window.location.href='/login'
        }, 1000)
    } catch(err) {
        console.error(err)
        message.error('Unable to register, try again later')
        dispatch({type: 'LOADING', payload: false})
    }
}