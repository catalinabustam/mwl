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

		var contrast = _.extend(_.pick(contrastAttributes, 'orderAcc', 'nombre','tipoampolla','dosis','donacion','donacionentidad','sede','modalidad'), {   
			  userId: user._id,
		      author: user.username,
		      submitted: new Date()
		  });
		  
		  var countn=contrast.countName
		  var update={}
		  update[countn]=1
		  
		
		//Counters.update(contrast.counterId, {$inc: update});
	    //conter=Counters.findOne(contrast.counterId)
	    //countv=conter[countn]
			// create the contrast, save the id
		//contrast.counterNumber=countv
		contrast._id = Contrasts.insert(contrast);
			
	
		  // return countv
	   }
   });
	   
	