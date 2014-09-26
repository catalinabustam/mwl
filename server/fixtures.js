  var currentDay=new Date().getDate();
 
  var currentMonth= new Date().getMonth()+1;
  
  var currentYear=new Date().getFullYear();

  if ((currentDay=="1")&&(Counters.find({month:currentMonth, year:currentYear}).count()==0)){
	  var now = new Date().getTime();
	  
  Counters.insert({
      GADOVIST_CDR:0,
	  PRIMOVIST_CDR:0,
	  DOTAREM_CDR:0,

      GADOVIST_POBLADO:0,
	  PRIMOVIST_POBLADO:0,
	  DOTAREM_POBLADO:0,
      GADOVIST_La80:0,
	  PRIMOVIST_La80:0,
	  DOTAREM_La80:0,
      GADOVIST_CENTRO:0,
	  PRIMOVIST_CENTRO:0,
	  DOTAREM_CENTRO:0,
      submitted: now - 5 * 3600 * 1000,
      month:currentMonth,
	  year:currentYear
    });
	
}