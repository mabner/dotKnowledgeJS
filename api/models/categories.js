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
})
module.exports = mongoose.model("category", categorySchema)


const articleSchema = new mongoose.Schema({
	title: {},
	content: {},
	category: {
		type: String,
	},
	authorId: {},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {},
	views: {},
	isActive: {}
})
module.exports = mongoose.model("articles", articleSchema)
