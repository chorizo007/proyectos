var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    nombre: 'Nicolás',
    available : true,
    animales : ['tortuga' , 'perro' , 'gato']
  });
});

module.exports = router;
