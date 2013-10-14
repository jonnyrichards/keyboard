define( ['controller', 'data', 'keyboardDrawer', 'pubSub', 'extender'], function( controller, data, keyboardDrawer, pubSub, extender){

	console.log('launching app!');

	var app = {

		launch: function(){

			extender.extend(app, pubSub);

			app.data = data;

			app.controller = controller;
			controller.initiate(app);

			app.keyboardDrawer = keyboardDrawer;
			
			var keyboardContainer = document.createElement('div');
			keyboardContainer.id = 'keyboardContainer';
			keyboardDrawer.drawKeyboard(keyboardContainer, 80);

			//don't really like the way this is doing this - should page transition stuff live elsewhere?

		}
	}

	window.app = app;

	return app;

})