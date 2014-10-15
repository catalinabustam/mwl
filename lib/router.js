Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  
});

OrdersListController = RouteController.extend({
	
	  
	  template: 'ordersList',
	  increment: 10, 
	  ordersLimit: function() { 
	    return parseInt(this.params.ordersLimit) || this.increment; 
	  },
	  findOptions: function() {
	    return {sort: {datetime: -1}, limit: this.ordersLimit()};
	  },
	  waitOn: function() {
	    return [
			Meteor.subscribe('orders', this.findOptions()),
			
			]
		
	  },
	  data: function() {return {
			orders: Orders.find({}, this.findOptions()),
			nextPath: this.route.path({ordersLimit: this.ordersLimit() + this.increment})
		};
	}
	   	
});

RM4OrdersListController = OrdersListController.extend({
	
	data: function() {
      return {
        orders: Orders.find({accession : /\b0004/}, this.findOptions()),
		nextPath: this.route.path({ordersLimit: this.ordersLimit() + this.increment})
      };
    }
  });
  
RM1OrdersListController = OrdersListController.extend({
	 
	  data: function() {
        return {
          orders: Orders.find({accession : /\b0001/}, this.findOptions()),
		  nextPath: this.route.path({ordersLimit: this.ordersLimit() + this.increment})
        };
      }
    });
RM2OrdersListController = OrdersListController.extend({
	
	  data: function() {
	        return {
	          orders: Orders.find({accession : /\b0002/}, this.findOptions()),
			  nextPath: this.route.path({ordersLimit: this.ordersLimit() + this.increment})
	        };
	      }
	    });	
RM3OrdersListController = OrdersListController.extend({
	
	data: function() {
		return {
			orders: Orders.find({accession : /\b0003/}, this.findOptions()),
			nextPath: this.route.path({ordersLimit: this.ordersLimit() + this.increment})
		};
	}
});		
		
	
Router.map(function() {
	
    
	this.route('estadistica');
	
	this.route('inventario');
	
    this.route('rm4Orders', {
      path: '/rm4/:ordersLimit?',
      controller: RM4OrdersListController
    });
    this.route('rm1Orders', {
      path: '/rm1/:ordersLimit?',
      controller: RM1OrdersListController
    });
    this.route('rm2Orders', {
      path: '/rm2/:ordersLimit?',
      controller: RM2OrdersListController
    });
    this.route('rm3Orders', {
      path: '/rm3/:ordersLimit?',
      controller: RM3OrdersListController
    });
	
	this.route('orderPage', {
		path: '/orders/:accession',
		waitOn: function() {
			
			return [
			Meteor.subscribe('singleOrder', this.params.accession),
			
      ];
    },
	data: function() { return Orders.findOne({accession:this.params.accession}); }
  });
  
  this.route('ordersList', {
      path: '/:ordersLimit?',
      controller: OrdersListController
  
    });
	
	 
  
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    pause();
  }
}


Router.onBeforeAction(requireLogin, {})
Router.onBeforeAction(function() { clearErrors() });