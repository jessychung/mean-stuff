/*
 * Copyright (c) 2016
 * Thentia UK Limited
 * All Rights Reserved.
 *
 * This software may not be reproduced in any format for any use. It is the sole property of Thentia UK Limited and may only be used by Thentia UK Limited or its licensed subsidiaries.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function () {
    console.log('gulp is running...');
    return gulp.src('resources/**/*.scss')
        .pipe(sass({
            includePaths : ['web/assets/styles/sso/'],
            onError: function (err) {
                return notify().write(err);
            }
        }))
        .pipe(gulp.dest('resources'));
});

gulp.task('compile', function () {
    return gulp.src('resources/web/assets/styles/sso/styles/**/*.scss')
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('resources/web/assets/styles/sso/all'));
});

gulp.task('default', function () {
    gulp.watch('resources/**/*.scss', ['styles','compile']);
});