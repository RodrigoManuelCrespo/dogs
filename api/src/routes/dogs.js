const { Router } = require('express');
const getDogs = require('../controllers/getDogs')
const getId = require('../controllers/getId')
const router = Router();

router.get('/', getDogs);

router.get('/:id', getId);

module.exports = router;