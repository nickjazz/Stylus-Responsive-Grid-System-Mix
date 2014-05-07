'use strict';

/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        stylus: {
          complite:{
            options:{
              compress: true,
              linenos: false,
            },
            files:{ 
              'css/main.min.css': [ 'css/stylus/main.styl' ] }
          }
        },
        watch: {
          options: { livereload: true },
          stylus: {
            files: ['css/**/*.styl'],
            tasks: ['stylus']
          }
        },

    });

    // load tasks
    ['grunt-contrib-stylus',
     'grunt-contrib-watch'].forEach(grunt.loadNpmTasks)

    // define the tasks
    grunt.registerTask(
      'stylesheets', 
      'Compiles the stylesheets.', 
      [ 'stylus' ]
    );

    grunt.registerTask(
    'default', 
    'Watches the project for changes, automatically builds them and runs a server.', 
      [ 'watch' ]
    );
    
};
