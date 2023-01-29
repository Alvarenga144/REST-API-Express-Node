const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express');
});

app.listen(port, () => {
  console.log('Mi puerto: ' + port)
});
