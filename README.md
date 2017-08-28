# react-server-test
React + Node

*[从零开始React 服务器渲染](http://www.alloyteam.com/2017/01/react-from-scratch-server-render/#prettyPhoto)

### 优点
1. 有利于 SEO
2. 提升首屏渲染的速度
3. 易于维护，客户端、服务端共享代码

### React

React 提供两个 API 用于服务端渲染
1. renderToString：将 **React Component** 转化为 HTML 字符串，生成的 HTML 的 DOM 会带有额外属性，各个DOM会有 `data-react-id` 属性，第一个 DOM 会有 `data-checksum` 属性。
2.renderToStaticMarkup：将 **React Component** 转化为 HTML 字符串，但是生成 HTML 的 DOM 不会有额外属性，从而节省 HTML 字符串的大小。

服务端渲染 React 生命周期 `constructor`、`componentWillMount`、`render` 只会执行一次。
