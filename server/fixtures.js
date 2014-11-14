  var currentDay=new Date().getDate();
 
  var currentMonth= new Date().getMonth()+1;
  
  var currentYear=new Date().getFullYear();

  if ((currentDay=="01")&&(Counters.find({month:currentMonth, year:currentYear}).count()==0)){
	  var now = new Date().getTime();
	  
  Counters.insert({
     CDR_GADOVIST:0,
	 CDR_PRIMOVIST:0,
	 CDR_DOTAREM:0,
	 CDR_MAGNEVIST:0,
	 CDR_XENETIX_300:0,
	 CDR_HEXABRIX_320:0,

     POBLADO_GADOVIST:0,
	 POBLADO_PRIMOVIST:0,
	 POBLADO_DOTAREM:0,
	 POBLADO_MAGNEVIST:0,

     La80_GADOVIST:0,
	 La80_PRIMOVIST:0,
	 La80_DOTAREM:0,
	 La80_MAGNEVIST:0,

     CENTRO_GADOVIST:0,
	 CENTRO_PRIMOVIST:0,
	 CENTRO_DOTAREM:0,
	 CENTRO_MAGNEVIST:0,
     submitted: now - 5 * 3600 * 1000,
     month:currentMonth,
	 year:currentYear
    });	
}

if (Inventarios.find({type:'historial'}).count==0){
	inventario_names={type: 'historial',
	CENTRO_DOTAREM: 0, 
	POBLADO_DOTAREM: 0, 
	CDR_DOTAREM : 0, 
	La80_DOTAREM : 0, 
	TODO_DOTAREM : 0, 
	CENTRO_GADOVIST : 0, 
	POBLADO_GADOVIST : 0, 
	CDR_GADOVIST : 0, 
	La80_GADOVIST : 0, 
	TODO_GADOVIST : 0, 
	CENTRO_PRIMOVIST : 0, 
	POBLADO_PRIMOVIST : 0, 
	CDR_PRIMOVIST : 0, 
	La80_PRIMOVIST : 0, 
	TODO_PRIMOVIST : 0, 
	CENTRO_MAGNEVIST : 0, 
	POBLADO_MAGNEVIST : 0, 
	CDR_MAGNEVIST : 0, 
	La80_MAGNEVIST : 0, 
	TODO_MAGNEVIST : 0, 
	CENTRO_XENETIX_300 : 0, 
	POBLADO_XENETIX_300 : 0, 
	CDR_XENETIX_300 : 0, 
    La80_XENETIX_300 : 0, 
	TODO_XENETIX_300 : 0, 
	CENTRO_GASTROVIEW : 0, 
	POBLADO_GASTROVIEW : 0, 
	CDR_GASTROVIEW : 0, 
	La80_GASTROVIEW : 0, 
	TODO_GASTROVIEW : 0, 
	CENTRO_HEXABRIX_320 : 0, 
	POBLADO_HEXABRIX_320 : 0, 
	CDR_HEXABRIX_320 : 0, 
	La80_HEXABRIX_320 : 0, 
	TODO_HEXABRIX_320 : 0
}

Inventarios.insert(inventario_names);


}