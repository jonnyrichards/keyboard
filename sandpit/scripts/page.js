define(['typewriterDrawer'], function( typewriterDrawer) {
	
	return {
		
		transition: function( ) {			

			document.getElementById("header").style.webkitTransform = "translate(0px, -200px)";
			document.getElementById("footer").style.webkitTransform = "translate(0px, 200px)";
			document.getElementById("keyboard").style.webkitTransform = "scale(1.1, 1.1)";
			
			//NEED TO REMOVE HIS!
			$('#keyboardContainer').remove();

			typewriterDrawer.draw();

		}

	}

});