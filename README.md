# Gulp WP Plugin Toolkit

Re-usable Gulp Toolkit for WordPress plugins, based on [Gulp WP Toolkit](https://github.com/craigsimps/gulp-wp-toolkit).

This is a much more lightweight version of Gulp WP Toolkit, designed for use in WordPress plugins where you need to compile SCSS, concatenate and minify JavaScript files, and generate a translation .pot file.

## Installation

Add a package.json and Gulpfile.js to your plugin folder (see the /examples folder within this repository).

`package.json`:

```
{
  "name": "example-plugin",
  "author": "Craig Simpson <craig@craigsimpson.scot>",
  "repository": "https://github.com/craigsimps/example-plugin",
  "version": "1.0.0",
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-wp-plugin-toolkit": "^1.0.0"
  }
}
```

`Gulpfile.js`:

```
'use strict';

var gulp = require('gulp'),
    toolkit = require('gulp-wp-plugin-toolkit');

toolkit.extendConfig({
    project: {
        name: 'Example Plugin',
        version: '1.0.0',
        textdomain: 'example-plugin'
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
                'develop/js/example-plugin.js'
            ],
            dest: 'assets/js/'
        }
    }
});

toolkit.extendTasks(gulp, { /* Gulp task overrides. */ });
```

Once these files are in place you should run `npm install` to install all of the necessary dependencies.

## Tasks

There are five tasks available once dependencies have been installed:

* `gulp build` runs the folllowing CSS, JS and i18n tasks.
* `gulp build:css` compiles SCSS into CSS.
* `gulp build:js` concatenates JS files and outputs minified and non-minified versions.
* `gulp build:i18n` generates a translations .pot file.
* `gulp` initiates a watch task.

You can use `gulp` to initiate a watch task, which will run the appropriate build step (CSS, JS or i18n) when changes are detected. Default watch paths are set as follows:

```
project: {
	watch: {
		php: ['**/*.php', '!vendor/**'],
		scss: ['develop/scss/**/*.scss', '!vendor/**'],
		js: ['develop/js/**/*.js', '!node_modules/**']
	}
},
```

But these can be overridden by copying the watch object into your own Gulpfile, like this:

```
'use strict';

var gulp = require('gulp'),
    toolkit = require('gulp-wp-plugin-toolkit');

toolkit.extendConfig({
    project: {
        name: 'Example Plugin',
        version: '1.0.0',
        textdomain: 'example-plugin',
        watch: { /* Update paths in the following php, scss and js lines. */
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
                'develop/js/example-plugin.js'
            ],
            dest: 'assets/js/'
        }
    }
});

toolkit.extendTasks(gulp, { /* Gulp task overrides. */ });
```

Like [Gulp WP Toolkit](https://github.com/craigsimps/gulp-wp-toolkit), all of the configuration can be overridden, and additional tasks can be added by passing an object to the `toolkit.extendTasks()` function, where the key is the name of the task. [Example](https://github.com/craigsimps/gulp-wp-toolkit/blob/master/example/Gulpfile.js)
