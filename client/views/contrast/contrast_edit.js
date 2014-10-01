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
		// cheque si las nuevas condiciones aplican para donación
		if ((nombren=="GADOVIST")&&(flagdonation)){
			var donacionentidadn=true
			var donacionn="si"}
			else{
				var donacionn=donacionin
				var donacionentidadn=false
			}
		// Chequea el tipo de ampolla	
		var tipoampolla=$("input[name=tipoampolla]:checked").val()
		

		tipoampollaold=Contrasts.findOne(Session.get('currentContrastId')).tipoampolla

		//Define si debe modificar el inventario con las nuevas condiciones

		var sede= Contrasts.findOne(Session.get('currentContrastId')).sede
		var contrast_name= Contrasts.findOne(Session.get('currentContrastId')).nombre
		var allnameold=sede+ "_" + contrast_name
		var allnamenew=sede+ "_" +nombren
		var counterId=Contrasts.findOne(Session.get('currentContrastId')).counterId

		if (contrast_name == nombren){
			var upnew=0
			var contn=0
			var contv=0

			if ((tipoampollaold=='abierta')&&(tipoampolla=='nueva')){
				var upold=-1
			}

			else if ((tipoampollaold=='nueva')&&(tipoampolla=='abierta')){
				var upold=1

			}
			else{
				var upold=0
			}

		}
		else{

			var contn=1
			var contv=-1

			if (tipoampollaold=='nueva'){
				var upold=1
				if (tipoampolla=='nueva'){
					var upnew=-1
				}
				else{
					var upnew=0
				}
			}
			else{
				var upold=0

				if (tipoampolla=='nueva'){
					var upnew=-1
				}
				else{
					var upnew=0
				}
			}
		}

		var  inventario_his=Inventarios.findOne({type:'historial'})

		var updateold={}
		updateold[allnameold]=upold
		console.log(updateold)
		Inventarios.update(inventario_his._id, {$inc: updateold})

		var updatenew={}
		updatenew[allnamenew]=upnew
		Inventarios.update(inventario_his._id, {$inc: updatenew})


		var upcountold={}
		upcountold[allnameold]=contv

		console.log(upcountold)
		Counters.update(counterId,{$inc: upcountold})

		var upcountnew={}
		upcountnew[allnamenew]=contn
		console.log(upcountnew)
		Counters.update(counterId,{$inc: upcountnew})
		console.log(counterId)
		var countva=Counters.findOne(counterId)[allnamenew]
		
	    


	
		//define las variables a ingresar

	    var contrastsProperties = {
		  nombre: nombren,
	      //ampolla: $('#ampollan').val(),
	      tipoampolla: tipoampolla,
		  dosis: $('#dosisn').val(),
		  donacion:donacionn,
		  donacionentidad:donacionentidadn,
		  counterNumber: countva
	    }
		

	     Contrasts.update(currentContrastId, {$set: contrastsProperties}, function(error) {
	     alert("Nuevo número secuencial asignado: " + countva);
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

	
	
	