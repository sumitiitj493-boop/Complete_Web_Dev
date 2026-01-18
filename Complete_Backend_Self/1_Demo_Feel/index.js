require('dotenv').config()



const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
     res.send('Hello World')
})
app.get('/twitter', (req, res) => { //request and response
     res.send('Hello Twitter!')
})

app.get('/facebook', (req, res) => {
     res.send('<h1>Hello Facebook!</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1><a href="https://www.youtube.com/" target="_blank">Open YouTube</a></h1>');
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
