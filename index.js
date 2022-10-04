const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World from ThreeFold!')
})

app.listen(port, () => {
  console.log(`Example Node app running on the ThreeFold grid listening on port  ${port}`)
})
