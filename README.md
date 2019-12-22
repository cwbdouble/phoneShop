# 项目开发流程记录
### 一、项目初始化

1. 引入公共样式

```javascript
@import url("/common/common.css");//自己编写的公共样式
@import url("/common/icon.css");//阿里图标库
@import url("/common/animate.css");//动画库
@import url("/common/uni.css");//uni官方组件库
@import url("/common/zcm-main.css");//自己封装的ui库（类似于bootstrap）
```

2. 公共样式的编写

```css
/* 设置全局样式 */
/* (1) 页面高度100%,默认字体28upx,默认行高1.8,背景颜色 */
page{
	height: 100%;
	font-size: 28upx;
	line-height: 1.8;
	background: #FFFFFF;
}
/* (2) 图片默认100%宽度 */
image{  width: 100%;  }
/* 主色调 */
/* 主背景颜色（橙色）*/
.main-bg-color{ background: #FD6801; }
/* 主点击背景颜色（淡橙色）*/
.main-bg-hover-color{ background: rgba(253,104,1,0.85); }
/* 主字体颜色（橙色）*/
.main-text-color{color: #FD6801;}
/* 主边框颜色 */
.main-border-color{ border-color: #F1F1F1; }

.input-border-color{
	border-color: #FD6801;
}

```

3. 设置tabbar栏

二、首页

1. 顶部tab搜索栏

   ```json
   
   //在pages.json中配置
   "app-plus":{
       "scrollIndicator":"none",
       "titleNView":{						
           //原生顶部搜索框
           "searchInput":{
               "align":"left",
               "borderRadius":"4px",
               "disabled":"true",
               "placeholder":"请输入搜索内容",
               "placeholderColor":"#cccccc",
               "backgroundColor":"#f7f7f7"
           },
           "buttons":[
               {
                   "color":"#9f9f9f",
                   "colorPressed":"#FD6801",
                   "float":"left",//居左
                   "fontSize":"22px",
                   "fontSrc":"/static/font/iconfont.ttf",//引入ttf文件
                   "text":"\ue67a"								
               },
               {
                   "color":"#9f9f9f",
                   "colorPressed":"#FD6801",
                   "float":"right",
                   "fontSize":"22px",
                   "fontSrc":"/static/font/iconfont.ttf",
                   "text":"\ue661"								
               }
           ]
       }
   }
   ```

   