const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoute = require('./dogs')
const temperamentRoute = require('./temperament')
const createRoute = require('./create')

const router = Router(); 

router.use('/dog', createRoute);
router.use('/dogs', dogsRoute);
router.use('/temperament', temperamentRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
