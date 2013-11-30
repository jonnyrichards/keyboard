define (['soundController', 'keyFiller', 'tuneLock', 'typewriterDrawer', 'keyboardDrawer'], function ( soundController, keyFiller, tuneLock, typewriterDrawer, keyboardDrawer ){

	return {

		initiate: function(app){

			this.listen(app);

		},

		listen: function(app){

			var that = this;

			$("#footer").click(function() {
				var demoShown = that.showDemo();
				demoShown.done(function(){
					console.log('we are done with demo');
					setTimeout( function() {
						that.hideDemo();
					}, 1000)
				});
			    
			});

	    	$('.key').hover( function () {
				this.style.fill = '#a0c3ff';
			}, function(){
				this.style.fill = this.getAttribute('colour') === 'white' ? '#ffffff' : '#000000';
			});

			var soundContext = soundController.loadContext(app);

			$('body').keydown( function( event ){

				var keyCode = event.keyCode;

				if (keyCode == '13') {
					tuneLock.clear();
				}

				var prompt = document.getElementById('prompt');
				if ( prompt ) {
					$(prompt).remove();
				}

				//return if this isn't a magic key
				if (app.data.keyCodes[keyCode] === undefined) {
					return;
				}
		
				var key = app.data.keyCodes[keyCode];
				if (app.data.keys[key]['beingPlayed'] === true) {
					return

				}
				else {
					soundController.playTone( soundContext, keyCode, app );
					keyFiller.fill(keyCode, app);
				}
				//colour our typewriter keys when they are played
				var typewriterKey = document.getElementById('typewriterKey-' + keyCode);
				$(typewriterKey).css('background-color', '#4285f4');


				var character = String.fromCharCode(keyCode).toLowerCase();
				var text = document.createTextNode(character);
				$('#tuneLock').append(text);


			});

			$('body').keyup( function( event ){

				var keyCode = event.keyCode;

				if (app.data.keyCodes[keyCode] === undefined) {
					return;
				}

				soundController.stopTone(keyCode, app)
				keyFiller.unfill(keyCode, app);


				var typewriterKey = document.getElementById('typewriterKey-' + keyCode);
				$(typewriterKey).css('background-color', '#a0c3ff');

			});

			$('#footer').mouseover(function(){
				$(this).css('color', '#e6e6e6');
			}).mouseout(function(){
				$(this).css('color', '#ffffff');
				
			})


	    },

	    showDemo: function( ) {

			var deferred = $.Deferred();

			this.fadeOutKeyboard();
			this.fadeInTypewriter( deferred );

			return deferred.promise();

		},

		hideDemo: function( ) {

			var that = this;

			var typewriterFadedOut = this.fadeOutTypewriter();
			typewriterFadedOut.done(function (){
				setTimeout(function(){
					that.fadeInKeyboard();
				},0)
				
			});
			
		},

		fadeOutKeyboard: function ( ){
			//this should be tidied up
			document.getElementById("underline").style.opacity = '0';
			document.getElementById("footer").style.opacity = '0';
			document.getElementById("keyboard").style.opacity = '0';

			document.getElementById("underline").addEventListener('webkitTransitionEnd', function( ) {
				$(document.getElementById("underline")).remove();
				$(document.getElementById("footer")).remove();
				$(document.getElementById("keyboard")).remove();
				$(document.getElementById("keyboardContainer")).remove();
			}, false);

		},

		fadeInTypewriter: function( deferred ) {

			document.getElementById("underline").addEventListener('webkitTransitionEnd', function(){
				tuneLock.draw();
				typewriterDrawer.draw( deferred );

			}, false);

		},

		fadeOutTypewriter: function () {
			var deferred = $.Deferred();
			var typewriterContainer = document.getElementById('typewriterContainer');
			typewriterContainer.style.opacity = '0';
			document.getElementById('tuneLockContainer').style.opacity = '0';
			typewriterContainer.addEventListener('webkitTransitionEnd', function( ){
				$(typewriterContainer).remove();
				document.getElementById('tuneLock').innerText = '';
				deferred.resolve();
			}, false);
			return deferred.promise();
		},

		fadeInKeyboard: function ( ) {

			console.log('now we can fade in keyboard');

			var keyboardContainer = document.createElement('div');
			keyboardContainer.id = 'keyboardContainer';

			keyboardDrawer.drawKeyboard(keyboardContainer, 80);
			keyboardContainer.style.opacity = '0';

			var tuneLock = document.getElementById('tuneLock')
			var prompt = document.createElement('span');
			prompt.id= 'prompt';
			prompt.innerText = "Type to play";
			tuneLock.appendChild(prompt);
			
			document.body.appendChild(keyboardContainer);

			setTimeout(function ( ) {
				document.getElementById("keyboardContainer").style.opacity = '1';
				document.getElementById('tuneLockContainer').style.opacity = '1';	
			}, 300);

		}

	}

});