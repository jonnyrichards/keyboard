define( ['keyboardDrawer', 'keyboardController', 'soundController', 'keyboardData'], function( keyboardDrawer, keyboardController, soundController, keyboardData){

	console.log('launching app!');

	var app = {

		launch: function(){

			this.data = keyboardData;
			keyboardDrawer.drawKeyboard('keyboardContainer', 80);
			keyboardController.load(this);
			
		}
	}

	window.app = app;

	return app;

})