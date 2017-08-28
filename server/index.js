const express = require('express');
const path = require('path');

const page = require('./page.generator.js').page;

const app = express();
const port = 8082;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  const props = {
    initialCount: 9
  };
  const html = page(props);
  console.log(html);
  res.end(html);
});

app.listen(port, () => {
  console.log('Listening on port %d', port);
});
