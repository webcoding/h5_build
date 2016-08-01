
# h5 项目编译工具

整体结构基于 Framework7-VueJS 修改，并整合 gulp-tasks-build 模块，经调整以支持有好的参数输入，以及多项目操作。

## tasks

  - clean
  - html
  - copy2      [todo]
  - style      编译样式，scss less stylus 等，通过扩展名判断，默认 less
  - eslint     [todo]
  - script     [todo]
  - browserify [todo]
  - requirejs  打包 requireJS 相关文件
  - md5        集成到生成包生成过程中
  - qn         发布静态资源到云存储
  - *build
  - serve
  - release
  - deploy   执行第三方命令，如：ruby


### 命令格式：

```
gulp build --app=demo --qn --deploy=beta
```


项目结构

```
_build
  + gulp/       //任务目录
  + deploy/     //发布脚本
  + demo/       //demo示例
  + config.js   //项目配置
```


# 如何使用

可使用的项目结构，通过配置路径，可跨路径支持 N 个应用项目的打包等等，如：

```
_h5/
  + h5_build/
  |
  + h5_blade/
  |
  + h5_iqg/
  + h5_hsq/
  + h5_stats/
  + h5_start/
```


## 编译打包

`gulp --dev` - default, for development use.

`gulp --prod` - for build minimize use.

`gulp --debug` - for debug use.


## 测试及发布

`gulp --deploy` - for debug use.


# 注意事项汇总

- 入口文件如何配置？tasks 任务各自独立，可随意组合并配置入口，也会有默认入口 如 index.html main.scss main.js等
- 关于 md5 指纹？目前仅对 index.html 中引用的css、js、img打指纹。

# Thanks

Licensed under the [MIT License](https://opensource.org/licenses/MIT)
