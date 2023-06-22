const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		default: 'Category',
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
});
module.exports = mongoose.model('Category', categorySchema);
