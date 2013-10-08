define( ['keyboardController', 'keyboardData', 'keyboardDrawer'], function( keyboardController, keyboardData, keyboardDrawer){

	console.log('launching app!');

	var app = {

		launch: function(){

			this.data = keyboardData;
			keyboardDrawer.drawKeyboard('keyboardContainer', 80);
			keyboardController.attachEvents(this);

			//don't really like the way this is doing this - should page transition stuff live elsewhere?
			keyboardController.load(this);
			
		}
	}

	window.app = app;

	return app;

})