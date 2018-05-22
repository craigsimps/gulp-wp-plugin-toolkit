'use strict';

const gulp = require('gulp'),
    config = require('../config'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    map = require('lodash.map');

module.exports = function () {
    return map(config.js, function (outputConfig, outputFilename) {
        return gulp.src(outputConfig.src)
            .pipe(plumber())
            .pipe(concat(outputFilename + '.js'))
            .pipe(gulp.dest(outputConfig.dest))
            .pipe(notify({message: config.messages.js}))
            .pipe(uglify())
            .pipe(rename(outputFilename + '.min.js'))
            .pipe(gulp.dest(outputConfig.dest))
            .pipe(notify({message: config.messages.js}));
    });
};
