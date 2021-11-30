// Sass configuration
var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass')(require('sass'));
var template = require('gulp-template-html');

gulp.task('sass', function (cb) {
  gulp
    .src('scss/*.scss')
    .pipe(sass())
    .pipe(
      gulp.dest('css/')
    );
  cb();
});

gulp.task('template-basic', function (cb) {
  return gulp.src('content/**/*.content.basic.html')
    .pipe(template('templates/template-basic.html'))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('.content.basic', '');
    }))
    .pipe(gulp.dest('./'));
  cb();
});


gulp.task('default', function () {
  gulp.watch(['scss/*.scss', 'scss/**/*.scss'], gulp.series('sass'));
  gulp.watch(['templates/template-basic.html', 'content/**/*.content.basic.html'], gulp.series('template-basic'));
});