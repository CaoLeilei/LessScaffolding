var gulp = require('gulp');
var $ = require('gulp-load-plugins');
var less = require('gulp-less');

gulp.task('test-pc', function () {
    var _src = ['./less/pc/base.less'];
    return gulp.src(_src)
        .pipe(less())
        .pipe(gulp.dest('./test/pc/'));
});


gulp.task('watch-pc', ['text-pc'], function () {
    gulp.watch(['./less/pc/**/*.less'], ['text-pc']);
})