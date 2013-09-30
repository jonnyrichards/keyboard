define( ['keyboardDrawer', 'keyboardController'], function( keyboardDrawer, keyboardController ){

	console.log('launching app!');

	var app = {

		launch: function(){
			keyboardDrawer.drawKeyboard();
			keyboardController.control();
		}

	}

	return app;

})