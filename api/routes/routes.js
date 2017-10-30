const express = require('express')
const router = express.Router()

// router.get('*', (req, res) => {
//     res.sendfile('../views/index.html');
// })

router.get('/', (req, res, next) => res.send('Nerds home page'))

router.get('/:id', (req, res, next) => {console.log(req.params.id)})

router.put('/:id', (req, res, next) => {console.log(req.params.id)})

router.put('/password/:id', (req, res, next) => {console.log(req.params.id)})

module.exports = router