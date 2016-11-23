(function () {
  'use strict';

  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon'),
    notifier = require("node-notifier"),
    gutil = require('gulp-util');

  /**
   * Build styles for application from SASS for
   */
  gulp.task('buildSass', function () {
    console.log('Building main sass');
    gulp.src('./client/styles/app.scss')
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sass().on('error', function (err) {
        gutil.log(gutil.colors.bgRed("Sass compile error"), gutil.colors.bgBlue(err.message));
        notifier.notify({title: "Sass compile error", message: err.message });
        this.emit("end");
      }))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./client/build/'));
  });

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
  gulp.task('default', ['buildSass', 'startServer']);

}());
