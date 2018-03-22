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

// main

gulp.task('default', ['build']);

gulp.task('build', ['version'], function(done) {
  runSequence(['copy-dist'], function(done) {
    runSequence(['bower'], function(done) {
      runSequence(['site']);
    });
  });
});

gulp.task('watch', ['version'], function(done) {
  runSequence(['copy-dist'], function(done) {
    runSequence(['bower'], function(done) {
      runSequence(['site-serve', 'version:watch', 'less:watch', 'js-dist:watch', 'js:watch']);
    });
  });
});

// compile less and js

gulp.task('copy-dist', ['less', 'js', 'js-dist'], function() {
  return gulp.src('dist/*')
    .pipe(gulp.dest('src/docs/assets/xtend/'));
});

gulp.task('less:watch', function() {
  gulp.watch(['dist/*.less', 'src/docs/assets/styles/*.less', 'src/docs/demos/**/*.less'], ['copy-dist']);
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

gulp.task('js:watch', function() {
  gulp.watch(['src/docs/assets/scripts/main.js', '!src/docs/assets/scripts/*.min.js'], ['js']);
});
gulp.task('js', function() {
  return gulp.src(['src/docs/assets/scripts/main.js', '!src/docs/assets/scripts/*.min.js'])
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
  gulp.watch(['dist/*.js', '!dist/*.min.js'], ['copy-dist']);
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
  runSequence(['less', 'js', 'site'], function(done) {
    runSequence(['copy-dist']);
  });
});
gulp.task('version', function() {
  var version = JSON.parse(fs.readFileSync('package.json')).version;
  // inject _config.yml
  gulp.src('_config.yml')
    .pipe(injectString.replace(/version: (.*)/, 'version: ' + version))
    .pipe(gulp.dest(''));
  // inject styles and js
  var banner = "/*! xtend v" + version + " (http://www.minimit.com/xtend/)\n" + "@copyright (c) 2016 - 2017 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend/blob/master/LICENSE) */";
  return gulp.src(['dist/*.less', 'dist/*.js'])
    .pipe(injectString.replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(gulp.dest('src/docs/assets/xtend/'));
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

// inject bower

gulp.task('bower', function() {
  return gulp.src('bower.json')
    .pipe(inject(gulp.src(['dist/*.less', 'dist/*.css', 'dist/*.js'], {read: false}), {
      starttag: '"main": [',
      endtag: ']',
      transform: function (filepath, file, i, length) {
        return '"' + filepath + '"' + (i + 1 < length ? ', ' : '');
      }
    }))
    .pipe(gulp.dest(''));
});