This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
## react简书项目
:smiley_cat:9/8
### 1、项目搭建npx create-react-app my-app
npx create-react-app my-app
cd my-app
npm start
三行命令，运行项目
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092306836.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

### 2、styled-components与reset.css的结合使用
打开src目录，
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092314599.png#pic_center)

我们删除一些不需要的文件
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092322833.png#pic_center)

同时我们对App.js文件和index.js文件进行入下处理
App.js

```javascript
import React from 'react';
function App() {
  return (
    <div>
      hello world
    </div>
  );
}
export default App;
```

index.js（根入口）

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

我们可以看到，在index.js中，我们引用了index.css文件，但是，需要清楚的是，css文件一旦被引入，是在全局可以起作用的。
因此，可以使用第三方模块styled-components来进行样式的管理：
	首先进行模块的安装，在终端输入：

```javascript
npm add styled-components
```

	修改原来的index.css为style.js
	在style.js文件下写样式

```javascript
import {createGlobalStyle} from 'styled-components'

export const Globalstyle=createGlobalStyle`
```
	样式reset.css，
`
	使用reset.css，
### 3、使用styled-components完成Header组件布局
	在src目录下创建common文件夹，在该文件夹下创建header目录，因为头部的导航在页面的公共部分，同时，在header组件下创建index.js文件，编写Header组件代码

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092340784.png#pic_center)


```javascript
import React, { Component } from 'react';
class Header extends Component {
  render() { 
    return ( 
      <div>Header</div>
     );
  }
} 
export default Header;
```

	因为使用了export default Header;，将组件导出。因此我们可以在其他地方引入该组件。
	如何在页面组件，首先我们要知道，在index.js文件里面引用了App.js组件，

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092349159.png#pic_center)

	当我们需要在页面写header组件时，我们只需把header组件在App.js组件中引用即可：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092356129.png#pic_center)

	重启页面：可以看到在header组件下写入的Header出现在页面上，说明引用成功了。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092409213.png#pic_center)

	然后我们就可以开始写header组件了
1、首先，在header文件夹下创建style.js文件来写header组件的样式

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092417210.png#pic_center)

在index.js中使用

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092422114.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

#### 一、首先我们需要实现的是header组件左边的图标

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092429793.png#pic_center)

1、先在src目录下创建statics文件夹，将下载好的图标图片放进去，命名‘js.png’.
2、在index.js中定义并引用Logo组件

  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092454351.png#pic_center)

3、在style.js里书写样式，首先将图片导入
import logoPic from '../../statics/js.png';

//样式如下
export const Logo = styled.a.attrs({
  href:'/'
})`
postion:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain;
`;
#### 二、我们要做header组件中间的Nav部分
在学习过程中有个问题
就是在设置Logo图片样式时（此时logo图片是a标签是行内元素），我们需要给图片加宽高，边距什么的，于是我们给图片设置成块级元素：
display:block;
当我们继续编写Nav组件的样式：
export const Nav = styled.div`
  width:960px;
  height:80px;
  margin:0 auto;
  background:red; 
`;
希望的效果是，logo和nav组件在同一行，但是效果是这样：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092505223.png#pic_center)

没错它换行了：
是因为一个块级元素，块级元素在没有浮动的情况下，是会独占一行的，给logo加float:left;属性让logo左浮动。
再来看效果：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092511772.png#pic_center)

成功啦。好吧，是个小问题。。

奥利给。。O(∩_∩)O
### 三、完成Nav组件

我们在Nav组件下写上四个NavItem项目

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092518187.png#pic_center)

前两个是要左浮动，后两个有浮动，提前给标签加上className=“left/right”.当然可以在每个项目上加单独的样式，如首页的字体。
再回到样式里面，几个项目有相同的样式，写在上面。

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092524127.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

效果：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092529476.png#pic_center)

### 四、搜索框

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092540639.png#pic_center)
样式：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092544504.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

效果:

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092550505.png#pic_center)
:smile_cat:9/8
### 五、注册和写文章的两个button
布局：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092650658.png#pic_center)


样式：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092654856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

还需要注意一个就是，在设置完最右边的组册和写文章的时候，会把旁边的登录给覆盖到：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092700443.png#pic_center)

给Nav加上右内边距，同时加上

```javascript
 box-sizing:border-box;
```

效果：

 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092707359.png#pic_center)

### 六、使用iconfont嵌入头部图标
 
先在官网下载，再到项目里面引用：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092716738.png#pic_center)

 
再回到组件中引用：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092720794.png#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092725314.png#pic_center)

这里我们需要注意的是，早搜索框和搜索图标的外层再写一个组件，有利于后面写样式布局：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092730922.png#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092735325.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
效果：

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910092741191.png#pic_center)


### 七、实现搜素框动画效果
当鼠标点击搜索框的时候，会出现动画效果。相当于数据发生改变，react也是重新渲染跟着变
