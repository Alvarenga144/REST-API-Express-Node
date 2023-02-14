const express = require('express');
//const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;

// Ruta por defecto
app.get('/', (req, res) => {
  res.send('Servidor con Express: LEVANTADO');
});
// Ruta ejemplo 1
app.get('/home', (req, res) => {
  res.send('Estamos en Home');
});
/*

// Ruta ejemplo 2
app.get('/products', (req, res) => {
  const productos = [];
  for (let i = 0; i < 100; i++) {
    productos.push({
      name: faker.name.findName(),
      price: faker.price(),
      image: faker.image.imageurl(),
    });
  }
  res.json(productos);
});

*/



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

// GET PARAMS
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

// Query params
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
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
