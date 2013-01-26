/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>' +
        ' Licensed <%= pkg.license %> */'
    },
    browserify:{

        "public/app.js": {
          entries: ['src/js/app.js'],
          prepend: ['src/vendor/**/*.js','src/templates/templates.js'],
          append: [],
          hook:function(bundle){}
        },
        "test/specs.js":{
           entries: ['test/spec/test.js'],
           prepend: ['src/vendor/**/*.js','src/templates/templates.js']
        }
    },
    lint: {
      files: ['test/spec/**/*.js','src/js/**/*.js']
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'public/app.js'],
        dest: 'public/app.min.js'
      }
    },
    less: {
      dist: {
        options: {
          paths: ["src/less"],
          yuicompress:true
        },
        files: {
          "public/app.min.css": "src/less/app.less"
        }
      },
      dev:{

        options: {
          paths: ["src/less"]
        },
        files: {
          "public/app.css": "src/less/app.less"
        }

      }

    },
    watch: {
      files: ['grunt.js','src/js/**/*.js','src/less/**/*.less','src/templates/**/*.hbs','test/spec/**/*.js'],
      tasks: 'dev'
    },
    reload: {
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true,
        browser: true,
        asi: true
      },
      globals:{}
    },
    mocha: {
      index: ['test/runner.html']
    },
    test:{
    },
    uglify: {},
    handlebars: {
      compile: {
        options: {
          namespace: "templates",
          wrapped:true,
          processName: function(filename) {
            var pieces = filename.split("/");
            var name = pieces.slice(2)
            var end = name[name.length-1].split(".")
            name[name.length-1]=end[0];
            return name.join(".")
          }
        },
        files: {
          "src/templates/templates.js":"src/templates/**/*.hbs"
        },
        processName: function(filename) {
        return filename.toUpperCase();
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-browserify');

  

  // Default task.
  grunt.registerTask('default', 'handlebars less:dev lint browserify');
  grunt.registerTask('dev','default reload')
  grunt.registerTask('test','default mocha')
  grunt.registerTask('prod','handlebars less:dist lint browserify mocha min')


  grunt.registerTask('server', 'Start a custom web server.', function() {
    var done = this.async();
        var express = require('express')
    var app = express()
    app.use(express.static(__dirname+'/public'))
    app.use(express.static(__dirname + '/test'));
    app.listen(8000).on('close', done);
    grunt.log.writeln('Starting web server on port 8000');
  });

};
