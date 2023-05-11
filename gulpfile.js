// Подключаем модули Gulp
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify-es').default,
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	htmlmin = require('gulp-htmlmin'),
	browserSync = require('browser-sync').create();


var cssFiles = [
		'app/css/reset.css',
		'app/css/stylesheet.css',
	]

function html(){
	return gulp.src('app/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
    	.pipe(gulp.dest('dist/'));
}

function ajax(){
	return gulp.src('app/ajax/**/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
    	.pipe(gulp.dest('dist/ajax/'));
}

function fonts(){
	return gulp.src('app/fonts/*.*')
    	.pipe(gulp.dest('dist/fonts/'));
}

// Таск на стили
function styles(){
	return gulp.src(cssFiles)
		.pipe(concat('stylesheet.css'))
		.pipe(autoprefixer({
            cascade: false
        }))		
	    .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream())
}

// Таск на скрипты
function scripts(){
	return gulp.src('./app/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
		.pipe(browserSync.stream())
}

// Таск на картинки
function images(){
	return gulp.src('app/images/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'))
}

function clean(){
	return del(['dist/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('app/css/*.css', styles);
    gulp.watch('app/js/*.js', scripts);
    gulp.watch('app/images/**/*.*', images);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/ajax/*.html').on('change', browserSync.reload);
    gulp.watch('app/ajax/**/*.html').on('change', browserSync.reload);
}


// Вызываем таск
gulp.task('clean', clean);
gulp.task('html', html);
gulp.task('ajax', ajax);
gulp.task('fonts', fonts)
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(html, ajax, fonts, styles, scripts, images)));