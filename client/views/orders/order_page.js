Template.orderPage.helpers({
  currentOrder: function() {
    return Orders.findOne({accession:Session.get('selectedOrderAcc')});
  },
  
 contrast: function() {
	  return Contrasts.find({orderAcc: this.accession});

  }
});
