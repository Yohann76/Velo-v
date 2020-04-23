var tempsx ;  // pas prise en compte // quand on met plusieur fenetre doit avoir le méme temps en méme temps 


var Time = {
 
 	
 //tempsx, 

 SET: function() {
	tempsx = setInterval( function () {
	var date1 = new Date() ; 
	var result = localStorage.getItem( "date" ) - date1 ;  // = en milisecond seconde 
	var t =   result ;  
	var s = Math.floor(t / 1000) % 60;  // Secondes
	var m = Math.floor(t / 1000) / 60;  // Minutes

	m = Math.floor(m) ; // On arrondi 
	var chaine = m+":"+s;	  
	document.getElementById("Compte").innerHTML =  chaine ;  
	
	// Pour ne pas aller en negatif du temps 
	if ( m + s < 0) {  document.getElementById("Compte").innerHTML =  " " ;   // A voir pour ne pas afficher que le temps a expirer pour une new resa 
					   document.getElementById("Compte1").innerHTML =  "votre reservation a expiré"  ; 
					} ; 
	
	} , 1000) ;  
} ,  // end set function 
	
	
	
	timer: function () {  
		var date2 = new Date() ;    // Date 2 créer a l'apell de la fonction timer 
	    date2.setMinutes(date2.getMinutes() +20) ; 
    	localStorage.setItem("date" , date2.getTime() ) ;  // stockage de date2 dans date 
	
		clearInterval (tempsx)
	    Time.SET() ; 
		//console.log(this) ; 
		// SET() ; 
 } // end function timer 

} // end time 



////////////////////////////////////////////////////////////////
// 
/*
var tempsx ; 
function SET () { 
 tempsx = setInterval( function () {
	        var date1 = new Date() ; 
			var result = localStorage.getItem( "date" ) - date1 ;  // = en milisecond seconde 
			var t =   result ;  
			var s = Math.floor(t / 1000) % 60;  // Secondes
			var m = Math.floor(t / 1000) / 60;  // Minutes

			m = Math.floor(m) ; // On arrondi 
			var chaine = m+":"+s;	  
			document.getElementById("Compte").innerHTML =  chaine ;  
	
			// Pour ne pas aller en negatif du temps 
			if ( m + s < 0) {  document.getElementById("Compte").innerHTML =  " " ;  
							   document.getElementById("Compte1").innerHTML =  "votre reservation a expiré"  ; 
						 } ; 
	} , 1000) ;   // Toute les secondes  // 1000 pour seconde // fin de setinterval 
	
}


function timer () {  
		var date2 = new Date() ;    // Date 2 créer a l'apell de la fonction timer 
	    date2.setMinutes(date2.getMinutes() +20) ; 
    	localStorage.setItem("date" , date2.getTime() ) ; 
	
		clearInterval (tempsx)
	    SET()
 } // fin function timer 
*/

	 
		