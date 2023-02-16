const express = require('express');
const routerApi = require('./routes/index')
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

routerApi(app);

// Ruta por defecto
app.get('/', (req, res) => {
  res.send('Servidor con Express: Activo');
});

app.get('/home', (req, res) => {
  res.send('Aquí encontrarás nuestra página principal');
});

app.listen(port, () => {
  console.log('Mi puerto: ' + port);
});
