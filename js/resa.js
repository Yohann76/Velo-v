var Reserv = {

	clickreservation: function () {       
		$('#Reservation').click(function () {
			
			if (  ( preuve > 0) && (PreuveMarker > 0 ) && (dispovelo > 0 )   ) {  
				
				document.getElementById("confirm1").innerHTML =  "Vous avez reservé un Velo'V a la station : " + sessionStorage.adressestation ;   // S'affiche correctement  
				document.getElementById("confirm01").innerHTML =  "Votre réservation est valable pendant " ;   // S'affiche correctement  
				Time.timer();		
			} // Fin if 
	   
			else	{
					document.getElementById("confirm").innerHTML =  "Veuillez remplire toute les conditions pour finaliser votre résérvation"  ; // S'affiche correctement 
			}
			
			// On enleve "votre reservation a expirer au clic sur reservation 
			   document.getElementById("Compte1").innerHTML =  " "  ; 
		});  

	 } ,// end function clickreservation
	
	Compnow: function () {   
	
	var datenow = new Date() ;    
	if (  datenow < localStorage.getItem( "date" ) ) {  // Afin de sauvgarder la reservation 
		
			document.getElementById("confirm1").innerHTML =  "Vous avez reservé un Velo'V a la station : " + sessionStorage.adressestation ;   // S'affiche correctement  
			document.getElementById("confirm01").innerHTML =  "Votre réservation est valable pendant " ;   // S'affiche correctement  
			//	Time.timer();
	Time.SET(); 		
	 }
	
		
	}  // end function Compnow 
	
	
}  // end reserv object

Reserv.clickreservation() ; 
Reserv.Compnow() ; 


