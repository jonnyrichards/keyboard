define(['typewriterDrawer'], function( typewriterDrawer) {
	
	return {
		
		transition: function( ) {

			this.removeKeyboard();
			this.fadeInTypewriter();

		},

		removeKeyboard: function ( ){

			document.getElementById("header").style.webkitTransform = "translate(0px, -200px)";
			document.getElementById("footer").style.webkitTransform = "translate(0px, 200px)";
			document.getElementById("keyboard").style.webkitTransform = "translate(0px, 600px)";
			//document.getElementById("keyboard").style.webkitTransform = "scale(1.1, 1.1)";
			
			
		},

		fadeInTypewriter: function( ) {

			document.getElementById("header").addEventListener('webkitTransitionEnd', function(){
				typewriterDrawer.draw();
			}, false);

		}

	}

});