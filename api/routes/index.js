const express = require('express');
const router = express.Router();

const articlesRouter = require('./articles');
const categoriesRoutes = require('./categories');

router.use('/articles', articlesRouter);
router.use('/categories', categoriesRoutes);

module.exports = router;
