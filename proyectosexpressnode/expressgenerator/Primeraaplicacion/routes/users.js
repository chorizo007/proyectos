const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('todos los usuarios')
});

router.get('/edit', (req,res) => {
    res.send('editamos los users');
})

router.post('/update', (req,res) => {
    res.send('update de los users');
})


module.exports = router;