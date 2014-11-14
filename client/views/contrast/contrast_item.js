Template.contrastItem.helpers({
  ownContrast: function() {
    return this.userId == Meteor.userId();
  },
  
  submittedText: function() {
    return new Date(this.submitted).toString();
  },

  contrast: function() {
    return Contrasts.findOne(Session.get('currentContrastId'));
  },

});



Template.contrastItem.events({
	
  'click .delete': function(e) {

  	$contrast = $(e.target).closest('.contrast')
	 contrastId = $contrast.attr('data-id')
	 console.log(contrastId)
     e.preventDefault();

    var sede= Contrasts.findOne(contrastId)
    console.log(sede)

    if (confirm("¿Está seguro que quiere eliminar este registro de contraste?")) {

    	var sede= Contrasts.findOne(contrastId).sede
		var contrast_name= Contrasts.findOne(contrastId).nombre
		var fullname=sede+ "_" + contrast_name
		var tipoampolla=Contrasts.findOne(contrastId).tipoampolla
		var countid=Contrasts.findOne(contrastId).counterId

		if (tipoampolla=='abierta'){
			var upn=0
		}
		else {
			var upn=1
		}
		var upda={}
		upda[fullname]=upn

		var countd=-1
		var updc={}
		updc[fullname]=countd

		
		var  inventario_his=Inventarios.findOne({type:'historial'})
		Inventarios.update(inventario_his._id, {$inc: upda})
		Counters.update(countid, {$inc: updc})
	
		
      	var currentContrastId = this._id
      	Contrasts.remove(currentContrastId);
   
	  
    }
  }
})

Template.contrastItem.events({
	
	'click #editContrast': function (evt) {
	  var $contrast,
	  contrastId,
	  nombre,
	  //ampolla,
	  dosis,
	  donacion,
	  donacionentidad

	  evt.preventDefault()

	  $contrast = $(evt.target).closest('.contrast')
	  contrastId = $contrast.attr('data-id')
	  donacionentidad=$contrast.attr('donacionentidad')
	  Session.set('currentContrastId', contrastId)
	  console.log(contrastId)
  }
	 
})
