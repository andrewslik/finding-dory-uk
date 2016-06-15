var gulp = require('gulp'),
    server = require('gulp-express'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch'),
    minifycss = require('gulp-minify-css');

gulp.task('watch', function () {

    gulp.watch(['app.js', 'app/server/routes/**/*.js',
                'app/server/models/**/*.js',
                'app/server/views/**/*.js',
                'app/server/config/**/*.js'], [server.notify]);

    gulp.watch(['app/public/build/css/*.css'], ['css']);
    gulp.watch(['app/public/build/views/*.html'], ['html']);
    gulp.watch(['app/public/src/js/**/*'], ['js']);
});

gulp.task('js', function () {
    gulp.src(['app/public/src/js/lib/angular/angular.min.js',
                     'app/public/src/js/lib/angular-route/angular-route.min.js',
                     'app/public/src/js/lib/angular-loading-bar/angular-loading-bar.js',
                     'app/public/src/js/lib/mobile-detect.min.js',
                     'app/public/src/js/app/app.js',
                     'app/public/src/js/app/animation.js',
                     'app/public/src/js/app/filters/**/*.js',
                     'app/public/src/js/app/controllers/**/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('app/public/build/js'))
        .pipe(server.notify())
        .pipe(notify({
            message: 'Finished minifying JavaScript'
        }));
});

gulp.task('html', function () {
    gulp.src('app/public/build/views/**/*.html')
        .pipe(server.notify());
});

gulp.task('css', function () {
    gulp.src('app/public/build/css/**/*.css')
        .pipe(server.notify());
});

gulp.task('express', function () {
    gulp.src(['app.js',
              'app/server/routes/**/*.js',
                'app/server/models/**/*.js',
                'app/server/views/**/*.js',
                'app/server/config/**/*.js'])
        .pipe(server.notify());
});



gulp.task('server', function () {

    server.run(['bin/www']);

});

gulp.task('default', ['watch', 'js', 'html', 'css', 'express', 'server']);
