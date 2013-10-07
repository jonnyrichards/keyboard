define (['soundController', 'keyFiller', 'keyboardDrawer', 'page'], function ( soundController, keyFiller, keyboardDrawer, page ){

	return {		


		load: function(app){

			var that = this;

			console.log('controlling keyboard!')
			
			// $("#footer").click(function() {
			// 	page.transition();
			    
			// });

			//speeding up the page transition for debugging

			page.transition();

		}

	}

});