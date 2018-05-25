'use strict';

const gulp = require('gulp'),
    config = require('../config'),
    sort = require('gulp-sort'),
    plumber = require('gulp-plumber'),
    potgen = require('gulp-wp-pot'),
    notify = require('gulp-notify');

module.exports = function () {
    return gulp.src(['**/*.php', '!vendor/**'])
        .pipe(plumber())
        .pipe(sort())
        .pipe(potgen({
            domain: config.project.textdomain,
            package: config.project.name + ' ' + config.project.version
        }))
        .pipe(gulp.dest('languages/' + config.project.textdomain + '.pot'))
        .pipe(notify({message: config.messages.i18n + config.project.textdomain + '.pot'}));
};
