// Carregando o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('webserver', ['watch'], function () {
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

// Task para fazer o reload automático dos arquivos ao serem modificados
gulp.task('watch', function () {

  gulp.watch("**/*.html").on('change', browserSync.reload);
  gulp.watch("**/*.xml").on('change', browserSync.reload);
  gulp.watch("**/*.js").on('change', browserSync.reload);
  gulp.watch("**/*.css").on('change', browserSync.reload);
  gulp.watch("**/*.json").on('change', browserSync.reload);
  gulp.watch("**/*.properties").on('change', browserSync.reload);

});

gulp.task('default', function () {
  gulp.start('webserver');
});