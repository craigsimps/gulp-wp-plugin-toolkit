'use strict';

module.exports = {
    'build:css': [require('./css')],
    'build:js': [require('./js')],
    'build:i18n': [require('./i18n')],
    'build': [['build:css', 'build:js', 'build:i18n']],
    'default': [require('./watch')]
};
