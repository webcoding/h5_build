
# h5 项目编译工具

修改自 Framework7-VueJS，整合 gulp-tasks-build，调整以支持多项目操作。


### 命令格式：

```
gulp command proPath --env --deploy --deployEnv
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


# Thanks

Licensed under the [MIT License](https://opensource.org/licenses/MIT)
