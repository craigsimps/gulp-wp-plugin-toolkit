'use strict';

var gulp = require('gulp'),
    toolkit = require('gulp-wp-plugin-toolkit');

toolkit.extendConfig({
    project: {
        name: 'Example Plugin',
        version: '1.0.0',
        textdomain: 'example-plugin',
        watch: {
            php: ['src/**/*.php', '!vendor/**'],
            scss: ['assets/scss/**/*.scss', '!vendor/**'],
            js: ['assets/js/**/*.js', '!node_modules/**']
        }
    },
    scss: {
        'style': {
            src: 'develop/scss/style.scss',
            dest: 'assets/css/',
            outputStyle: 'compressed'
        }
    },
    js: {
        'example-plugin': {
            src: [
                'develop/js/example-plugin-dependency.js',
                'develop/js/example-plugin-another-dependency.js',
                'develop/js/example-plugin.js'
            ],
            dest: 'assets/js/'
        }
    }
});

toolkit.extendTasks(gulp, { /* Gulp task overrides. */ });
