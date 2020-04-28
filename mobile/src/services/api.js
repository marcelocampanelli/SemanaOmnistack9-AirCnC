import axios from 'axios';

const api = axios.create({
    baseURL: 'http://n5-6t8.anonymous.mobile.exp.direct:3333',
});

export default api;

