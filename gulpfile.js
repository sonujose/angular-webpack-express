(function () {
  'use strict';

  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
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



/**Legacy gulp tasks */
  
  /**
   * Build styles for vendors from SASS
   */
  /*gulp.task('buildSassVendor', function () {
    console.log('Building vendor sass');
    gulp.src('./client/styles/vendor.scss')
      .pipe(sass().on('error', function (err) {
        gutil.log(gutil.colors.bgRed("Sass compile error (vendor)"), gutil.colors.bgBlue(err.message));
        notifier.notify({title: "Sass compile error (vendor)", message: err.message });
        this.emit("end");
      }))
      .pipe(gulp.dest('./client/build/'));
  });*/
/**
 *TODO: need to add build watch using webpack for livereload after editing files  
 *Currently commenting out gulp task for watch as it throws error on live reload
*/

  //watch changes
  //gulp.task('watch', function () {    
    //gulp.watch(['./client/main.js', './client/app/**/*.js'], ['buildApp']);
    //gulp.watch(['./client/app/**/*.html'], ['buildApp']);
    //gulp.watch(['./client/main.scss', './client/styles/*.scss', './client/app/**/*.scss'], ['buildSass']);
    //gulp.watch('./client/vendor.scss', ['buildSassVendor']);
  //});
/*gulp.task('compress-js', function (cb) {
      pump([
          gulp.src('./client/webpack-build/*.js'),
          uglify(),
          gulp.dest('./client/build/')
      ],
          cb
      );
  });*/
  
  

