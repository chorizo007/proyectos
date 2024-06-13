const router = require('express').Router();

router.get('/', (req,res) => {
    const {page , libro} = req.query;
    console.log(page,libro);
    res.send('recuperamos todos los productos')
});

router.get('/new', (req,res) => {
    res.send('recuperamos productos nuevos');
})

router.post('/create', (req,res) => {
    const {name, prize} = req.body;
    console.log(name,prize);
    res.send('Gestion de los datos del formulario');
})

router.get('/:productId', (req,res) => {
    const { productId } = req.params;
    res.send('recupero el producto con id: '+ productId);
})


module.exports = router;