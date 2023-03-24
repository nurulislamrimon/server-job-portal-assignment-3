const express = require('express');
require('colors');
const cors = require('cors');


const app = express();
const port = process.env.port || 5000;


// middlewares
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the job portal!')
    console.log("home route responding");

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`.bgMagenta.bold)
})

module.exports = app;