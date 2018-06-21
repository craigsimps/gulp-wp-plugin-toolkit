'use strict';

const gulp = require('gulp'),
    config = require('../config'),
    plumber = require('gulp-plumber'),
    sourcemap = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    mqpacker = require('css-mqpacker'),
    autoprefix = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem'),
    cssnano = require('cssnano'),
    notify = require('gulp-notify'),
    map = require('lodash.map'),
    rename = require('gulp-rename'),
    fs = require('fs'),
    gulpif = require('gulp-if');

module.exports = function () {
    var getPostProcessors = function (outputConfig) {
        var postProcessors = [
            mqpacker(
                {
                    sort: true
                }
            ),
            autoprefix(),
            pxtorem(
                {
                    root_value: 16,
                    replace: false,
                    media_query: true
                }
            )
        ];

        if ('compressed' === outputConfig.outputStyle) {
            postProcessors.push(cssnano());
        }

        return postProcessors;

    };

    return map(config.scss, function (outputConfig, outputFilename) {

        if (!fs.existsSync(outputConfig.src)) {
            return console.log('ERROR >> Source file ' + outputConfig.src +
                ' was not found.');
        }

        var createSourceMap = function () {
            return true === outputConfig.sourceMap;
        };

        return gulp.src(outputConfig.src)
            .pipe(plumber())
            .pipe(rename(outputFilename + '.css'))
            .pipe(gulpif(createSourceMap, sourcemap.init()))
            .pipe(sass.sync({
                outputStyle: outputConfig.outputStyle
            }))
            .pipe(postcss(getPostProcessors(outputConfig, outputFilename)))
            .pipe(gulpif(createSourceMap, sourcemap.write('./')))
            .pipe(gulp.dest(outputConfig.dest))
            .pipe(notify({message: config.messages.css}));
    });
};
