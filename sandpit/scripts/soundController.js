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
		playDemoNote: function ( context, app, demoNote, i, numDemoNotes, deferred ) {
			

			//extract 'key' info
			var key = app.data.keyCodes[demoNote.keyCode];
			var keyName = app.data.keys[key]['displayName'];

			//set up our oscillator properties
			var duration = demoNote.duration;			
			var now = context.currentTime, osc = null;
			var frequency = app.data.keys[key]['frequency']
		    var startTime = now + demoNote['start']

		    //create our oscillator
		    osc = context.createOscillator();
		    osc.frequency.value = frequency;

		    //connect with stop start info
		    osc.connect(context.destination);
		    osc.start(startTime);
		    osc.stop(startTime + duration);

		    //colour our typewriter keys on and off in sync with the demo
		    var typewriterKey = document.getElementById('typewriterKey-' + demoNote.keyCode);
		    
		    setTimeout(function(){
		    	$(typewriterKey).css('background-color', '#4285f4');
		    	    //write our notes to the screen
		    	    var character = String.fromCharCode(demoNote.keyCode).toLowerCase();
		    	    console.log('playing demo note')
		    		$('#tuneLock').append(character);
		    }, startTime*1000);

		    setTimeout(function(){
		    	$(typewriterKey).css('background-color', '#a0c3ff');
		    	if (i == numDemoNotes-1) {
		    		deferred.resolve();
		    	}
		    }, startTime*1000 + duration*1000);
			
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