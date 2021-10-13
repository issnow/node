const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./static'))
app.get('/ok', (req, res) => {
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), h: true })
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123',
    ETag: '12345'
  })
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})