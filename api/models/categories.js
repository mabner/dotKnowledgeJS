const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			default: 'Category Name',
			trim: true,
		},
		category: {
			type: mongoose.Types.ObjectId,
			ref: 'articles',
		},
		parentId: {
			type: String,
			default: null,
		},
		articleCount: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	},
);
const Categories = mongoose.model('categories', categorySchema);
module.exports = Categories;
