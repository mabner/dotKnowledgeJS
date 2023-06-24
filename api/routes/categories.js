const express = require('express');
const router = express.Router();
const Categories = require('../models/categories');

router.get('/', async (req, res) => {
	// #swagger.tags = ['Categories']
	try {
		const categories = await Categories.find();
		res.json(categories);
	} catch (error) {
		// #swagger.responses[500]
		res.status(500).json({ message: error.message });
	}
});

router.get('/:id', getCategory, (req, res) => {
	// #swagger.tags = ['Categories']
	res.json(res.category);
});

router.post('/', async (req, res) => {
	// #swagger.tags = ['Categories']
	const categories = new Categories({
		name: req.body.name,
		parentId: req.body.parentId,
	});

	try {
		const newCategory = await categories.save();
		// #swagger.responses[201] = { description: 'Category created with success' }
		res.status(201).json(newCategory);
	} catch (error) {
		// #swagger.responses[400]
		res.status(400).json({ message: error.message });
	}
});

router.patch('/:id', getCategory, async (req, res) => {
	// #swagger.tags = ['Categories']
	if (req.body.name != null) {
		res.category.name = req.body.name;
	}
	//res.category.updatedAt = Date.now();
	try {
		const updatedCategory = await res.category.save();
		res.json(updatedCategory);
	} catch (error) {
		// #swagger.responses[400]
		res.status(400).json({ message: error.message });
	}
});

router.delete('/:id', getCategory, async (req, res) => {
	// #swagger.tags = ['Categories']
	try {
		await res.category.deleteOne();
		res.json({ message: 'Category deleted' });
	} catch (error) {
		// #swagger.responses[500]
		res.status(500).json({ message: error.message });
	}
});

async function getCategory(req, res, next) {
	let category;
	try {
		category = await Categories.findById(req.params.id);
		if (category == null) {
			// #swagger.responses[404]
			return res.status(404).json({ message: 'Category not found' });
		}
	} catch (error) {
		// #swagger.responses[500]
		return res.status(500).json({ message: error.message });
	}
	res.category = category;
	next();
}

module.exports = router;
