var Module = require('./modules/module')

var App = function(){

		$('body').html(template("index",{name:"app name",module:"module"}))

	}

$(function(){
	var app = new App();
})


module.exports = {}