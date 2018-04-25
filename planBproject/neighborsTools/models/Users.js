var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	id: Number,
	name: String
});

var Users = mongoose.model('Users', usersSchema);

module.exports = Users;