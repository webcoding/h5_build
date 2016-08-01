'use strict';

import gulp from 'gulp';
import md5 from'gulp-md5-plus';
import runSequence from 'run-sequence';
var $ = require('gulp-load-plugins')();

import config from '../config'

var isProduction = config.isProduction;

var autoPrefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 2.3',
  'bb >= 10'
];

if(config.autoPrefixer || config.autoPrefixerBrowsers){
  autoPrefixerBrowsers = config.autoPrefixer || config.autoPrefixerBrowsers;
}

var stylePath = config.src + config.styles;
var styleEnter = stylePath + '/' + config.styleEnter;
var styleDist = config.dist + '/' + config.prefix + config.styles

// 编译样式，添加浏览器前缀
gulp.task('styles:compile', function() {
  console.log('编译样式: 生产环境 - ' + isProduction);
  console.log('编译文件: ' + styleEnter);

  var s = (gulp.src(styleEnter)
    .pipe($.sourcemaps.init())
    .pipe($.plumber())  //自动处理全部错误信息防止因为错误而导致 watch 不正常工作
    .pipe($.sass())  //最好自动验证输入格式
    // .pipe(compileTypes(stypePath))  //最好自动验证输入格式
    .pipe($.autoprefixer({browsers: autoPrefixerBrowsers}))
    // .pipe($.if(hasBanner, $.header(bannerTpl, bannerData)))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(styleDist))
  );

  return !isProduction ? s : s.pipe($.csso({}))
    .pipe($.rename({suffix: '.min'}))
    //.pipe($.if(hasBanner, $.header(bannerTpl, bannerData)))
    .pipe(md5(10, config.src + '/' + config.quoteSrc))
    .pipe(gulp.dest(styleDist))
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles:watch', function() {
  return gulp.watch(stylePath + '/**/*', ['styles:compile']);
});

gulp.task('styles', function(cb) {
  runSequence(['styles:compile', 'styles:watch'], cb);
});
