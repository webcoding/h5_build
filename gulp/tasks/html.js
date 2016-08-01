'use strict';

import gulp from 'gulp';
import md5 from'gulp-md5-plus';
var $ = require('gulp-load-plugins')(); //ES6 ?

import config from '../config'

gulp.task('html', function () {
  // 处理 Html
  return gulp.src(config.src + '/*.html')
    // .pipe($.minifyHtml(
    //   empty: true,
    //   spare: true,
    //   quotes: true,
    //   loose: true
    // )
    .pipe($.replace(/\{\{__APPNAME__\}\}/g, config.name))
    .pipe($.replace(/\{\{__VERSION__\}\}/g, config.isProduction ? '.min' : ''))
    .pipe($.replace(/\{\{__DOMAIN__\}\}/g, config.isUsingQn ? config.qnOptions.origin : ''))
    .pipe(gulp.dest(config.dist))
    .pipe($.size({title: 'html'}));
});
