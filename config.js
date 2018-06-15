'use strict';

module.exports = {
    messages: {
        css: 'Stylesheet compiled and saved: <%= file.relative %>',
        i18n: 'Translation file generated: ',
        js: 'JavaScript task complete: <%= file.relative %>'
    },
    project: {
    	watch: {
            php: ['**/*.php', '!vendor/**'],
            scss: ['develop/scss/**/*.scss', '!vendor/**'],
            js: ['develop/js/**/*.js', '!node_modules/**']
        }
    },
    scss: {},
    js: {}
};
