const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

router.get('/', async (req, res) => {
	try {
		const articles = await Articles.find();
		res.json(articles);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/:id', (req, res) => {
	res.send(req.params.id);
});

router.post('/', async (req, res) => {
	const articles = new Articles({
		title: req.body.title,
		content: req.body.content,
		category: req.body.category,
		updatedAt: Date.now(),
		isActive: req.body.isActive,
	});

	try {
		const newArticle = await articles.save();
		res.status(201).json(newArticle);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.patch('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
