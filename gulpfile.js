var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['basic_example', 'multiple_selectors', 'using_defaults', 'negative_delays']);

gulp.task('basic_example', function(){

	gulp.src('./examples/basic_example/basic_example.scss')
		.pipe(sass({style: 'compact', errLogToConsole: true}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./examples/basic_example/'));
});

gulp.task('multiple_selectors', function(){

	gulp.src('./examples/multiple_selectors/multiple_selectors.scss')
		.pipe(sass({style: 'compact', errLogToConsole: true}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./examples/multiple_selectors/'));
});

gulp.task('using_defaults', function(){

	gulp.src('./examples/using_defaults/using_defaults.scss')
		.pipe(sass({style: 'compact', errLogToConsole: true}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./examples/using_defaults/'));
});

gulp.task('negative_delays', function(){

	gulp.src('./examples/negative_delays/negative_delays.scss')
		.pipe(sass({style: 'compact', errLogToConsole: true}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./examples/negative_delays/'));
});