import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";


export const user_photo = createAction('user_photo', (obj) => {

    return {
        payload: {
            photo: obj.photo
        }
    }
})

export const user_login = createAsyncThunk('user_login', async (obj) => {

    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signin', obj.data)
        localStorage.setItem('token', data.response.token);
        localStorage.setItem('user', JSON.stringify(data.response.user));
        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})

export const user_logup = createAsyncThunk('user_logup', async (obj) => {

    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signup', obj.data)
        localStorage.setItem('token', data.response.token);
        localStorage.setItem('user', JSON.stringify(data.response.user));
        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})

export const user_google = createAsyncThunk('user_google', async (obj) => {

    const data = obj.data ? obj.data : obj
    if (data) {
        Swal.fire({
            imageUrl: data.user.image,
            text: `Welcome, ${data.user.name}`,
            timer: 3000
        })
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        window.location.reload();
        return {
            user: data.user,
            token: data.token
        }
    }
    Swal.fire({
        text: 'Something went wrong, try again later',
        icon: 'error'
    })
    return {
        user: null
    }
})

export const user_logout = createAction('user_logout');

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})