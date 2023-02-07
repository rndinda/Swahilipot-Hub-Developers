const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('login!')
  })

  app.get('/Signup', (req, res) => {
    res.send('Signup!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})