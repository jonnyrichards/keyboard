define (['soundController'], function ( soundController ){

	return {		

		load: function(app){

			var soundContext = soundController.loadContext(app);

			console.log('controlling keyboard!')

			$('.key').hover( function () {
				this.style.fill = '#bada55';
			}, function(){
				this.style.fill = this.getAttribute('colour') === 'white' ? '#ffffff' : '#000000';
			});

			$('body').keydown( function( event ){
				console.log(event);
				var keyCode = event.keyCode;
				console.log('keydown event!')
				var key = app.data.keyCodes[keyCode];
				if (app.data.keys[key]['beingPlayed'] === true) {
					return
				}
				else {
					soundController.playTone( soundContext, keyCode, app );	
				}
				
			});

			$('body').keyup( function( event ){
				var keyCode = event.keyCode;
				soundController.stopTone(keyCode, app)
			});

		}
	}

});