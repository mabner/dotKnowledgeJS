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

const articleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			default: 'Title',
			required: [true, 'Title is a required field.'],
			trim: true,
		},
		content: {
			type: String,
			default: 'Content',
			required: [true, 'Content is a required field.'],
			trim: true,
		},
		category: {
			type: String,
		},
		authorId: {
			type: Number,
		},
		views: {
			type: Number,
			default: 0,
		},
		isActive: {
			Type: Boolean,
		},
	},
	{
		timestamps: true,
	},
);
const Articles = mongoose.model('articles', articleSchema);
module.exports = Articles;
