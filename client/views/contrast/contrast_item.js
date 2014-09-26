Template.contrastItem.helpers({
  ownContrast: function() {
    return this.userId == Meteor.userId();
  },
  
  submittedText: function() {
    return new Date(this.submitted).toString();
  }
});



Template.contrastItem.events({
	
  'click .delete': function(e) {
    e.preventDefault();


    if (confirm("¿Está seguro que quiere eliminar este registro de contraste?")) {
		
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
  }
	 
})
