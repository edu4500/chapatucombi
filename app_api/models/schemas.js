var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var rol_schema = new Schema({
	x:Number,
	y:Number,
	tag:String,
	capacidad:Number,
	uso:Number
});

mongoose.model("Rol",rol_schema);
