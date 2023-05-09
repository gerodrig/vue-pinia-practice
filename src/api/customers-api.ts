import axios from 'axios';



const customersApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default customersApi;