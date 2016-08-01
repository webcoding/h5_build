'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
var $ = require('gulp-load-plugins')();


import config from './gulp/config'

//具体参看 tasks 任务列表
//任务间依赖在哪里处理比较好，任务内直接处理？
//还是在下面做任务流时处理？选用这个，让每个任务集中精力做自己的事情，不处理依赖，这样每个任务独立
require('require-dir')('./gulp/tasks', { recurse: true })


// 是否根据 argv 参数，自动注册任务，待定？

//如有依赖，各自处理
gulp.task('build', function(cb) {
  runSequence('clean', ['html'], cb);
  // runSequence('clean', ['uglify', 'browserify', 'styles', 'markdown'], cb);
});

gulp.task('default', ['build']);


// demo 示例
gulp.task('demo', function(cb) {
  // console.log(gulp.tasks);
  runSequence('build', 'serve', cb);
});





/*

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', function(worker, code, signal) {
    console.log('worker %d died (%s). restarting...',
    worker.process.pid, signal || code);
    cluster.fork();
  });
} else {
  require('./grunt.app.js');
}
 */
