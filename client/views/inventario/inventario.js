Template.inventario.helpers({
    inventario: function() {
    return Inventarios.findOne({type:'historial'});
  },
	
})

Template.inventario.events({

	'click #submit': function(event,template) {
    event.preventDefault();

    var nombre = $('#nombre').val();
    var sede = $('#sede').val();

    if (sede=='FARMACIA'){
      sede='TODO'
    }

    var allname= sede +"_"+ nombre
    var cantidad= parseInt($('#cantidad').val(),10); 


    var inventariohistory =Inventarios.findOne({type:'historial'});


    var inventario = {
      contrast: allname,
      cantidad: cantidad,
      historyid: inventariohistory._id,
      sede: sede,
      namecontr: nombre
    }

  

    Meteor.call('inventario', inventario, function(error, count) {
      if (error) {
        // display the error to the user
        throwError(error.reason);

        // if the error is that the post already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('inventario', error.details)
      } else {
		  
		
			 //alert("Número secuencial asignado: " + count);
	
         
      }
    });

	}
	})