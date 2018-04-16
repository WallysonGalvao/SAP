// Carregando o gulp e os plugins através da função `require` do nodejs
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('webserver', function () {
  browserSync.init({
    cors: true,
    server: {
      baseDir: "./",
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
      }
    }
  });
});

gulp.task('default', function () {
  gulp.start('webserver');
});