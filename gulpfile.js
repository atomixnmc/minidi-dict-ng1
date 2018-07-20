const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack  = require('webpack-stream');
const surge = require('gulp-surge');
const runSequence = require('run-sequence');

gulp.task('env:prod', function() {
  process.env.NODE_ENV = 'production';
});

gulp.task('build:prod', function(done) {
  runSequence(
    'env:prod',
    [
      'webpack'
    ], done);
});

gulp.task('deploy:prod', function(done) {
  runSequence(
    'env:prod',
    [
      'webpack'
    ],
    [
      'deploy'
    ], done);
});

gulp.task('webpack', function() {
  return gulp.src('src/app/app.js')
    .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('dist/'));
});

gulp.task('deploy', [], function () {
  return surge({
    project: './dist',         // Path to your static build directory
    domain: 'minidi.surge.sh'  // Your domain or Surge subdomain
  })
})