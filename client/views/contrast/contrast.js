Template.contrast.helpers({
    study:function() { 
		var study = {
		patientName:Session.get('selectedPatientName'),
		accnum:Session.get('selectedOrderAcc')
		} 
		return study
		
	},
	modality:function(){
		var modality=Session.get('selectedModality')
		return modality==="RM"
	},
	donacion:function(){
		return flagdonation
	}
})

Template.contrast.events({
  'click #submit': function(event,template) {
    event.preventDefault();
	var pcode=Session.get('selectedProcedureCode')	
	var icode=Session.get('selectedInstitutionCode')
	var flagangios=Donationangios.find({CODIGO:pcode}).count()!=0
	var flaghearts=Donationhearts.find({CODIGO:pcode}).count()!=0
	var flagangioins=Institutions.find({CODIGO:icode}).count()!=0
	var flagheartins=icode== "0214401"
	var flagdonation=false
	if ((flagangios && flagangioins ) || (flaghearts && flagheartins)){
		flagdonation=true
	}
	
	
	var currentOrderAcc = Session.get('selectedOrderAcc')
    var currentMonth= new Date().getMonth()+1;
    var currentYear=new Date().getFullYear();

  

	var countern =Counters.findOne({month:currentMonth,year:currentYear});
 
	
	var nombre=$('#nombre').val()

	if ($('#donacionn').prop('checked')==true){
		var donacioni="si"}
	else{
		var donacioni="no"}

	console.log(donacioni)	
		
	if (((nombre=="GADOVIST")||(nombre=="DOTAREM"))&&(flagdonation)){
		var donacionentidad=true
		var donacion="si"}
		else{
			var donacion=donacioni
			var donacionentidad=false
	}
	var modality=Session.get('selectedModality')
	
	if( currentOrderAcc.indexOf("0001") === 0){
		 	 var sede="CENTRO"
		 }
	if( currentOrderAcc.indexOf("0002") === 0){
	 		 	 var sede="POBLADO"
	 		 }
	if( currentOrderAcc.indexOf("0003") === 0){
		 		 	 var sede="CDR"
		 		 }
	if( currentOrderAcc.indexOf("0004") === 0){
			 		 	 var sede="La80"
			 		 }
	var countName=sede+"_"+nombre
	

	var tipoampolla=template.find('input:radio[name=tipoampolla]:checked');
	

    var contrast = {
      nombre: nombre,
     //ampolla: $('#ampolla').val(),
	  tipoampolla: tipoampolla.value,
      dosis: $('#dosis').val(),
	  donacion: donacion,
	  orderAcc: currentOrderAcc,
	  counterId: countern._id,
	  countName:countName,
	  donacionentidad:donacionentidad,
	  sede:sede,
	  modalidad:modality
 
    }


    Meteor.call('contrast', contrast, function(error, count) {
      if (error) {
        // display the error to the user
        throwError(error.reason);

        // if the error is that the post already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('order', error.details)
      } else {
		  
	  
		   
     console.log(count)
            $('#myModal').modal('hide')
			 alert("Número secuencial asignado: " + count);
	
         
      }
    });
  }
});

