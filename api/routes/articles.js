const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

router.get('/', async (req, res) => {
	// #swagger.tags = ['Articles']
	try {
		const articles = await Articles.find();
		res.json(articles);
	} catch (error) {
		// #swagger.responses[500]
		res.status(500).json({ message: error.message });
	}
});

router.get('/:id', getArticle, (req, res) => {
	// #swagger.tags = ['Articles']
	// #swagger.description = 'Get an specific articles by ID'
	// #swagger.parameters['id'] = { description: 'Article ID' }
	res.json(res.article);
});

router.post('/', async (req, res) => {
	// #swagger.tags = ['Articles']
	const articles = new Articles({
		title: req.body.title,
		content: req.body.content,
		category: req.body.category,
		isActive: req.body.isActive,
	});

	try {
		const newArticle = await articles.save();
		// #swagger.responses[201] = { description: 'Article created with success' }
		res.status(201).json(newArticle);
	} catch (error) {
		// #swagger.responses[400]
		res.status(400).json({ message: error.message });
	}
});

router.patch('/:id', getArticle, async (req, res) => {
	// #swagger.tags = ['Articles']
	if (req.body.title != null) {
		res.article.title = req.body.title;
	}
	if (req.body.content != null) {
		res.article.content = req.body.content;
	}
	try {
		const updatedArticle = await res.article.save();
		res.json(updatedArticle);
	} catch (error) {
		// #swagger.responses[400]
		res.status(400).json({ message: error.message });
	}
});

router.delete('/:id', getArticle, async (req, res) => {
	// #swagger.tags = ['Articles']
	try {
		await res.article.deleteOne();
		res.json({ message: 'Article deleted' });
	} catch (error) {
		// #swagger.responses[500]
		res.status(500).json({ message: error.message });
	}
});

async function getArticle(req, res, next) {
	let article;
	try {
		article = await Articles.findById(req.params.id);
		if (article == null) {
			// #swagger.responses[404]
			return res.status(404).json({ message: 'Article not found' });
		}
	} catch (error) {
		// #swagger.responses[500]
		return res.status(500).json({ message: error.message });
	}
	res.article = article;
	next();
}

module.exports = router;
