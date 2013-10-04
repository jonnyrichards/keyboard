define(['bufferLoader'], function(BufferLoader){


	return {


		loadContext: function(app){

			console.log('loading context');
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			context = new AudioContext();
			return context;

		},

		playSound: function(context, url){

			try {

				var bufferLoader;

				function init() {
										
				  	bufferLoader = new BufferLoader(
				    context,
				    [
				      url
				    ],
				    finishedLoading
				  );

				  bufferLoader.load();
				  
				}

				function finishedLoading(bufferList) {

				  var source = context.createBufferSource();
				  source.buffer = bufferList[0];

				  source.connect(context.destination);
				  source.start(0);
				}

				init();

			}

			catch(e) {

				console.log(e);

			}

		},

		stopTone: function( keyCode, app ){

			var key = app.data.keyCodes[keyCode];
			var keyName = app.data.keys[key]['displayName'];
			console.log('stopping ' + keyName + '!');
			app.data.keys[key]['oscillator'].stop(0);
			app.data.keys[key]['beingPlayed'] = false;
		},

		playTone: function( context, keyCode, app ){
			

			var key = app.data.keyCodes[keyCode];

			var keyName = app.data.keys[key]['displayName'];
			console.log('playing ' + keyName + '!')

			var frequency = app.data.keys[key]['frequency']

			var oscillator = context.createOscillator();
			oscillator.frequency.value = frequency;
			app.data.keys[key]['oscillator'] = oscillator;	
			app.data.keys[key]['beingPlayed'] = true;	

			oscillator.start(0,0,2);
			oscillator.connect(context.destination);

		}
		
	}


})