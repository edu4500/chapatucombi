var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');


var auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload'
});//*/

//var crudCtrl = require('../controllers/crud');
var rol = require('../controllers/rol');
var ctrlAuth = require('../controllers/authentication');

//rol 
router.post( '/rol' ,rol.CrearUbicacion );
router.post( '/rol/:rolid' ,rol.ActualizarUbicacion );
router.get( '/rol' ,rol.getTodos );

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;
