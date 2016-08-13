var gulp = require('gulp');
var uglify=require('gulp-uglify');
var cssmin=require('gulp-cssmin');
var connect = require('gulp-connect');
var clean=require('gulp-clean');
var rename=require('gulp-rename');
var less=require('gulp-less')

// js压缩
gulp.task('uglify',function(){
	gulp.src('./src/**/*.js').
	pipe(uglify()).
	pipe(rename(function(path){
		path.basename+='.min';
	})).
	pipe(gulp.dest('dist/')).
	pipe(connect.reload())
})
// css压缩
gulp.task('cssmin',function(){
	gulp.src('./src/**/*.css').
	pipe(less()).
	pipe(cssmin()).
	pipe(rename({suffix: '.min'})).
	pipe(gulp.dest('dist/')).
	pipe(connect.reload())
})
// html
gulp.task('html',function(){
	gulp.src('./src/**/*.html').
	pipe(gulp.dest('dist/')).
	pipe(connect.reload())
})
// img
gulp.task('img',function(){
	gulp.src('./src/**/*.{jpg,png,gif}').
	pipe(gulp.dest('dist/')).
	pipe(connect.reload())
})
// clean
gulp.task('clean',function(){
	return gulp.src('dist/').
	pipe(clean())
})
// 本地服务
gulp.task('connect',function(){
	connect.server({
		root:'dist',
		livereload:true
	})
})
// 监控文件变化
gulp.task('watch',function(){
	gulp.watch('src/**',['cssmin','uglify','html','img']);
})

// 默认任务
gulp.task('default',['clean'],function(){
	gulp.start(['uglify','cssmin','html','img','watch','connect'])
})
