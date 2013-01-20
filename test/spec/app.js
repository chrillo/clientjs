describe("App",function(){

	var App = require("../../src/js/app")

	it('should add the template to the body',function(done){

		$('body').find('.app').html().should.be.equal("app name")
	
		done()
	})
})
