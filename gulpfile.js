// Dependencies
const gulp = require('gulp');
const debug = require('gulp-debug');
const eslint = require('gulp-eslint');
const jsonlint = require('gulp-jsonlint');

// Lint JavaScript files
gulp.task('eslint', (done) => {
  gulp.src(['./data/**/*.js'])
  .pipe(debug({title: 'eslint:'}))
  .pipe(eslint())
  .pipe(eslint.failAfterError());

  done()
});

// Lint JSON files
gulp.task('jsonlint', (done) => {
  gulp.src(['./data/**/*.json'])
  .pipe(debug({title: 'jsonlint:'}))
  .pipe(jsonlint())
  .pipe(jsonlint.reporter());

  done()
});

// Tasks
gulp.task('lint', gulp.parallel('eslint', 'jsonlint', (done) => {
  done();
}));
