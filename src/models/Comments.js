const mongoose = require('mongoose')

const comment = mongoose.model('Comments', {text: String, articleId: String})

module.exports = comment