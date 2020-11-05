const express = require('express');
const app = express();
const port = 8080;
const fetch = require('node-fetch');


app.get('/api/cars', (req, res) => {
 fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims')
  .then(data => data.text())
  .then(havetotrim => {
   const trimmed = havetotrim.replace(/[?]/i, '').replace(/[(]/i, '').replace(/[)](?!.*[)])/i, '').replace(/[;](?!.*[;])/i, '')
   return JSON.parse(trimmed)
  })
  //.then(textData => JSON.parse(textData))
  .then(parsedData => res.send(parsedData))
})

app.listen(port, () => console.log(`Server up on port ${port}`))