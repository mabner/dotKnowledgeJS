const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		default: 'Title',
	},
	content: {
		type: String,
		default: 'Content',
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
		default: 0,
	},
	isActive: {
		Type: Boolean,
	},
});
module.exports = mongoose.model('Articles', articleSchema);


