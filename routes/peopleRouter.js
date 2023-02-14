const express = require('express');
const router = express.Router();

// Ruta retornando array de objetos
router.get('/', (req, res) => {
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
router.get('/:id_people', (req, res) => {
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

// QUERY PARAMS
router.get('/users', (req, res) => {
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

module.exports = router;
