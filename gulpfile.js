const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('zip_code', () =>
    gulp.src('src/*.htm')
        .pipe(zip('um.zip'))
        .pipe(gulp.dest('dist'))
);
gulp.task('default', ['zip_code'], function() {
    gulp.watch(['src/*.htm'], ['zip_code']);
});