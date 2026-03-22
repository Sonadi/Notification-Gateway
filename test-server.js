const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('Test route working');
});

app.listen(5056, () => {
  console.log('Test server running on http://localhost:5056');
});
