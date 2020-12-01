const express = require('express')
const app = express()
const port = 5000;

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://zimin406:kwak2046@cluster0.mbdfl.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example App listening on port ${port}!`))
