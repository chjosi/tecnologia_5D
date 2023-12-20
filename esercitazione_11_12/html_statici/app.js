var express = require('express');
var app = express();
const path = require('path');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname , 'index.html'));
});
app.get('/info', function(req, res) {
    res.sendFile(path.join(__dirname , 'info.html'));
});
app.get('/contacts', function(req, res) {
    res.sendFile(path.join(__dirname , 'contacts.html'));
});
app.listen(3000, function() {
    console.log("OK");
});