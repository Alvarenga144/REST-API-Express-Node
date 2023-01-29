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
// Ruta retornando array de objetos
app.get('/people', (req, res) => {
  res.json([{
    name: "Esteban",
    lastname: "Alvarenga",
    age: 20,
    profession: "Developer",
    address: "San Salvador, SV",
  },
  {
    name: "Andrea",
    lastname: "Alfaro",
    age: 18,
    profession: "Designer",
    address: "Chalatenango, SV",
  },
  ]);
});

app.get('/people/:id_people', (req, res) => {
  const { id_people } = req.params;
  res.json( {
    id_people,
    name: "Andrea",
    lastname: "Alfaro",
    age: 18,
    profession: "Designer",
    address: "Chalatenango, SV",
  })
});

app.get('/home/:id_myhome/people/:id_people', (req, res) => {
  const { id_myhome ,id_people } = req.params;
  res.json({
    id_myhome,
    id_people,
  })
});




// Impresion en consola al levantar el puerto.
app.listen(port, () => {
  console.log('Mi puerto: ' + port)
});
