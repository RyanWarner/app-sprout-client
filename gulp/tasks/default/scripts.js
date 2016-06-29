'use strict';

var gulp      = require('gulp');
var cache     = require('gulp-cached');
var merge     = require('merge-stream');
var eslint    = require('gulp-eslint');

var path      = require('../../paths.js');



gulp.task('eslint', function() {
	var appScripts  = gulp.src(path.to.scripts.source);
	var testScripts = gulp.src(path.to.tests.source);
	var gulpScripts = gulp.src(path.to.gulp.source);

	return merge(appScripts, testScripts, gulpScripts)
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('scripts', ['eslint'], function() {
	return gulp.src(path.to.scripts.source)
		.pipe(cache('scripts'))
		.pipe(gulp.dest(path.to.destination));
});
