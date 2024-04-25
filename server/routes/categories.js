const express = require('express');
const { getCategories } = require('../controllers/categories');
const { verify } = require('../middleware/auth');
const router = express.Router();

router.get('/', getCategories);

module.exports = router