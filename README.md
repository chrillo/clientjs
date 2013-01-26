boilerplate setup for building and testing javascript frontend apps 
===================================================================

Building
--------

* all frontend code is written in commonjs style modules
* grunt based buildscript with browserify
* auto compilation of less for styles
* auto compilation templates, handlebars are used, but could easily replaced with an other library


Testing
-------

* testing with mocha and chai
* all frontend modules can be required and tested individually, allows for actual unit testing thanks to browserify 
* tests can be run in the browser or with phantomjs

Usage
-----

* grunt dev compiles the code but does not minfy it
* grunt test compiles the code and runs all tests
* grunt prod compiles the code and minifies it
* grunt watch watches the code and recompiles after changes
* grund server starts a static file server


TODO
-----------------------------------------
functional testing with mocha & zombie.js


Reading
-------

These links helped me put this thing togehter

* [client-side-testing-insanity](http://rzrsharp.net/2012/08/01/client-side-testing-insanity.html)
* [functional testing with mocha and zombiejs](http://dotheweb.posterous.com/functional-testing-for-nodejs-using-mocha-and)