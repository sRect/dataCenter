/*
* @Author: Administrator
* @Date:   2017-03-16 13:53:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-21 16:58:09
*/

'use strict';
var gulp = require("gulp");

// gulp.task("say",function(){
// 	console.log("hello world");
// });
// var gulp = require('gulp');  //加载gulp


//压缩js
var uglify = require('gulp-uglify');  //加载js压缩
gulp.task('compass', function () {
    gulp.src(['PC_mobile/js/*.js','!js/*.min.js'])  //获取文件，同时过滤掉.min.js文件
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));  //输出文件
});

//压缩css
var minify = require('gulp-minify-css');
gulp.task('cssmini', function () {
    gulp.src(['PC_mobile/css/*.css', '!css/*.min.css'])  //要压缩的css
        .pipe(minify())
        .pipe(gulp.dest('dist/css/'));
});

//压缩html
var minihtml = require("gulp-minify-html");
gulp.task("htmlmini",function(){
	gulp.src('PC_mobile/html/*.html')
		.pipe(minihtml())
		.pipe(gulp.dest('dist/html/'));
});

// //browserSync
// var browserSync = require('browser-sync');
// // Static server
// gulp.task('browser-sync', function() {
//     browserSync({
//         server: {
//             //指定服务器启动根目录
//             baseDir: "./test"
//         }
//     });
//     //监听任何文件变化，实时刷新页面
//     gulp.watch("./test/**/*.*").on('change', browserSync.reload);
// });

// 建立js任务，进行代码检查
// var jshint = require('gulp-jshint');
// gulp.task('js', function(){
// 	gulp.src('OC_mobile/js/*.js')  // 检查文件：js目录下所有的js文件
//         .pipe(jshint())       // 进行检查
//         .pipe(jshint.reporter('default'));  // 对代码进行报错提示
// });
// gulp.task('default', ['js']);

// var zip = require('gulp-zip');

// gulp.src('./src/*')
//     .pipe(zip('all.zip'))                   // 压缩成all.zip文件
//     .pipe(gulp.dest('./dist'))

//base64
// var base64 = require('gulp-base64');

// gulp.task('style', function() {
//     var css = ['./www/libs/am-touch/amazeui.touch.css',
//         "./www/css/main.css",
//         "./www/css/page.main.css",
//         "./www/css/checks.css",
//         "./www/css/fullPageLoading.css",
//         "./www/css/loading.css"
//     ];
//     return gulp.src(css)
//         .pipe(concat("styles.css"))
//         .pipe(autoprefixer())
//         .pipe(base64({
//             baseDir: "./www/css",
//             extensions: ['png'],
//             maxImageSize: 20 * 1024, // bytes
//             debug: false
//         }))
//         .pipe(cssnano())
//         .pipe(gulp.dest('./www/build'));
// });