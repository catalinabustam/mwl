Template.contrastEdit.helpers({
  contrast: function() {
    return Contrasts.findOne(Session.get('currentContrastId'));
  },
  ampollaabierta: function() {
    if (Contrasts.findOne(Session.get('currentContrastId')).tipoampolla=="abierta"){
    	var abierta="checked"
    }
    else{
    	var abierta= ''
    }
    return abierta
  },
  ampollanueva: function() {
    if (Contrasts.findOne(Session.get('currentContrastId')).tipoampolla=="nueva"){
    	var nueva="checked"
    }
    else{
    	var nueva= ''
    }
    return nueva
  },
  donacionCheck:function(){
	  var donacion= Contrasts.findOne(Session.get('currentContrastId')).donacion;
	  
	  if (donacion=="si"){
		  var donacionc="checked"
  		}
	  else{
		  var donacionc=''
	  }
	  return donacionc
  },
  
   modality:function(){
	var currentOrderAcc=Contrasts.findOne(Session.get('currentContrastId')).orderAcc;
	console.log(currentOrderAcc)
	var modality=Orders.findOne({accession:currentOrderAcc}).modality.type;
	console.log(modality)
	return modality==="RM"
},

});
  
 
Template.contrastEdit.events({
	
	'click #save': function(e) {
	    e.preventDefault();
		var currentContrastId=Session.get('currentContrastId')
		var currentOrderAcc=Contrasts.findOne(Session.get('currentContrastId')).orderAcc;
		var pcode=Orders.findOne({accession:currentOrderAcc}).procedure_code;
		var icode=Orders.findOne({accession:currentOrderAcc}).referring.institution.code
		var flagangios=Donationangios.find({CODIGO:pcode}).count()!=0
		var flaghearts=Donationhearts.find({CODIGO:pcode}).count()!=0
		var flagangioins=Institutions.find({CODIGO:icode}).count()!=0
		var flagheartins=icode== "0214401"
		var flagdonation=false
		if ((flagangios && flagangioins ) || (flaghearts && flagheartins)){
			flagdonation=true
		}
		
		var nombren=$('#nombren').val()
		if ($('#donacionn').prop('checked')==true){
			var donacionin="si"}
		else{
			var donacionin="no"}
		
		if ((nombren=="GADOVIST")&&(flagdonation)){
			var donacionentidadn=true
			var donacionn="si"}
			else{
				var donacionn=donacionin
				var donacionentidadn=false
			}
			
			console.log(nombren)
			console.log(donacionn)
			console.log(donacionentidadn)


	    var contrastsProperties = {
		  nombre: nombren,
	      ampolla: $('#ampollan').val(),
		  dosis: $('#dosisn').val(),
		  donacion:donacionn,
		  donacionentidad:donacionentidadn
	    }
		
		console.log(currentContrastId)

	  Contrasts.update(currentContrastId, {$set: contrastsProperties}, function(error) {
	      if (error) {
			  
	        // display the error to the user
			alert(error.reason);
			      } else {
					  console.log("actualizado")
					  $('#modalEdit').modal('hide')
	
			      }
			    });
			  },
	
	
	
})

	
	
	