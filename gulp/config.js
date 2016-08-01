// import { argv, options, debug, production, deploy } from './helpers/getArg'
// 暂不支持解构
import argvOpts from './helpers/getArg'
import revision from './helpers/revision'

// 项目配置文件
import config from '../config'
// console.info(config);

console.info(argvOpts);

var src = 'src'
var dist = 'dist'

var argv = argvOpts.argv;
var path = argvOpts.path;
var options = argvOpts.options;
var production = argvOpts.production;

var app = config[options.app] || {};
var path = options.path;

// console.log(app);

if( !(app.src || path) ){
  // 不要设定默认路径，避免误操作（或使用配置文件）
  // 项目名称肯定会有，输出时
  // 颜色 http://onlyzq.blog.51cto.com/1228/546459
  // console.log("\033[41;37m 红底白字 \033[0m")
  console.error('必须指定项目名称或项目路径，--app=xxx or --path=xxx');
}

export default {
  name: app.name || 'app',
  src: app.src || (path + src),
  dist: app.dist || (path + dist),

  quoteSrc: 'index.html', //或者 ['index.html']
  styleEnter: 'main.scss',
  jsEnter: 'main.js',

  components: src + '/components',
  pages: src + '/pages',
  modules: src + '/modules',

  prefix: 'assets',
  fonts: '/fonts',
  images: '/images',
  styles: '/styles',
  scripts: '/scripts',

  revision,
  tasks: argv,
  port: options.port || '8000',
  deploy: options.deploy || 'dev',

  isProduction: production,
  isDevelope: !production,
  // isDebug: options.debug || false, //非生产包，自动根据处理
  isUsingQn: false,
  qnOptions: {
    origin: '',
  },
  NODE_ENV: production ? 'production' : 'develope',

  server: {
    port: 8000,
  },
}
