const express = require('express')
const bodyParser = require('body-parser')

const app = express()

require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./routes/routes'))

//app.use('/api',apiRouter);

app.listen(9000, () => { 
    console.log('server running on', 'http://localhost:' + 9000)
})