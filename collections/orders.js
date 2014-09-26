Orders = new Meteor.Collection('orders');

Orders.allow({
  update: anyDocument,
  remove: anyDocument
});

Orders.deny({
  update: function(userId, order, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'accession', 'datetime').length > 0);
  }
});
