const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['styles', 'watch']);

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('watch',function() {
  gulp.watch('sass/**/*.scss',['styles']);
});
