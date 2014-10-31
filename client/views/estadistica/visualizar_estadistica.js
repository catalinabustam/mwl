Template.visualizarestadistica.rendered = function() {
	reportdate:document.getElementById('reportdate');
	
	function contrast() { 
	//var reportdate=Session.get('reportdate')
	var reportda=reportdate.value
	   var startdate=new Date(reportda.slice(0,10))
	    var enddate=new Date(reportda.slice(13,23)).add({ hours: 23.9 })
		console.log(startdate)
		console.log(enddate)
		
	    var report = {
  	      CENTRO_GADO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"GADOVIST"}).count(),
		  CENTRO_GADO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"GADOVIST",donacion:"no"}).count(),
		  CENTRO_GADO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"GADOVIST",donacion:"si"}).count(),
		  CENTRO_GADO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"GADOVIST",donacion:"si",donacionentidad:false}).count(),
		  CENTRO_GADO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"GADOVIST",donacion:"si",donacionentidad:true}).count(),
		  CENTRO_GADO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"GADOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  CENTRO_DOTA:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"DOTAREM"}).count(),
	      CENTRO_DOTA_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"DOTAREM",donacion:"no"}).count(),
		  CENTRO_DOTA_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"DOTAREM",donacion:"si"}).count(),
		  CENTRO_DOTA_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"DOTAREM",donacion:"si",donacionentidad:false}).count(),
		  CENTRO_DOTA_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"DOTAREM",donacion:"si",donacionentidad:true}).count(),
		  CENTRO_DOTA_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"DOTAREM",donacion:"no",tipoampolla:"abierta"}).count(),
	      CENTRO_PRIMO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"PRIMOVIST"}).count(),
	      CENTRO_PRIMO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"PRIMOVIST",donacion:"no"}).count(),
		  CENTRO_PRIMO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"PRIMOVIST",donacion:"si"}).count(),
		  CENTRO_PRIMO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"PRIMOVIST",donacion:"si",donacionentidad:false}).count(),
		  CENTRO_PRIMO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"PRIMOVIST",donacion:"si",donacionentidad:true}).count(), 
	  	  CENTRO_PRIMO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CENTRO",nombre:"PRIMOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  
	      POB_GADO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"GADOVIST"}).count(),
	      POB_GADO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"GADOVIST",donacion:"no"}).count(),
		  POB_GADO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"GADOVIST",donacion:"si"}).count(),
		  POB_GADO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"GADOVIST",donacion:"si",donacionentidad:false}).count(),
		  POB_GADO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"GADOVIST",donacion:"si",donacionentidad:true}).count(),
		  POB_GADO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"GADOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  POB_DOTA:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"DOTAREM"}).count(),
		  POB_DOTA_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"DOTAREM",donacion:"no"}).count(),
		  POB_DOTA_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"DOTAREM",donacion:"si"}).count(),
		  POB_DOTA_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"DOTAREM",donacion:"si",donacionentidad:false}).count(),
		  POB_DOTA_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"DOTAREM",donacion:"si",donacionentidad:true}).count(),
	      POB_DOTA_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"DOTAREM",donacion:"no",tipoampolla:"abierta"}).count(),
		  POB_PRIMO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"PRIMOVIST"}).count(),
	      POB_PRIMO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"PRIMOVIST",donacion:"no"}).count(),
		  POB_PRIMO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"PRIMOVIST",donacion:"si"}).count(),
		  POB_PRIMO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"PRIMOVIST",donacion:"si",donacionentidad:false}).count(),
		  POB_PRIMO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"PRIMOVIST",donacion:"si",donacionentidad:true}).count(), 
		  POB_PRIMO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"POBLADO",nombre:"PRIMOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  
	      CDR_GADO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GADOVIST"}).count(),
		  CDR_GADO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GADOVIST",donacion:"no"}).count(),
		  CDR_GADO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GADOVIST",donacion:"si"}).count(),
		  CDR_GADO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GADOVIST",donacion:"si",donacionentidad:false}).count(),
		  CDR_GADO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GADOVIST",donacion:"si",donacionentidad:true}).count(),
		  CDR_GADO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GADOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
	   	  CDR_DOTA:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"DOTAREM"}).count(),
	      CDR_DOTA_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"DOTAREM",donacion:"no"}).count(),
		  CDR_DOTA_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"DOTAREM",donacion:"si"}).count(),
		  CDR_DOTA_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"DOTAREM",donacion:"si",donacionentidad:false}).count(),
		  CDR_DOTA_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"DOTAREM",donacion:"si",donacionentidad:true}).count(),
		  CDR_DOTA_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"DOTAREM",donacion:"no",tipoampolla:"abierta"}).count()- Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"DOTAREM",donacion:"si",tipoampolla:"nueva"}).count(),
		  CDR_PRIMO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"PRIMOVIST"}).count(),
	      CDR_PRIMO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"PRIMOVIST",donacion:"no"}).count(),
		  CDR_PRIMO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"PRIMOVIST",donacion:"si"}).count(),
		  CDR_PRIMO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"PRIMOVIST",donacion:"si",donacionentidad:false}).count(),
		  CDR_PRIMO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"PRIMOVIST",donacion:"si",donacionentidad:true}).count(), 
		  CDR_PRIMO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"PRIMOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  
	      CDR_XENETIX:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_300"}).count(),
	      CDR_XENETIX_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_300",donacion:"no"}).count(),
		  CDR_XENETIX_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_300",donacion:"si"}).count(),
		  CDR_XENETIX_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_300",donacion:"si",donacionentidad:false}).count(),
		  CDR_XENETIX_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_300",donacion:"si",donacionentidad:true}).count(),
		  CDR_XENETIX_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_300",donacion:"no",tipoampolla:"abierta"}).count(),
		  CDR_XENETIX350:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_350"}).count(),
	      CDR_XENETIX350_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_350",donacion:"no"}).count(),
		  CDR_XENETIX350_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_350",donacion:"si"}).count(),
		  CDR_XENETIX350_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_350",donacion:"si",donacionentidad:false}).count(),
		  CDR_XENETIX350_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_350",donacion:"si",donacionentidad:true}).count(),
		  CDR_XENETIX350_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"XENETIX_350",donacion:"no",tipoampolla:"abierta"}).count(),    
		  CDR_GASTRO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GASTROVIEW"}).count(),
	      CDR_GASTRO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GASTROVIEW",donacion:"no"}).count(),
		  CDR_GASTRO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GASTROVIEW",donacion:"si"}).count(),
		  CDR_GASTRO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GASTROVIEW",donacion:"si",donacionentidad:false}).count(),
		  CDR_GASTRO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GASTROVIEW",donacion:"si",donacionentidad:true}).count(),
		  CDR_GASTRO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"GASTROVIEW",donacion:"no",tipoampolla:"abierta"}).count(),  
	      CDR_HEXA:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"HEXABRIX_320"}).count(),
	      CDR_HEXA_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"HEXABRIX_320",donacion:"no"}).count(),
		  CDR_HEXA_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"HEXABRIX_320",donacion:"si"}).count(),
		  CDR_HEXA_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"HEXABRIX_320",donacion:"si",donacionentidad:false}).count(),
		  CDR_HEXA_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"HEXABRIX_320",donacion:"si",donacionentidad:true}).count(), 
		  CDR_HEXA_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"CDR",nombre:"HEXABRIX_320",donacion:"no",tipoampolla:"abierta"}).count(),  
		  
	      LA80_GADO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"GADOVIST"}).count(),
	      LA80_GADO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"GADOVIST",donacion:"no"}).count(),
		  LA80_GADO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"GADOVIST",donacion:"si"}).count(),
		  LA80_GADO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"GADOVIST",donacion:"si",donacionentidad:false}).count(),
		  LA80_GADO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"GADOVIST",donacion:"si",donacionentidad:true}).count(),
		  LA80_GADO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"GADOVIST",donacion:"no",tipoampolla:"abierta"}).count(),  
		  LA80_DOTA:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"DOTAREM"}).count(),
	      LA80_DOTA_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"DOTAREM",donacion:"no"}).count(),
		  LA80_DOTA_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"DOTAREM",donacion:"si"}).count(),
		  LA80_DOTA_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"DOTAREM",donacion:"si",donacionentidad:false}).count(),
		  LA80_DOTA_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"DOTAREM",donacion:"si",donacionentidad:true}).count(),
		  LA80_DOTA_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"DOTAREM",donacion:"no",tipoampolla:"abierta"}).count(),   
		  LA80_PRIMO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"PRIMOVIST"}).count(),
		  LA80_PRIMO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"PRIMOVIST",donacion:"no"}).count(),
		  LA80_PRIMO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"PRIMOVIST",donacion:"si"}).count(),
		  LA80_PRIMO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"PRIMOVIST",donacion:"si",donacionentidad:false}).count(),
		  LA80_PRIMO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"PRIMOVIST",donacion:"si",donacionentidad:true}).count(), 
		  LA80_PRIMO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"PRIMOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  LA80_MAGNE:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"MAGNEVIST"}).count(),
		  LA80_MAGNE_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"MAGNEVIST",donacion:"no"}).count(),
		  LA80_MAGNE_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"MAGNEVIST",donacion:"si"}).count(),
		  LA80_MAGNE_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"MAGNEVIST",donacion:"si",donacionentidad:false}).count(),
		  LA80_MAGNE_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"MAGNEVIST",donacion:"si",donacionentidad:true}).count(), 
		  LA80_MAGNE_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:"La80",nombre:"MAGNEVIST",donacion:"no",tipoampolla:"abierta"}).count(),    
		  
	      TODAS_GADO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GADOVIST"}).count(),
		  TODAS_GADO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GADOVIST",donacion:"no"}).count(),
		  TODAS_GADO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GADOVIST",donacion:"si"}).count(),
		  TODAS_GADO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GADOVIST",donacion:"si",donacionentidad:false}).count(),
		  TODAS_GADO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GADOVIST",donacion:"si",donacionentidad:true}).count(),
		  TODAS_GADO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GADOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  TODAS_DOTA:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"DOTAREM"}).count(),
	      TODAS_DOTA_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"DOTAREM",donacion:"no"}).count(),
		  TODAS_DOTA_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"DOTAREM",donacion:"si"}).count(),
		  TODAS_DOTA_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"DOTAREM",donacion:"si",donacionentidad:false}).count(),
		  TODAS_DOTA_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"DOTAREM",donacion:"si",donacionentidad:true}).count(),
	      TODAS_DOTA_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"DOTAREM",donacion:"no",tipoampolla:"abierta"}).count(),
		  TODAS_PRIMO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"PRIMOVIST"}).count(),
	      TODAS_PRIMO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"PRIMOVIST",donacion:"no"}).count(),
		  TODAS_PRIMO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"PRIMOVIST",donacion:"si"}).count(),
		  TODAS_PRIMO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"PRIMOVIST",donacion:"si",donacionentidad:false}).count(),
		  TODAS_PRIMO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"PRIMOVIST",donacion:"si",donacionentidad:true}).count(), 
		  TODAS_PRIMO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"PRIMOVIST",donacion:"no",tipoampolla:"abierta"}).count(),
		  TODAS_MAGNE:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"MAGNEVIST"}).count(),
	      TODAS_MAGNE_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"MAGNEVIST",donacion:"no"}).count(),
		  TODAS_MAGNE_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"MAGNEVIST",donacion:"si"}).count(),
		  TODAS_MAGNE_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"MAGNEVIST",donacion:"si",donacionentidad:false}).count(),
		  TODAS_MAGNE_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"MAGNEVIST",donacion:"si",donacionentidad:true}).count(), 
		  TODAS_MAGNE_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"MAGNEVIST",donacion:"no",tipoampolla:"abierta"}).count(),	
	      TODAS_XENETIX:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_300"}).count(),
	      TODAS_XENETIX_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_300",donacion:"no"}).count(),
		  TODAS_XENETIX_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_300",donacion:"si"}).count(),
		  TODAS_XENETIX_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_300",donacion:"si",donacionentidad:false}).count(),
		  TODAS_XENETIX_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_300",donacion:"si",donacionentidad:true}).count(),
		  TODAS_XENETIX_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_300",donacion:"no",tipoampolla:"abierta"}).count(),
		  TODAS_XENETIX350:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_350"}).count(),
	      TODAS_XENETIX350_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_350",donacion:"no"}).count(),
		  TODAS_XENETIX350_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_350",donacion:"si"}).count(),
		  TODAS_XENETIX350_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_350",donacion:"si",donacionentidad:false}).count(),
		  TODAS_XENETIX350_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_350",donacion:"si",donacionentidad:true}).count(),
		  TODAS_XENETIX350_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"XENETIX_350",donacion:"no",tipoampolla:"abierta"}).count(),
		  TODAS_GASTRO:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GASTROVIEW"}).count(),
	      TODAS_GASTRO_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GASTROVIEW",donacion:"no"}).count(),
		  TODAS_GASTRO_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GASTROVIEW",donacion:"si"}).count(),
		  TODAS_GASTRO_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GASTROVIEW",donacion:"si",donacionentidad:false}).count(),
		  TODAS_GASTRO_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GASTROVIEW",donacion:"si",donacionentidad:true}).count(),
		  TODAS_GASTRO_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"GASTROVIEw",donacion:"no",tipoampolla:"abierta"}).count(),
		  TODAS_HEXA:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"HEXABRIX_320"}).count(),
	      TODAS_HEXA_sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"HEXABRIX_320",donacion:"no"}).count(),
		  TODAS_HEXA_condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"HEXABRIX_320",donacion:"si"}).count(),
		  TODAS_HEXA_condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"HEXABRIX_320",donacion:"si",donacionentidad:false}).count(),
		  TODAS_HEXA_condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"HEXABRIX_320",donacion:"si",donacionentidad:true}).count(), 
		  TODAS_HEXA_aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},nombre:"HEXABRIX_320",donacion:"no",tipoampolla:"abierta"}).count()	
		  

}
	Session.set('report', report)

}
reportdate.onchange = contrast;  
reportdate.onblur = contrast;

}

Template.visualizarestadistica.events({
    'click #export': function(){
        var dt = new Date();
        var day = dt.getDate();
        var month = dt.getMonth() + 1;
        var year = dt.getFullYear();
        var hour = dt.getHours();
        var mins = dt.getMinutes();
        var postfix = day + "." + month + "." + year + "_" + hour + "." + mins;
        //creating a temporary HTML link element (they support setting file names)
        var a = document.createElement('a');
        //getting data from our div that contains the HTML table
        var data_type = 'data:application/vnd.ms-excel';
        var table_div = document.getElementById('dvData');
        console.log(a)
        var table_html = table_div.outerHTML.replace(/ /g, '%20');
        a.href = data_type + ', ' + table_html;
        //setting the file name
        a.download = 'exported_table_' + postfix + '.xls';
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
        e.preventDefault();

    }
});


//Template.visualizarestadistica.helpers({
	
    //contrast:function() { 
		
Template.visualizarestadistica.contrast= function() {
		
	var reportdata=Session.get('report')
	   
	return reportdata
};
