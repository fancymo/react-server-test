const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');

const APP_PROPS = window.APP_PROPS || {};
ReactDOM.render(
  <App initialCount={APP_PROPS.initialCount} />,
  document.getElementById('root')
);
