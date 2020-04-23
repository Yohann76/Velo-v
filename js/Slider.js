var Slider = { 

	diapos : document.querySelectorAll(".slide"), // selection de tout les classe Slide 
	
	slideActuel: 0,
    
    allerADroite: function () {       
      	Slider.diapos[Slider.slideActuel].style.display = "none";       
        Slider.slideActuel++;
        
        if (Slider.slideActuel > Slider.diapos.length - 1) {
            Slider.slideActuel = 0;
        };
      	Slider.diapos[Slider.slideActuel].style.display = "block";      
    },
    
	
    allerAGauche: function () {
      	Slider.diapos[Slider.slideActuel].style.display = "none";      
        Slider.slideActuel--;
        
        if (Slider.slideActuel < 0) {
            Slider.slideActuel = Slider.diapos.length - 1;
        };       
      	Slider.diapos[Slider.slideActuel].style.display = "block";        
    },
    
    clavier: function(e) {   
        var code = e.keyCode;
        switch(code) {
        case 39: Slider.allerADroite();  // Selection de la touche droite 
        break;
        case 37: Slider.allerAGauche();  // Selection de la touche gauche 
        break;
        }
		
        var defiler = setInterval(Slider.allerADroite, 5000);
        clearInterval(defiler);
    },
	
  GestionSlide: function() {   
	  //Fait défiler le slider toutes les 5 secondes
	  var defiler = setInterval(Slider.allerADroite, 5000);
	  defiler; // voir défilement automatique 

	  //Evenements: définition des éléments
	  var boutonDroitElt = document.getElementById("fleche_droite");
	  var boutonGaucheElt = document.getElementById("fleche_gauche");

	  //contrôle au clic
	  boutonDroitElt.addEventListener("click", function() {
		  Slider.allerADroite();
		  clearInterval(defiler);
	  });

	  boutonGaucheElt.addEventListener("click", function() {
		  Slider.allerAGauche();
		  clearInterval(defiler);
	  });

	  //contrôle clavier
	  document.addEventListener("keydown", Slider.clavier);
	  
  } // Fin gestionSlide
	
	
}  // End objet Slider 

Slider.GestionSlide() ; 
