'use strict';

import gulp from 'gulp'
import del from 'del'
//gulp-clean

import config from '../config'

gulp.task('clean', cb => {
  var dist = config.dist;
  console.log('clean: ' + dist);

  try {
    return del(dist + '/*')
    //这里不要异步去删除，因为项目开始前确保一个干净的环境比较重要
    // return del.sync(dist + '/*')
  } catch (e) {
    console.log('%s do not clean', dist)
  }
})
