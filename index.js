const express = require('express');
const app = express();
const port = 3000;

// Ruta por defecto
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express');
});
// Ruta ejemplo 1
app.get('/home', (req, res) => {
  res.send('Estamos en Home');
});
// Ruta ejemplo 2
app.get('/products', (req, res) => {
  res.send('Estamos en Products');
});
// Ruta retornando json
app.get('/json', (req, res) => {
  res.json({
    name: "Esteban",
    lastname: "Alvarenga",
    age: 20,
    profession: "Developer",
    address: "San Salvador, SV"
  });
});

// Impresion en consola al levantar el puerto.
app.listen(port, () => {
  console.log('Mi puerto: ' + port)
});
