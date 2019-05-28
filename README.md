# parcel 版本的轮子

[![Build Status](https://travis-ci.org/cjyiz/wheel1.svg?branch=master)](https://travis-ci.org/cjyiz/wheel1)

作者：浪子

## 介绍

学习 Vue 时做的 UI 框架

## 开始使用

1.添加 CSS 样式
支持 IE8 及以上浏览器
使用本框架前，请在 CSS 中开始 border-box

```
*,*::before,*::after{box-sizing:border-box}
```

目前需要设置一些默认变量

```
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg:rgb(161, 124, 221);
            --border-radius: 4px;
            --color: #333;
            --border-color: ;
            --border-color-hover: rgb(255, 14, 74);
        }

        #app {
            margin: 20px;
        }

        body {
            font-size: var(--font-size)
        }
```
2.安装 gulu 
```
npm install --save gulu
```
3.引入 gulu
```
import { Button, ButtonGroup, Icon } from "gulu-cjyiz";
import "gulu-cjyiz/dist/index.css";
export default {
  name: "app",
  components: {
    "g-button": Button,
    "g-icon": Icon,
    "g-button-group": ButtonGroup
  }
};
```
## 提问

## 变更记录

## 联系方式

## 贡献代码
