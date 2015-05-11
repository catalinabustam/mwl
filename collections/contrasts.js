 Contrasts = new Meteor.Collection('contrasts');

Contrasts.allow({
    update: ownsDocument,
    remove: ownsDocument
});
	
Meteor.methods({
	contrast: function(contrastAttributes) {
	    var user = Meteor.user();
	    var order = Orders.findOne({accession:contrastAttributes.orderAcc});
	    // ensure the user is logged in
	    if (!user)
	      throw new Meteor.Error(401, "Necesita hacer login para ingresar contraste");

	    if (!contrastAttributes.dosis)
		throw new Meteor.Error(422, 'Ingrese el número de la dosis');
		
	    //if (!contrastAttributes.ampolla)
		//throw new Meteor.Error(422, 'Ingrese el número de la ampolla');
		
		if (!contrastAttributes.orderAcc)
		throw new Meteor.Error(422, 'Debe ingresar el contraste a una orden');

		var contrast = _.extend(_.pick(contrastAttributes, 'orderAcc', 'nombre','tipoampolla','dosis','donacion','donacionentidad','sede','modalidad','counterId','countName'), {   
			  userId: user._id,
		      author: user.username,
		      submitted: new Date()
		  });
		  console.log(contrast._id)
		  var countn=contrast.countName
		  var update={}
		  update[countn]=1

		 invname=contrast.sede+ "_" +contrast.nombre
		 inventario_his=Inventarios.findOne({type:'historial'})
		 console.log(inventario_his)
		 if (contrast.tipoampolla=='nueva'){
		 updcont={}
		 updcont[invname]=-1
		 Inventarios.update(inventario_his._id, {$inc: updcont})
		}
		
		inventario_his=Inventarios.findOne({type:'historial'})


		contrast.inventario=inventario_his[invname]
		
		counter_old=Counters.findOne(contrast.counterId)
		console.log('counter_old')

		console.log(counter_old)

		Counters.update(contrast.counterId, {$inc: update});
	    conter=Counters.findOne(contrast.counterId)
	    countv=conter[countn]
			// create the contrast, save the id
		contrast.counterNumber=countv
		contrast._id = Contrasts.insert(contrast);
		

	
		   return countv
	   }
   });
	   
	