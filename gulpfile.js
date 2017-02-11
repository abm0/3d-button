var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');

gulp.task('livereload', function() {
  watch([
    'dist/index.js',
    'index.html',
    'style.css'
  ])
    .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('js', function() {
  gulp
    .src('src/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/index.js', ['js']);
});

gulp.task('default', ['webserver', 'watch', 'livereload', 'js']);
