'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

var path        = require('../../paths.js');



gulp.task('watch', function() {
	gulp.watch(path.to.sass.source, ['sass']);

	gulp.watch(path.to.pug.source, function() {
		runSequence('pug', 'inject');
	});

	gulp.watch(path.to.scripts.source, function() {
		runSequence('scripts', 'pug', 'inject');
	});

	gulp.watch(path.to.tests.source, ['eslint']);
});
