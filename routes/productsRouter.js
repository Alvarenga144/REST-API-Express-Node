const express = require('express');
const router = express.Router();

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


module.exports = router;
