// Aide :  https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/l-element-canvas
var mousePressed = false;                        // Souris non presser 
var touchstart = false ;                         // aucun doight poser dessus 
var canvas = document.getElementById('canvas');  // Canvas = la balise canvas 
var ctx = canvas.getContext("2d");
var preuve = 0;                                  // Pour prouver que l'utilisateur a signer donc on démare a 0 
/////////////////////////////////////


    $('#canvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        preuve++;
        // On incrémente la variable, ce qui prouve que l'utilisateur à signé. Mouvement sur le click de la souris
    });

    //On récupère les positions (offset)
    $('#canvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
            preuve++;
        }
    });

    //Au relachement du click, plus possible de dessiner si la souris bouge toujours
    $('#canvas').mouseup(function () {
        mousePressed = false;
    });

    //En sorti du canvas, pas possible de dessiner
    $('#canvas').mouseleave(function () {
        mousePressed = false;
    });

    $('#recommencer, #annuler').on('click', function () {
        preuve = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });




//Fonction dessin
function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();/*Initialisation du tracé*/
        ctx.moveTo(lastX, lastY);/*Point de référence du tracé*/
        ctx.lineTo(x, y);/*Tracé de la ligne*/
        ctx.closePath();/*Arrêt du tracé, point de départ*/
        ctx.stroke();/*Contour*/
    }
    lastX = x;
    lastY = y;
}




// MOBILE PHONE 
///// Mobile Phone /////
		
  $('#canvas').on("touchstart",  (function (e) {
        touchstart = true ;
		var rect = document.getElementById("canvas").getBoundingClientRect();
        Draw(
			e.clientX - rect.left,  // pos horizontale
			e.clientY - rect.top,   // pos verticale 	
			 false );     
        preuve++;         // On incrémente preuve
     } ) ) ;

    //On récupère les positions (offset)
    $('#canvas').on("touchmove", (function (e) {
        if (touchstart) {
			var rect = document.getElementById("canvas").getBoundingClientRect();
            Draw(
				e.clientX - rect.left, 
				e.clientY - rect.top,
				true );   
			
            preuve++; // Preuve ++ 	
        }
    }) );
    //Au relachement du click, plus possible de dessiner si la souris bouge toujours
    $('#canvas').on("touchend" ,(function () {
        touchstart = false;
    }) );