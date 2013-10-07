define (['soundController', 'keyFiller'], function (soundController, keyFiller) {

	var keyboardDrawer = {

		data: {

			//white keys
			whiteKeyNames: ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'cOctave', 'dOctave', 'eOctave'],
			numWhiteKeys: 10,
			whiteKeyStrokeWidth: 2,
			whiteKeyStrokeStyle: 'black',
			whiteKeyFillStyle: 'white',
			whiteKeyWidth: 80,
			whiteKeyWidthToHeight: 4.2,

			//black keys - few differences here to deal with the skips
			blackKeyOffset: function() { return 0.75*this.whiteKeyWidth }, //how far across first white key to place first black key
			blackKeyNames: {
				0: 'cSharp',
				1: 'dSharp',
				3: 'fSharp',
				4: 'gSharp',
				5: 'aSharp',
				7: 'cSharpOctave',
				8: 'dSharpOctave'
			},
			blackKeyStrokeWidth: 1,
			blackKeyStrokeStyle: 'black',
			blackKeyFillStyle: 'black',
			blackKeyWidth: function(){return this.whiteKeyWidth/2}, //hack-y; need a better-defined white-black width ratio
			blackKeyWidthToHeight: 5,
			
			//keyboard
			keyboardWidth: function(){ return this.whiteKeyWidth*this.numWhiteKeys },
			keyboardHeight: function(){ return this.whiteKeyWidth*this.whiteKeyWidthToHeight },

		},

		drawKeyboard: function (containerElement, whiteKeyWidth) {
			console.log('drawing keyboard!');
			this.data.element = containerElement;
			this.data.keyboardElement = containerElement.replace('Container', '')
			this.data.whiteKeyWidth = whiteKeyWidth;
			//console.log(this.data);
			this.drawContainer(this.data.keyboardElement);
			var keyboardData = this.data;
			this.drawWhiteKeys(keyboardData);
			this.drawBlackKeys(keyboardData);
			this.attachEvents();

	    },

	    drawContainer: function(keyboardElement){
			var container = document.getElementById(this.data.element);
			var keyboard = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			keyboard.setAttribute('id', keyboardElement);
			keyboard.setAttribute('height', this.data.keyboardHeight());
			keyboard.setAttribute('width', this.data.keyboardWidth());
			container.appendChild(keyboard);
	    },

	    drawWhiteKeys: function(keyboardData){
	    	console.log('..drawing whites!');
	    	for (i = 0; i < keyboardData.numWhiteKeys; i++) {
	    		var keyName = keyboardData.whiteKeyNames[i]
	    		this.drawKey(keyboardData.keyboardElement, 'white', keyName, i*keyboardData.whiteKeyWidth, 0, keyboardData.whiteKeyWidth, keyboardData.whiteKeyWidth*keyboardData.whiteKeyWidthToHeight, keyboardData.whiteKeyFillStyle, keyboardData.whiteKeyStrokeStyle, i, 0);
	    	}

	    },
	    
	    drawBlackKeys: function(keyboardData){
	    	console.log('..drawing blacks!')
	    	for (i = 0; i < keyboardData.numWhiteKeys; i++) { //we still reference whites when drawing blacks
	    		if ( !keyboardData.blackKeyNames[i]){
	    			continue;
	    		}
	    		var keyName = keyboardData.blackKeyNames[i]
	    		this.drawKey(keyboardData.keyboardElement, 'black', keyName, i*keyboardData.whiteKeyWidth + keyboardData.blackKeyOffset(), 0, keyboardData.blackKeyWidth(), keyboardData.blackKeyWidth()*keyboardData.blackKeyWidthToHeight, keyboardData.blackKeyFillStyle, keyboardData.blackKeyStrokeStyle, i);
	    	}

	    },

	    drawKey: function(element, colour, name, x, y, width, height, fillStyle, strokeStyle, index){
	    	var key = document.createElementNS('http://www.w3.org/2000/svg', "rect")
	    	var keyboard = document.getElementById(element);
	    	keyboard.appendChild(key);
	    	key.setAttribute('id', name);
	    	key.setAttribute('class', 'key');
	    	key.setAttribute('colour', colour);
	    	key.setAttribute('x', x);
	    	key.setAttribute('y', y);
	    	key.setAttribute('height', height);
	    	key.setAttribute('width', width);
	    	key.style.stroke = strokeStyle;
	    	key.style.fill = fillStyle;   	
	    },

	    attachEvents: function(){

	    	$('.key').hover( function () {
				this.style.fill = '#a0c3ff';
			}, function(){
				this.style.fill = this.getAttribute('colour') === 'white' ? '#ffffff' : '#000000';
			});

			var soundContext = soundController.loadContext(app);

			$('body').keydown( function( event ){

				var keyCode = event.keyCode;
				console.log('keydown event!')
				var key = app.data.keyCodes[keyCode];
				if (app.data.keys[key]['beingPlayed'] === true) {
					return
				}
				else {
					soundController.playTone( soundContext, keyCode, app );
					keyFiller.fill(keyCode, app);
				}				
			});

			$('body').keyup( function( event ){
				var keyCode = event.keyCode;
				soundController.stopTone(keyCode, app)
				keyFiller.unfill(keyCode, app);
			});


	    }

	 }

    return keyboardDrawer;

});