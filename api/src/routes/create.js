const { Router } = require('express');
const router = Router();
const postBreed = require('../controllers/postBreed')

router.post('/', postBreed);

module.exports = router;