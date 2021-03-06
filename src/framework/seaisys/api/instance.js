import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Accept-Language': I18N_LNG,
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
});

api.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export default api;