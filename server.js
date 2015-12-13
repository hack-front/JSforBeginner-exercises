var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname,'public'));

app.listen(process.env.PORT, process.env.IP);