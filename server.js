const express = require('express');
const app = express();
const port = 8080;
const fetch = require('node-fetch');

app.get('/api/cars', (req, res) => {
  let url = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims'
  const object1 = req.query
  for (const [key, value] of Object.entries(object1)) {
    url += `&${key}=${value}`
  }
  fetch(url)
    .then(data => data.text())
    .then(havetotrim => {
      const trimmed = havetotrim.replace(/[?]/i, '').replace(/[(]/i, '').replace(/[)](?!.*[)])/i, '').replace(/[;](?!.*[;])/i, '')
      return JSON.parse(trimmed)
    })
    .then(parsedData => res.send(parsedData))
})

app.get('/api/years', (req, res) => {
  fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears')
    .then(data => data.text())
    .then(havetotrim => {
      const trimmed = havetotrim.replace(/[?]/i, '').replace(/[(]/i, '').replace(/[)](?!.*[)])/i, '').replace(/[;](?!.*[;])/i, '')
      return JSON.parse(trimmed)
    })
    .then(parsedData => res.send(parsedData))
})

app.get('/api/getImages', (req, res) => {
  const searchTerm = req.query
  const newSearchTerm = searchTerm.searchTerm.replace(/\s/g, '+');
  let url = `http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${newSearchTerm}`
  fetch(url)
    .then(data => data.text())
    .then(trimAgain => {
      const trimmed = trimAgain.match(/[\n\r].*http:\s*([^\n\r]*).*</i)[1]
      return `http:${trimmed}`
    })
    .then(parsedData => res.send(parsedData))
})

app.listen(port, () => console.log(`Server up on port ${port}`))