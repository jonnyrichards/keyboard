define ( function () {

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

		drawKeyboard: function () {
			console.log('drawing keyboard!');
			this.drawContainer();
			var keyboardData = this.data;
			this.drawWhiteKeys(keyboardData);
			this.drawBlackKeys(keyboardData);

	    },

	    drawContainer: function(){
			var container = document.getElementById('keyboardContainer')
			var keyboard = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			keyboard.setAttribute('id', 'keyboard');
			keyboard.setAttribute('height', this.data.keyboardHeight());
			keyboard.setAttribute('width', this.data.keyboardWidth());
			container.appendChild(keyboard);
	    },

	    drawWhiteKeys: function(keyboardData){
	    	console.log('drawing whites!');
	    	for (i = 0; i < keyboardData.numWhiteKeys; i++) {
	    		var keyName = keyboardData.whiteKeyNames[i]
	    		this.drawKey('white', keyName, i*keyboardData.whiteKeyWidth, 0, keyboardData.whiteKeyWidth, keyboardData.whiteKeyWidth*keyboardData.whiteKeyWidthToHeight, keyboardData.whiteKeyFillStyle, keyboardData.whiteKeyStrokeStyle, i, 0);
	    	}

	    },
	    
	    drawBlackKeys: function(keyboardData){
	    	console.log('drawing blacks!')
	    	for (i = 0; i < keyboardData.numWhiteKeys; i++) { //we still reference whites when drawing blacks
	    		if ( !keyboardData.blackKeyNames[i]){
	    			continue;
	    		}
	    		var keyName = keyboardData.blackKeyNames[i]
	    		this.drawKey('black', keyName, i*keyboardData.whiteKeyWidth + keyboardData.blackKeyOffset(), 0, keyboardData.blackKeyWidth(), keyboardData.blackKeyWidth()*keyboardData.blackKeyWidthToHeight, keyboardData.blackKeyFillStyle, keyboardData.blackKeyStrokeStyle, i);
	    	}

	    },

	    drawKey: function(colour, name, x, y, width, height, fillStyle, strokeStyle, index){
	    	var key = document.createElementNS('http://www.w3.org/2000/svg', "rect")
	    	var keyboard = document.getElementById('keyboard');
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
	    }

	 }

    return keyboardDrawer;

});