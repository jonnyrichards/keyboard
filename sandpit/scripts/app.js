define( ['keyboardDrawer', 'keyboardController', 'soundController', 'data'], function( keyboardDrawer, keyboardController, soundController, data){

	console.log('launching app!');

	var app = {

		launch: function(){
			
			this.data = data
			keyboardDrawer.drawKeyboard();
			keyboardController.load(this);
			//console.log(this);
			
		}
	}

	window.app = app;

	return app;

})