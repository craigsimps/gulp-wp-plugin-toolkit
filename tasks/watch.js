'use strict';

const gulp = require('gulp'),
    config = require('../config');

module.exports = function () {
    gulp.watch(config.src.scss, ['build:css']);
    gulp.watch(config.src.js, ['build:js']);
    gulp.watch(config.src.php, ['build:i18n']);
};
