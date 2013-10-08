define(['bufferLoader'], function(BufferLoader){


	return {


		loadContext: function(app){

			//console.log('loading context');
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			context = new AudioContext();
			app.context = context;
			return context;

		},

		stopTone: function( keyCode, app ){

			var key = app.data.keyCodes[keyCode];
			var keyName = app.data.keys[key]['displayName'];
			//console.log('stopping ' + keyName + '!');
			app.data.keys[key]['oscillator'].stop(0);
			app.data.keys[key]['beingPlayed'] = false;
		},

		playTone: function( context, keyCode, app ){
			

			var key = app.data.keyCodes[keyCode];

			var keyName = app.data.keys[key]['displayName'];
			//console.log('playing ' + keyName + '!')

			var frequency = app.data.keys[key]['frequency']

			var oscillator = context.createOscillator();
			oscillator.frequency.value = frequency;
			app.data.keys[key]['oscillator'] = oscillator;	
			app.data.keys[key]['beingPlayed'] = true;
			oscillator.start(0,0,2);

			oscillator.connect(context.destination);

		},

		//slightly different from playTone, this one, because it will take a duration parameter and call the whole start and stop itself. it's more for playBack run by JS, rather than the user on the keyboard
		playNote: function ( context, app, keyCode, duration ) {

			var key = app.data.keyCodes[keyCode];
			var keyName = app.data.keys[key]['displayName'];
			var frequency = app.data.keys[key]['frequency']

			var oscillator = context.createOscillator();
			oscillator.frequency.value = frequency;
			
			oscillator.start(0,0,2);
			oscillator.stop(duration);
			oscillator.connect(context.destination);

		}

		// playSound: function(context, url){

		// 	try {

		// 		var bufferLoader;

		// 		function init() {
										
		// 		  	bufferLoader = new BufferLoader(
		// 		    context,
		// 		    [
		// 		      url
		// 		    ],
		// 		    finishedLoading
		// 		  );

		// 		  bufferLoader.load();
				  
		// 		}

		// 		function finishedLoading(bufferList) {

		// 		  var source = context.createBufferSource();
		// 		  source.buffer = bufferList[0];

		// 		  source.connect(context.destination);
		// 		  source.start(0);
		// 		}

		// 		init();

		// 	}

		// 	catch(e) {

		// 		console.log(e);

		// 	}

		// },

		
	}


})