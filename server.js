    var app = require('express')()
    app.use(express.static(__dirname+'/public'));

    module.exports = app