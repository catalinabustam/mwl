Template.ordersList.helpers({
  hasMoreOrders: function(){
    this.orders.rewind();
   //console.log(this.orders.fetch()) no me funciona
  }
});

