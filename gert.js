/* utiliser le Z et S pour celui de gauche et la touche de bas et haut pour celui de droite*/


$(document).ready(function(){

	var width = $(window).width();
	var height = $(window).height();
	var positionJoueur1 = hauteur / 2;
	var positionJoueur2 = hauteur / 2;
	var zPressed = false;
	var sPressed = false;
	var upPressed = false;
	var downPressed = false;
	var ballPositionY = hauteur / 2;
	var vitesseBalleY = 5
	var ballPositionX = largeur / 2;
	var vitesseBalleX = 5
	

	function movePlayer() {

	if(zPressed && positionJoueur1 > 0)
	 $("#joueur1").css("top", positionJoueur1-=5);
  if(sPressed && positionJoueur1 < hauteur - 105)
   $("#joueur1").css("top", positionJoueur1+=5);
  if(upPressed && positionJoueur2 > 0)
   $("#joueur2").css("top", positionJoueur2-=5);
  if(downPressed && positionJoueur2 < hauteur - 105)
   $("#joueur2").css("top", positionJoueur2+=5);



		 

		}

		function moveBall() {

			if (ballPositionY < 0) {

				vitesseBalleY = vitesseBalleY * -1;

				}


			if (ballPositionY > height) {


				vitesseBalleY = vitesseBalleY * -1;	

				}


				



			if (ballPositionX < 0) {

				changeScore(2);

				}


			if (ballPositionX > width) {


				changeScore(1);

				} 

			if (ballPositionX < 70 && ballPositionY + 20 > positionJoueur1 && ballPositionY < positionJoueur1 + 100 ) {

				vitesseBalleX = vitesseBalleX * -1;
						

			}

			if (ballPositionX + 20 > width - 70 && ballPositionY + 20 > positionJoueur2 && ballPositionY < positionJoueur2 + 100 ) {

				vitesseBalleX = vitesseBalleX * -1;
				

			}




				$("#balle").css("left", ballPositionX += vitesseBalleX);
				$("#balle").css("top", ballPositionY += vitesseBalleY);
			
			
			



	
	

		}



	function changeScore(numero) {

				ballPositionY = height / 2;
				ballPositionX = width / 2;

				 if (numero == 1 ) {

				 		document.getElementById("scorejoueur1").innerHTML++;
				 }

				 if (numero == 2) {

				 		document.getElementById("scorejoueur2").innerHTML++;


				 }
				
				
	}



	function mainLoop() {

		movePlayer();
		moveBall();
		setTimeout(mainLoop, 5);
	}

		$(document).keydown(function(event) {

			switch(event.which) {

				case 90: 
				zPressed = true;
				break;

				case 83: 
				sPressed = true;
				break;

				case 38: 
				upPressed = true;
				break;

				case 40: 
				downPressed = true;
				break;



			} 

			
	 });


	$(document).keyup(function(event) {

			switch(event.which) {

				case 90: 
				zPressed = false;
				break;

				case 83: 
				sPressed = false;
				break;

				case 38: 
				upPressed = false;
				break;

				case 40: 
				downPressed = false;
				break;

			} 

		
	 });

 mainLoop();


});






