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
            domain: config.plugin.textdomain,
            package: config.plugin.name + ' ' + config.plugin.version
        }))
        .pipe(gulp.dest('languages/' + config.plugin.textdomain + '.pot'))
        .pipe(notify({message: config.messages.i18n}));
};
