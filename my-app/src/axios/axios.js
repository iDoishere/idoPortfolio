
const axios = require('axios');
const apiClient = axios.create({
    baseURL:'https://portfolioido.firebaseio.com/'
})
 

export default {
       sendToFire : (obj) => {    
        return apiClient.post('contact.json', { obj })
        .catch(err => {
        return err;
    })
    }
}


 