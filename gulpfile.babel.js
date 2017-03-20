
require('babel-core/register');
const _ = require('lodash');
const __gulp = require('gulp');
const __gulpWebpack = require('gulp-webpack');
const __gulpRename = require('gulp-rename');
const __gulpSass = require('gulp-sass');
const __gulpUglify = require('gulp-uglify');
const __gulpAutoprefixer = require('gulp-autoprefixer');
const __gulpReplace = require('gulp-replace');
const __fs = require('fs');
const __path = require('path');
const __gulpClean = require('gulp-clean');
const __gulpCached = require('gulp-cached');
const __named = require('vinyl-named');

const runTimestamp = Math.round(Date.now()/1000);

let webpackParams = {
	module: {
		loaders: [
			{
				test: /\.coffee$/,
				loader: 'coffee-loader'
			}, {
				test: /\.js$/,
				// exclude: /(node_modules|bower_components)/,
				include: [
					__path.resolve(__dirname, 'public/assets-src'),
					__path.resolve(__dirname, 'node_modules/coffeekraken-sugar')
				],
				loader: 'babel-loader',
				query: {
					presets: ['es2015-loose', 'stage-0'],
					compact: false
				}
			}
		]
	},
	// output: {
	// 	path: __path.resolve("public/assets/js"),
	// 	filename: '[name].js',
	// 	library: '[name]',
	// 	libraryTarget: 'umd'
	// }
};

__gulp.task('clean-js', function() {
	return __gulp.src([
		'public/assets/js'
	]).pipe(__gulpClean());
});

__gulp.task('build-js', ['clean-js'], function() {
	return __gulp.src([
		'public/assets-src/js/**/*.js'
	]).pipe(__gulpWebpack(webpackParams))
	.pipe(__gulp.dest('public/assets/js'))
	// .pipe(__gulpUglify())
	// .pipe(__gulpRename({
	// 	extname: '.min.js'
	// }))
	// .pipe(__gulp.dest('public/assets/js'));
});

__gulp.task('build-css', [], () => {
	__gulp.src('public/assets-src/sass/**/*.scss')
	.pipe(__gulpSass({
		outputStyle: 'expanded',
		precision: 8
	}))
	.pipe(__gulp.dest('public/assets/css'));
});

__gulp.task('default', ['build-js']);
__gulp.task('watch', ['default'], function() {
	__gulp.watch(['public/assets-src/js/**/*.js'], ['build-js']);
	__gulp.watch(['public/assets-src/sass/**/*.scss'], ['build-sass']);
});
