'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');
var cache   = require('gulp-cached');
var pug    = require('gulp-pug');

var path    = require('../../paths.js');
var error   = require('../../error-handler.js');



gulp.task('pug', function() {
	return gulp.src(path.to.pug.source)
		.pipe(cache('pug'))
		.pipe(pug({ pretty: true }))
		.on('error', error.handler)
		.pipe(gulp.dest(path.to.pug.destination))
		.pipe(connect.reload());
});
