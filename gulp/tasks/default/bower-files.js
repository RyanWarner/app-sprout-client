'use strict';

var gulp            = require('gulp');
var mainBowerFiles  = require('main-bower-files');

var path            = require('../../paths.js');



gulp.task('bower-files', function() {
	// Copy bower components

	return gulp.src(mainBowerFiles({
			paths: {
				bowerDirectory: path.to.bower.source,
				bowerrc: path.to.bower.config,
				bowerJson: path.to.bower.manifest
			}
		}),
		{
			base: path.to.bower.source
		})
		.pipe(gulp.dest(path.to.bower.destination));
});
