import axios from 'axios';

const instance = axios.create({
    baseURL:'https://backend-tinder-ashish.herokuapp.com/',
});

export default instance;