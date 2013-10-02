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

		stopTone: function(oscillator){
			console.log('stopping!');
			oscillator.stop(0)
		},

		playTone: function(context){

			console.log('playing!')
			console.log(context);
			var oscillator = context.createOscillator();
			oscillator.frequency.value = 110;
			oscillator.start(0,0,2);
			oscillator.connect(context.destination);
			return oscillator;
		}
		
	}


})