(function () {
  'use strict';

  var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');
    
  /**
   * Start the server and watch for changes in server folder
   */
  gulp.task('startServer', function () {
    nodemon({
      script: 'server/server.js',
      ext: 'js',
      ignore: ['node_modules/**', 'client/**', 'gulpfile.js']
    });
  });

  // Default Gulp Task
  gulp.task('default', ['startServer']);

}());
