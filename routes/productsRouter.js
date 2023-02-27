const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

// LEER
router.get('/', (req, res) => {
  const productos = [];
  for (let i = 0; i < 10; i++) {
    productos.push({
      name: 'name ' + i,
      price: 'price ' + i,
      image: 'image ' + i,
    });
  }
  res.json(productos);
});

// CREAR
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Succesfully Created",
    data: body
  })
});

// ACTUALIZAR
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Succesfully Updated",
    data: body,
    id,
  })
});

// BORRAR
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Succesfully Deleted",
    id,
  })
});


module.exports = router;
