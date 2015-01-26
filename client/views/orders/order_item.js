Template.orderItem.helpers({
  ownOrder: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }, 
  contrastCounter:function(){
	  var count=Contrasts.find({orderAcc:this.accession}).count();
	  return count
  },
  buttonclass:function(){
	 var count=Contrasts.find({orderAcc:this.accession}).count(); 
	  if (count==0){
		  
	  	var classbutt="btn btn-success"
	  }
	  else{
	  	var classbutt="btn btn-warning"
		
	  }
	  return classbutt
  }
});

Template.orderItem.rendered = function(){
  // animate order from previous position to new position
  var instance = this;
  var rank = instance.data._rank;
  var $this = $(this.firstNode);
  var orderHeight = 80;
  var newPosition = rank * orderHeight;

  // if element has a currentPosition (i.e. it's not the first ever render)
  if (typeof(instance.currentPosition) !== 'undefined') {
    var previousPosition = instance.currentPosition;
    // calculate difference between old position and new position and send element there
    var delta = previousPosition - newPosition;
    $this.css("top", delta + "px");
  } else {
    // it's the first ever render, so hide element
    $this.addClass("invisible");
  }

  // let it draw in the old position, then..
  Meteor.defer(function() {
    instance.currentPosition = newPosition;
    // bring element back to its new original position
    $this.css("top",  "0px").removeClass("invisible");
  });
};

Template.orderItem.events({
	
	'click #addContrast': function (evt) {
	  var $order,
	  orderAcc,
	  patientName,
	  modality,
	  procedurecode,
	  institutionCode,
	  remarks

	  evt.preventDefault()

	  $order = $(evt.target).closest('.order')
	  orderAcc = $order.attr('data-id')
	  console.log(orderAcc)
	  patientName=$order.attr('patient-name')
	  modality=$order.attr('modality')
	  modalityName=$order.attr('modality-name')
	  procedureCode=$order.attr('procedure-code')
	  institutionCode=$order.attr('institution-code')
	  remarks=$order.attr('remarks')
	  Session.set('selectedOrderAcc', orderAcc)
	  Session.set('selectedPatientName', patientName)
	  Session.set('selectedModality',modality)
	  Session.set('selectedProcedureCode',procedureCode)
	  Session.set('selectedInstitutionCode',institutionCode)
	  Session.set('selectedModalityName',modalityName)
	  Session.set('selectedRemarks',remarks)
	   
  }
	 
})
