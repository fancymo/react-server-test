const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = require('../app/App');
const ReactDOM = require('react-dom');

module.exports = (props) => {
  const content = ReactDOMServer.renderToStaticMarkup(
    <App initialCount={props.initialCount} />
  );

  const propsScript = `var APP_PROPS = ${JSON.stringify(props)}`;
  const html = ReactDOMServer.renderToStaticMarkup(
    <html>
      <head />
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: propsScript }} />
        <script src={'assets/entry.generator.js'} />
      </body>
    </html>
  );
  return html;
}
