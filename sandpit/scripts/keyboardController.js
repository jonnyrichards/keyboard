define (['transitionController', 'soundController', 'keyFiller'], function ( transitionController, soundController, keyFiller ){

	return {		

		load: function(app){

			var that = this;

			console.log('controlling keyboard!')
			
			$("#footer").click(function() {
				transitionController.transition();
			    
			});

		},

		attachEvents: function(app){

	    	$('.key').hover( function () {
				this.style.fill = '#a0c3ff';
			}, function(){
				this.style.fill = this.getAttribute('colour') === 'white' ? '#ffffff' : '#000000';
			});

			var soundContext = soundController.loadContext(app);

			$('body').keydown( function( event ){

				var keyCode = event.keyCode;
				var key = app.data.keyCodes[keyCode];
				if (app.data.keys[key]['beingPlayed'] === true) {
					return
				}
				else {
					soundController.playTone( soundContext, keyCode, app );
					keyFiller.fill(keyCode, app);
				}
				var typewriterKey = document.getElementById('typewriterKey-' + keyCode);
				$(typewriterKey).css('background-color', '#4285f4');

			});

			$('body').keyup( function( event ){
				var keyCode = event.keyCode;
				soundController.stopTone(keyCode, app)
				keyFiller.unfill(keyCode, app);


				var typewriterKey = document.getElementById('typewriterKey-' + keyCode);
				$(typewriterKey).css('background-color', '#a0c3ff');

			});


	    }

	}

});