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
			this.data.keyboardElement = 'keyboard'
			this.data.whiteKeyWidth = whiteKeyWidth;

			containerElements = this.drawContainer(containerElement);
			
			var keyboardData = this.data;
			keyboardData.keyboardElement = 'keyboard';
			
			this.drawWhiteKeys(keyboardData,containerElements);
			this.drawBlackKeys(keyboardData, containerElements);

			document.getElementById('main').appendChild(containerElements[0]);
			
			this.finished();
			//this.attachEvents();

	    },

	    drawContainer: function(containerElement){

			var keyboardElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			keyboardElement.setAttribute('id', 'keyboard');
			keyboardElement.setAttribute('height', this.data.keyboardHeight());
			keyboardElement.setAttribute('width', this.data.keyboardWidth());
			containerElement.appendChild(keyboardElement);
			return [containerElement, keyboardElement]
	    },

	    drawWhiteKeys: function(keyboardData, containerElements){
	    	console.log('..drawing whites!');
	    	console.log(keyboardData);

	    	var keyboardElement = containerElements[1]

	    	for (i = 0; i < keyboardData.numWhiteKeys; i++) {
	    		var keyName = keyboardData.whiteKeyNames[i]
	    		this.drawKey(keyboardElement, 'white', keyName, i*keyboardData.whiteKeyWidth, 0, keyboardData.whiteKeyWidth, keyboardData.whiteKeyWidth*keyboardData.whiteKeyWidthToHeight, keyboardData.whiteKeyFillStyle, keyboardData.whiteKeyStrokeStyle, i, 0);
	    	}

	    },
	    
	    drawBlackKeys: function(keyboardData, containerElements){

	    	console.log('..drawing blacks!')

	    	var keyboardElement = containerElements[1]

	    	for (i = 0; i < keyboardData.numWhiteKeys; i++) { //we still reference whites when drawing blacks
	    		if ( !keyboardData.blackKeyNames[i]){
	    			continue;
	    		}
	    		var keyName = keyboardData.blackKeyNames[i]
	    		this.drawKey(keyboardElement, 'black', keyName, i*keyboardData.whiteKeyWidth + keyboardData.blackKeyOffset(), 0, keyboardData.blackKeyWidth(), keyboardData.blackKeyWidth()*keyboardData.blackKeyWidthToHeight, keyboardData.blackKeyFillStyle, keyboardData.blackKeyStrokeStyle, i);
	    	}

	    },

	    drawKey: function(keyboardElement, colour, name, x, y, width, height, fillStyle, strokeStyle, index){
	    	var key = document.createElementNS('http://www.w3.org/2000/svg', "rect")

	    	//grrrr need to extract keyboard element from inside the container element. but can't use getElementById because we're not searching the whole dom...
	    	
	    	keyboardElement.appendChild(key);
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

	    finished: function(){
	    	console.log('keyboard has finished drawing!');
	    }

	 }

    return keyboardDrawer;

});