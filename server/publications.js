Meteor.publish('orders', function(options) {
  return Orders.find({},{sort: {datetime: -1}, limit:100});
});

Meteor.publish('counters', function() {
  return Counters.find();
});

Meteor.publish('inventarios', function() {
  return Inventarios.find();
});

Meteor.publish('singleOrder', function(accession) {
  return accession && Orders.find({accession:accession});
});


Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId, {fields: {createdAt: 1}});
});

Meteor.publish('contrasts', function() {
  return Contrasts.find();
});

Meteor.publish('donationangios', function() {
  return Donationangios.find();
});

Meteor.publish('donationhearts', function() {
  return Donationhearts.find();
});
Meteor.publish('institutions', function() {
  return Institutions.find();
});


