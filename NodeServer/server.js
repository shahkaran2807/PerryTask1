// server.js
const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3001;
const {add} = require('./test');
const axios = require('axios');
const fs = require('node:fs');
const { log } = require('node:console');
const path = require('node:path');



console.log(add(2,3));

app.use(cors()); 


function getImages(url, cnt) {
  console.log(`Downloading image from ${url}`);
  axios({
    url,
    method: 'GET',
    responseType: 'stream', 
  })
    .then(response => {
      const imagePath = `../myapp/src/images/image${cnt}.jpg`
      const writer = fs.createWriteStream(imagePath);

      response.data.pipe(writer);

      writer.on('finish', () => {
        console.log(`Image saved as ${imagePath}`);
      });

      writer.on('error', error => {
        console.error('Error writing image to file:', error);
      });
    })
    .catch(error => {
      console.error('Error downloading image:', error.message);
    });
}

app.get('/getImages', (req, res) => {
    axios.get('https://api.unsplash.com/photos/?client_id=1Pq-l-E8sKTW76b7p9xdcui6XLXiIzuMmsZ9B8NnQtQ&page=1')
      .then(response => {
        var cnt = 0
        response.data.forEach(element => {
          cnt+=1;
          // console.log(element.urls.raw);
        getImages(element.urls.raw, cnt)
        // res.send('Completed')
        });

      
      })
      .catch(error => {
        console.error('Error making API call:', error);
      });

})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

