const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
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
	},
});
module.exports = mongoose.model('Category', categorySchema);
