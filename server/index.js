let express = require('express');
let db = require('../db/index')

var app = express()

app.use(express.static(__dirname + '/../react-client/dist'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`The Port : ${ PORT }`);
});