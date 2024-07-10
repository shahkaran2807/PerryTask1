const axios = require('axios');

function getImages(url) {
    axios.get(url)
    .then(response => {
        // return url
        console.log(response.data);
    })
    .catch(error => {
      console.error('Error making API call:', error);
    });
    
}


  module.exports = {
    getImages
}