import axios from './http.js'

export function fetchPermission() {
    return axios.get('/permission.json')
}

export function login() {
    return axios.get('/login.json')
}