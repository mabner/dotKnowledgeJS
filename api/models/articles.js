const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		default: 'Title',
	},
	content: {
		type: String,
		require: true,
		default: 'Article content',
	},
	category: {
		type: String,
	},
	authorId: {
		type: Number,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	views: {
		type: Number,
	},
	isActive: {
		Type: Boolean,
		required: true,
	},
});
module.exports = mongoose.model('Articles', articleSchema);

