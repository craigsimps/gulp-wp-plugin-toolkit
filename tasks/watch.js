'use strict';

const gulp = require('gulp'),
    config = require('../config');

module.exports = function () {
    gulp.watch(config.project.watch.scss, ['build:css']);
    gulp.watch(config.project.watch.js, ['build:js']);
    gulp.watch(config.project.watch.php, ['build:i18n']);
};
