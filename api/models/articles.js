const mongoose = require('mongoose');

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
