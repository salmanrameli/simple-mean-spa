const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
});

module.exports = mongoose.model('User', userSchema);