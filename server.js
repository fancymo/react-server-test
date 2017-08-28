const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = React.createFactory(require('./App'));

const app = express();

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    React.DOM.body(
      null,
      React.DOM.div({
        id: 'root',
        dangerouslySetInnerHTML: {
          __html: ReactDOMServer.renderToString(App())
        }
      })
    )
  );
  res.send(html);
});

app.listen(3000, () => {
  console.log('running on port 3000');
})
