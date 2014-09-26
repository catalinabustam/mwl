Counters = new Meteor.Collection('counters');

Counters.allow({
    update: anyDocument,
    remove: anyDocument,
	insert:anyDocument
    
});