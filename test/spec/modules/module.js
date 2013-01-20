describe("Module",function(){

	var Module = require('../../../src/js/modules/module');
	
	it("should be a function",function(done){
		Module.should.be.a("function")
		done()
	})

	it("should have a method that returns some data",function(done){
		var m = new Module()
			m.method.should.be.a("function")

		var data = m.method()
			data.should.be.a("object")
			data.should.have.property("some")
			data.some.should.equal("data")
			done()
	})

})