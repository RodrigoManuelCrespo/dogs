const { Router } = require('express');

const router = Router();

const getTemperament = require('../controllers/getTemperament');

router.get('/', getTemperament);

module.exports = router;