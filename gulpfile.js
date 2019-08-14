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
let babelify = require('babelify');
let browserify = require('browserify');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

const version = JSON.parse(fs.readFileSync('package.json')).version;
const banner = '/*! xtend v' + version + ' (https://getxtend.com/)\n' + '@copyright (c) 2017 - 2019 Riccardo Caroli\n' + '@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */';
const babelifyOptions = {
  presets: [
    ['@babel/preset-env',
      {
        modules: 'commonjs',
        targets: {browsers: ['>0.25%', 'Explorer 11', 'not op_mini all']}
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-transform-for-of'],
    ['@babel/plugin-transform-arrow-functions'],
    ['@babel/plugin-proposal-object-rest-spread']
  ]
};

// compile less

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

gulp.task('js', function () {
  let b = browserify({
    entries: 'src/scripts/xtend.js',
    standalone: 'Xt',
    debug: true
  }).transform(babelify, babelifyOptions);
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
    .pipe(gulp.dest('dist/scripts/'));
});
gulp.task('js:watch', function (done) {
  gulp.watch(['src/scripts/**/*.js'], gulp.series('js'));
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

gulp.task('default', gulp.series('build'));
