
import getopt from 'node-getopt';

// gulp iqg --prod deploy=beta  // 把 iqg 打 prod 包发布到测试 beta 环境，也可以 -pd

// node-getopt oneline example.
// 目前支持的参数 Boolean值(debug prod) 字符串参数值(path deploy)
var opt = getopt.create([
  // ['d' , ''                    , 'debug mode'],
  // [''  , 'debug'               , ''],
  ['p' , ''                    , '是否输出的是生成包'],
  [''  , 'prod'                , ''],
  [''  , 'production'          , ''],
  [''  , 'qn'                  , '是否使用七牛云存储'],
  ['S' , 'short-with-arg=ARG'  , 'option with argument'],
  ['L' , 'long-with-arg=ARG'   , 'long option with argument'],
  [''  , 'app[=AppName]'       , '配置文件对应的 AppName'],
  [''  , 'path[=AppPath]'      , 'App 路径，如使用配置文件对应 appname，此路径不再使用'],
  [''  , 'port[=Port]'         , '启动预览的端口，默认'],
  [''  , 'deploy[=ENV]'        , 'ENV 配置, 可选: dev(默认) staging beta or prod'],
  // [''  , 'env[=ENV]'           , 'ENV is optional'],
  ['m' , 'multi-with-arg=ARG+' , '多选项参数'],
  [''  , 'no-comment'],
  ['h' , 'help'                , '显示此帮助'],
  ['v' , 'version'             , '显示版本']
])              // create Getopt instance
.bindHelp()     // bind option 'help' to default action
.parseSystem(); // parse command line

// console.info(opt);

var options = opt.options;

// var app_path = options.path;

export default {
  argv: opt.argv,
  options: options,
  production: !!(options.p || options.prod || options.production), //是否生产包
  // debug: !!(options.d || options.debug),  //是否调试模式，暂取消此参数，调试模式自动配置
  // deploy: options.deploy,  //dev/staging/beta/prod 发布环境，默认 dev
};



//当前项目路径
// console.log(process.cwd());

// var argv = process.argv.slice(2);



// export default function getArg(key) {
//   argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });
//   var index = process.argv.indexOf(key);
//   var next = process.argv[index + 1];
//   return (index < 0)
//     ? null
//     : (!next || next[0] === "-") ? true : next;
// }
//
// getArg();

// export argObj;

// export let appPath = getArg('--path')
// // export let develope = getArg('--dev') || getArg('--develop') || getArg('-d')
// export let debug = getArg('--debug') || getArg('-dp') || getArg('-pd')
// export let production = getArg('--prod') || getArg('--production') || getArg('-p')



/*
  关于命令的使用区别我们一一解释：
  第一种：参数用一横的说明后面的参数是字符形式。
  第二种：参数用两横的说明后面的参数是单词形式。
  第三种：参数前有横的是 System V风格。
  第四种：参数前没有横的是 BSD风格。

  print process.argv
  argv:
  [ '/usr/local/bin/node',
  '/usr/local/bin/gulp',
  'clean',
  '--deploy',
  '--path=./tests/' ],


  // node-getopt oneline example.

  constructor(Array options)
      options is a set of option. each option contains 3 fields.
      [short_name, long_name_with_definition, comment]
      Definition:
          * '=ARG':   has argument
          * '[=ARG]': has argument but optional
          * '+':      multiple option supported

          ARG can be replaced by any word.

opt = require('node-getopt').create([
  ['s' , ''                    , 'short option.'],
  [''  , 'long'                , 'long option.'],
  ['S' , 'short-with-arg=ARG'  , 'option with argument'],
  ['L' , 'long-with-arg=ARG'   , 'long option with argument'],
  [''  , 'color[=COLOR]'       , 'COLOR is optional'],
  ['m' , 'multi-with-arg=ARG+' , 'multiple option with argument'],
  [''  , 'no-comment'],
  ['h' , 'help'                , 'display this help'],
  ['v' , 'version'             , 'show version']
])              // create Getopt instance
.bindHelp()     // bind option 'help' to default action
.parseSystem(); // parse command line

*/
