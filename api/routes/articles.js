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

router.get('/:id', getArticle, (req, res) => {
	res.json(res.article);
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

router.patch('/:id', getArticle, async (req, res) => {
	if (req.body.title != null) {
		res.article.title = req.body.title;
	}
	if (req.body.content != null) {
		res.article.content = req.body.content;
	}
	res.article.updatedAt = Date.now();
	try {
		const updatedArticle = await res.article.save();
		res.json(updatedArticle)
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.delete('/:id', getArticle, async (req, res) => {
	try {
		await res.article.deleteOne()
		res.json({ message: 'Article deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
});

async function getArticle(req, res, next) {
	let article
	try {
		article = await Articles.findById(req.params.id)
		if (article == null) {
			return res.status(404).json({ message: 'Article not found' })
		}
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
	res.article = article;
	next();
}

module.exports = router;
