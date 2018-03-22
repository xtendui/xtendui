'use strict';

var gulp = require('gulp');
var fs = require('fs');
var pump = require('pump');
var less = require('gulp-less');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var injectString = require('gulp-inject-string');

// scripts

gulp.task('default', ['build']);

gulp.task('build', ['version'], function(done) {
  runSequence(['less', 'js', 'js-dist'], function(done) {
    runSequence(['site']);
  });
});

gulp.task('watch', ['version'], function(done) {
  runSequence(['less', 'js', 'js-dist'], function(done) {
    runSequence(['site-serve', 'version:watch', 'less:watch', 'js-dist:watch', 'js:watch']);
  });
});

// compile less

gulp.task('less:watch', function() {
  gulp.watch(['dist/*.less', 'src/docs/assets/styles/*.less', 'src/docs/demos/**/*.less'], ['less']);
});
gulp.task('less', ['less-demos'], function() {
  return gulp.src(['src/docs/assets/styles/*.less', '!src/docs/assets/styles/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dest('src/docs/assets/styles/'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/styles/'));
});
gulp.task('less-demos', ['less-dist'], function() {
  return gulp.src(['src/docs/demos/**/*.less', '!src/docs/demos/_*.less'])
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/docs/demos/'));
});
gulp.task('less-dist', function() {
  return gulp.src(['dist/*.less', '!dist/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dest('dist/'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/'));
});

// compile js

gulp.task('js:watch', function() {
  gulp.watch(['src/docs/assets/scripts/theme.js', '!src/docs/assets/scripts/*.min.js'], ['js']);
});
gulp.task('js', function() {
  return gulp.src(['src/docs/assets/scripts/theme.js', '!src/docs/assets/scripts/*.min.js'])
    //.pipe(sourcemaps.init())
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    //.pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/scripts/'));
});

gulp.task('js-dist:watch', function() {
  gulp.watch(['dist/*.js', '!dist/*.min.js'], ['js-dist']);
});
gulp.task('js-dist', function() {
  return gulp.src(['dist/*.js', '!dist/*.min.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/'));
});

// version

gulp.task('version:watch', function() {
  gulp.watch(['package.json'], ['version-changed']);
});
gulp.task('version-changed', ['version'], function(done) {
  runSequence(['less', 'js', 'site']);
});
gulp.task('version', function() {
  var version = JSON.parse(fs.readFileSync('package.json')).version;
  // inject _config.yml
  gulp.src('_config.yml')
    .pipe(injectString.replace(/version: (.*)/, 'version: ' + version))
    .pipe(gulp.dest(''));
  // inject styles and js
  var banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return gulp.src(['dist/xtend.less', 'dist/xtend.js'])
    .pipe(injectString.replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(gulp.dest('dist/'));
});

// site

gulp.task('site', function() {
  require('child_process').exec('bundle exec jekyll build', function(err, stdout, stderr) {
    console.log(stdout);
  });
});
gulp.task('site-serve', function() {
  require('child_process').exec('bundle exec jekyll s', function(err, stdout, stderr) {
    console.log(stdout);
  });
});
