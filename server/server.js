const path = require('path');
const express = require('express');



var app = express();



var dirPath = path.join(__dirname , '../public');

var port = process.env.PORT || 3000;

//console.log(dirPath);

app.use(express.static(dirPath));





app.listen(port, () => {
    console.log('App is runnign on Port 3000');
})