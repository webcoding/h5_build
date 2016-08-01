'use strict';

import gulp from 'gulp';
// import browserSync from 'browser-sync';
var browserSync = require('browser-sync').create();

//@see http://www.browsersync.cn/docs/options/
import config from '../config'

// Task: dev server
// 启动预览服务，并监视 Dist 目录变化自动刷新浏览器
// module.exports = function(gulp, config) {
var bsConfig = {
  //更改默认端口 weinre
  // ui: { //ui: false 完全禁用UI
  //   port: 8080,
  //   weinre: {
  //     port: 9090
  //   }
  // },

  //
  open: "local", // or 'external',
  notify: false,
  logPrefix: config.name || 'happy' + ' coding',

  port: config.port || 5000,
  // baseDir: "./",
  // server: "./app",
  server: {
    baseDir: config.dist,
    index: "index.html",
    // middleware: [
    // function (req, res, next) {
    //     console.log("Hi from first middleware");
    //     next();
    //   },
    //   function (req, res, next) {
    //     console.log("Hi from the second middleware");
    //     next();
    //   }
    // ]
  },
  // 使用自定义请求头 - 需要V2.1.0
  // proxy: {
  //   target: "localhost:8000",
  //   reqHeaders: function (config) {
  //     return {
  //       "host":            config.urlObj.host,
  //       "accept-encoding": "identity",
  //       "agent":           false
  //     }
  //   }
  // },
};

gulp.task('serve', cb => {
  // var bs = browserSync();
  // console.log(bsConfig);

  browserSync.init(bsConfig);

  gulp.watch(config.src + '/*', browserSync.reload);
});
// };
