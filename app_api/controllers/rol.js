var mongoose = require('mongoose');
var Rol = mongoose.model('Rol');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getTodos = function(req,res){
  Rol.find({},function(err,Rol){
    if(err){sendJsonResponse(res,400,err);}
    else{sendJsonResponse(res,200,Rol);}
  });
}

module.exports.CrearUbicacion = function(req,res){
  if(req.body._id!=null&&req.body._id!=undefined){
    sendJsonResponse(res,400,{msg:"no campo no permitido"});
  }
  else{
    var nuevoDato = new Rol(req.body);
    nuevoDato.save(err=>{
      if(err) {sendJsonResponse(res,400,err)}
      else {sendJsonResponse(res,200,nuevoDato)}
    })
  }
}

module.exports.ActualizarUbicacion = function(req,res){
  var rolid = req.params.rolid;
  Rol.findByIdAndUpdate(rolid,req.body,{new:true},function(err, respuesta){
    if (err) {sendJsonResponse(res, 400, err);}
    else { sendJsonResponse(res,200,respuesta);}
  });
}





