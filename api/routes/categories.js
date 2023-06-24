const express = require('express');
const router = express.Router();
const Categories = require('../models/articles');

router.get('/', async (req, res) => {
	try {
		const categories = await Categories.find();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/:id', getCategory, (req, res) => {
	res.json(res.category);
});

router.post('/', async (req, res) => {
	const categories = new Categories({
		name: req.body.name,
		parentId: req.body.parentId,
		// Check updatedAt
	});

	try {
		const newCategory = await categories.save();
		res.status(201).json(newCategory);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.patch('/:id', getCategory, async (req, res) => {
	if (req.body.name != null) {
		res.category.name = req.body.name;
	}
	//res.category.updatedAt = Date.now();
	try {
		const updatedCategory = await res.category.save();
		res.json(updatedCategory);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.delete('/:id', getCategory, async (req, res) => {
	try {
		await res.category.deleteOne();
		res.json({ message: 'Category deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

async function getCategory(req, res, next) {
	let category;
	try {
		category = await Categories.findById(req.params.id);
		if (category == null) {
			return res.status(404).json({ message: 'Category not found' });
		}
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
	res.category = category;
	next();
}

module.exports = router;
