Template.estadistica.rendered = function () {
	$(document).ready(function() {
      // initialize add event modal;
      // initialize the date range picker
      $('#reportdate').daterangepicker(
        // default date range options
        {ranges: {'Últimos 5 Dias': [Date.today().add({ days: -4 }), Date.today()],
              		//'Hoy': [new Date(), Date.today()],
              	   'Hoy': [Date.today(), Date.today().add({ hours: 23.9 })],
				    'Último mes':[Date.today().add({ days: -30 }), 'today']}						
        },



        function(start, end, label) {
       // return Template.visualizarestadistica();

        // grab the selection
//				function(start, end) {
//				  $('#reportdate')
//				    .data("showEstadisticaDialogue_dateRangeStart", start)
//				    .data("showEstadisticaDialogue_dateRangeEnd", end);
//				    console.log(start)
//				    console.log(end)
				});
				});
	

      };

//Template.estadistica.events({
//	        'click button.save-estadisticaDialogue': function(e, tmpl) {
//
//          // Get the date range selection from the session
//					var start = $('#reportdate').data("showEstadisticaDialogue_dateRangeStart");
//					var end = $('#reportdate').data("showEstadisticaDialogue_dateRangeEnd");
//
//          // Do something with the dates
//
//          // Clear the dates from the session now that we are done with them
//					          Session.set("showEstadisticaDialogue_dateRangeStart","");
//					          Session.set("showEstadisticaDialogue_dateRangeEnd","");
//
//          // Close the dialogue
//					          Session.set("showEstadisticaDialogue", false);
//				        }             
//				      });//