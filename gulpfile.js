'use strict';

let fs = require('fs');
let gulp = require('gulp');
let log = require('fancy-log');
let child = require('child_process');
let buffer = require('vinyl-buffer');
let source = require('vinyl-source-stream');

let less = require('gulp-less');
let gutil = require('gulp-util');
let replace = require('gulp-replace');
let browserify = require('browserify');
let terser = require('gulp-terser');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

// compile less

gulp.task('less-dist', function () {
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  let banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return gulp.src(['dist/styles/*.less', '!dist/styles/_*.less'])
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/styles/'));
});
gulp.task('less-demos', gulp.series('less-dist', function () {
  return gulp.src(['src/docs/demos/**/*.less', '!src/docs/demos/**/_*.less'])
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/docs/demos/'));
}));
gulp.task('less', gulp.series('less-demos', function () {
  return gulp.src(['src/docs/assets/styles/**/*.less', '!src/docs/assets/styles/**/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/styles/'));
}));
gulp.task('less:watch', function (done) {
  gulp.watch(['dist/styles/**/*.less', 'src/docs/demos/**/*.less', 'src/docs/assets/styles/**/*.less'], gulp.series('less', 'site-build'));
  done();
});

// compile js

gulp.task('js-dist', function () {
  let b = browserify({
    entries: 'src/scripts/xtend.js',
    debug: true
  });
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  let banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return b.bundle()
    .pipe(source('xtend.js'))
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(terser({
      output: {
        comments: /^!/
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/scripts/'));
});
gulp.task('js-theme', gulp.series('js-dist', function () {
  let b = browserify({
    entries: 'src/docs/assets/scripts/theme.js',
    debug: true
  });
  return b.bundle()
    .pipe(source('theme.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(terser({
      output: {
        comments: /^!/
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/scripts/'));
}));
gulp.task('js', gulp.series('js-theme', function () {
  let b = browserify({
    entries: 'src/docs/assets/scripts/xtend.js',
    debug: true
  });
  return b.bundle()
    .pipe(source('xtend.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(terser({
      output: {
        comments: /^!/
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/scripts/'));
}));
gulp.task('js:watch', function (done) {
  gulp.watch(['src/docs/assets/scripts/theme.js', 'src/docs/assets/scripts/xtend.js', 'src/scripts/*.js'], gulp.series('js', 'site-build'));
  done();
});

// html

gulp.task('content:watch', function (done) {
  gulp.watch(['src/docs/**/*.html', 'src/docs/demos/**/*.js'], gulp.series('site-build'));
  done();
});

// site

gulp.task('site-build', function (callback) {
  let jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build']);
  let jekyllLogger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  callback();
});

gulp.task('site-serve', function (callback) {
  let jekyll = child.spawn('bundle', ['exec', 'jekyll', 'serve', '--no-watch']);
  let jekyllLogger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  callback();
});


// version

gulp.task('version', function () {
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  log('package.json version: ' + version);
  // replace _config.yml
  return gulp.src('_config.yml', {base: './'})
    .pipe(replace(/version: (.*)/, 'version: ' + version))
    .pipe(gulp.dest('./'));
});
gulp.task('version-changed',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-build')
);
gulp.task('version:watch', function (done) {
  gulp.watch(['package.json'], gulp.series('version-changed', 'site-build'));
  done();
});

// scripts

gulp.task('watch',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-serve', gulp.parallel('version:watch', 'content:watch', 'less:watch', 'js:watch'))
);

gulp.task('build',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-build')
);

gulp.task('default', gulp.series('build'));
