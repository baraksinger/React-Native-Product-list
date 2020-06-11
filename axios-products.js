import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://barak-rn-product-list.herokuapp.com/'
});

export default instance;