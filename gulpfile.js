let fs = require('fs');
let gulp = require('gulp');
let log = require('fancy-log');
let child = require('child_process');
let buffer = require('vinyl-buffer');
let source = require('vinyl-source-stream');

let less = require('gulp-less');
let gutil = require('gulp-util');
let cache = require('gulp-cached');
let terser = require('gulp-terser');
let rename = require('gulp-rename');
let replace = require('gulp-replace');
let browserify = require('browserify');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

const version = JSON.parse(fs.readFileSync('package.json')).version;
const banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2019 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";

// compile less

gulp.task('less:demos', function () {
  return gulp.src(['src/docs/demos/**/*.less', '!src/docs/demos/**/_*.less'])
    .pipe(cache('cache:less:demos'))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/docs/demos/'));
});
gulp.task('less:demos:watch', function (done) {
  gulp.watch(['src/styles/**/*.less', 'dist/styles/**/*.less', 'src/docs/demos/**/*.less'], gulp.series('less', 'less:demos'));
  done();
});

gulp.task('lessmin:docs', gulp.series('less:demos', function () {
  return gulp.src(['src/docs/assets/styles/**/*.less', '!src/docs/assets/styles/**/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/styles/'));
}));
gulp.task('less:docs', gulp.series('lessmin:docs', function () {
  return gulp.src(['src/docs/assets/styles/**/*.less', '!src/docs/assets/styles/**/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/styles/'));
}));
gulp.task('less:docs:watch', function (done) {
  gulp.watch(['src/styles/**/*.less', 'dist/styles/**/*.less', 'src/docs/assets/styles/**/*.less'], gulp.series('less', 'less:docs'));
  done();
});

gulp.task('lessmin', function () {
  return gulp.src(['dist/styles/*.less', '!dist/styles/_*.less'])
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/styles/'));
});
gulp.task('less', gulp.series('lessmin', function () {
  return gulp.src(['dist/styles/*.less', '!dist/styles/_*.less'])
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/styles/'));
}));
gulp.task('less:watch', function (done) {
  gulp.watch(['src/styles/**/*.less', 'dist/styles/**/*.less'], gulp.series('less'));
  done();
});

// compile js

gulp.task('js:demos', function () {
  let b = browserify({
    entries: 'src/docs/assets/scripts/demos.js',
    debug: true
  });
  return b.bundle()
    .pipe(source('demos.min.js'))
    .pipe(buffer())
    .pipe(terser({
      output: {
        comments: /^!/
      }
    }))
    .pipe(gulp.dest('src/docs/assets/scripts/'));
});
gulp.task('js:demos:watch', function (done) {
  gulp.watch(['src/scripts/**/*.js', 'src/docs/assets/scripts/demos.js'], gulp.series('js', 'js:demos'));
  done();
});

gulp.task('js:docs', function () {
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
});
gulp.task('js:docs:watch', function (done) {
  gulp.watch(['src/scripts/**/*.js', 'src/docs/assets/scripts/theme.js'], gulp.series('js', 'js:docs'));
  done();
});

gulp.task('js', function () {
  let b = browserify({
    entries: 'src/scripts/xtend.js',
    standalone: 'Xt',
    debug: true
  });
  return b.bundle()
    .pipe(source('xtend.min.js'))
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(terser({
      output: {
        comments: /^!/
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(gulp.dest('src/docs/assets/scripts/'));
});
gulp.task('js:watch', function (done) {
  gulp.watch(['src/scripts/**/*.js'], gulp.series('js'));
  done();
});

// site

gulp.task('site:build', function (callback) {
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

gulp.task('site:serve', function (callback) {
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

gulp.task('site:watch', function (done) {
  gulp.watch(['src/docs/**/*.*'], gulp.series('site:build'));
  done();
});

// version

gulp.task('version', function () {
  // replace _config.yml
  return gulp.src('_config.yml', {base: './'})
    .pipe(replace(/version: (.*)/, 'version: ' + version))
    .pipe(gulp.dest('./'));
});

// scripts

gulp.task('build',
  gulp.series(gulp.parallel('less', 'js'))
);

gulp.task('watch',
  gulp.series(gulp.parallel('build'), gulp.parallel('less:watch', 'js:watch'))
);

gulp.task('build:docs',
  gulp.series(gulp.parallel('build'), gulp.parallel('less:docs', 'less:demos', 'js:docs', 'js:demos'), gulp.parallel('site:build'))
);

gulp.task('watch:docs',
  gulp.series(gulp.parallel('build:docs'), gulp.parallel('site:watch', 'less:docs:watch', 'less:demos:watch', 'js:docs:watch', 'js:demos:watch'), gulp.parallel('site:serve'))
);

gulp.task('default', gulp.series('build'));
