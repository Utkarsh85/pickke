var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./**/*')
    .pipe(ghPages({
      remoteUrl:'git@github.com:Utkarsh85/pickke.git',
      force: true
    }));
});
