Inventarios = new Meteor.Collection('inventarios');

Inventarios.allow({
    update: anyDocument,
    remove: anyDocument,
	insert:anyDocument
    
});

Meteor.methods({
	inventario: function(inventarioAttributes) {
	    var user = Meteor.user();

	    if (!user)
	      throw new Meteor.Error(401, "Necesita hacer login para ingresar inventario");

		var inventario = _.extend(_.pick(inventarioAttributes, 'contrast', 'cantidad','historyid', 'sede', 'namecontr'), {   
			  userId: user._id,
		      author: user.username,
		      submitted: new Date(),
		      type: 'record'
		  });

		  var contrastname=inventario.contrast
		  var insertc={}
		  insertc[contrastname]=inventario.cantidad
		  var farmacianame="TODO" + "_"+ inventario.namecontr

		  var cantidadnegativa=-inventario.cantidad
		  var updatec={}
		  updatec[farmacianame]=cantidadnegativa
		  

		  inventario._id = Inventarios.insert(inventario);
		  Inventarios.update( { _id: inventario._id },{ $set: insertc } );

//Se actualiza el record en inventario para la sede
		  Inventarios.update(inventario.historyid, {$inc: insertc});
// Se registra la descarga desde el almacén
			

			if ((inventario.sede) != "TODO"){

		  Inventarios.update(inventario.historyid, {$inc: updatec});

		  
			}
		 

		  
		  
	   }
   });
