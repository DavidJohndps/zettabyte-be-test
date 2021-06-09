const mongoose = require('mongoose')

const article = mongoose.model('article', {text: String})

module.exports = article