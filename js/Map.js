var map ; 
var PreuveMarker = 0 ; 
var dispovelo = 0 ; 

var MapVelib = {
	
    divMap: document.getElementById("map"),
    
    divResa: document.getElementById("resa"),
	

	

        
    affichageDebut: function() {
        MapVelib.divMap.style.width = "70%";
        MapVelib.divResa.style.display = "none";
    },
    
    afficherResa: function() {
        $("#resa").fadeIn(1000);
        MapVelib.divResa.style.display = "block";     
    },
	
	

	createMarker:function(data) {
	
		var marker = new google.maps.Marker({
			  position: data.position,           
			  map : map
		  }); 
			 
			  // Quand on selectionne un markers
			      marker.addListener('click', function() { 
					   PreuveMarker++  ; 
				       document.getElementById("adresse").innerHTML = data.address ; // Adresse de la station 	  	  
			           document.getElementById("places").innerHTML = data.available_bike_stands + " places."; // Nombre de place dispo 
			           document.getElementById("dispo").innerHTML =  data.available_bikes  + " vélos disponibles." ; // nombre de vélo disponible

					  
					  sessionStorage.adressestation = data.address ; 
					 
					  /////////////////////////////////////////////
					  // Pour savoir si les velo sont dispo ou non  
					   if (data.available_bikes <= 0) {    // -1 plus de velo disponible 
						   dispovelo= -1 ;
					   	  }
					  
					   else {  // +1 encore des velo disponible 
						   dispovelo= 1 ; 
							}

					         // Afficher que les station a 0 velo sont indisponbible 
							 if (data.available_bikes <= 0) { 
								 document.getElementById("dispo").innerHTML =  "Il n'y a plus de vélos disponibles pour cette Station." ; 
							 }	  					
					  
					  
					        // pour enlever un velo disponible a chaque reservation  
						    $('#Reservation').click(function () {  
							 if (preuve > 0) { // Si preuve est supérieur 0 on enléve un velo  ( pour pas enlever un velo pour rien )
							 data.available_bikes-- ; }
	
							 if ((data.available_bikes <= 0) ) {
							// Afficher qu'il n'y a plus de velo disponible si l'utilisateur reserve un velo 
							 document.getElementById("dispo").innerHTML =  "Il n'y a plus de vélos disponibles pour cette Station." ; 	
							 }	 
							 else {
					         document.getElementById("dispo").innerHTML =  data.available_bikes  + " vélos disponibles." ; // nombre de vélo disponible 
							 }
						    });			  
					  
					   MapVelib.afficherResa();   

			  });   // fin du click sur marker  
	
 	} // End create marker */


}// End objet Map Velib 


MapVelib.affichageDebut();

// Affichage de la map 

 function initMap() { 

          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 45.750000, lng: 4.850000}   // Centre de l'apparition de la carte Lyon 
        });	
 } // Fin de initMaps */

/* ****************************************** */ 
  ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=11121482be30b73969898a56eca302d3faa13da0" , function(data) {   
  		var rep = JSON.parse(data) ; 
	  
	  	var i=0;
	  	while(i<338) {    // Boucle 338 fois pour le nombre de station 
   		   i++; 
		  
		MapVelib.createMarker(rep[i]) ; 
		}      
      
  }); 


  
   