
const axios = require('axios');
const instance = axios.create({
    baseURL:'https://portfolioido.firebaseio.com/'
})
export default instance;