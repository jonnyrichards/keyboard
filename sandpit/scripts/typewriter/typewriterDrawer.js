define(['typewriterKeyData', 'soundController'], function ( typewriterData, soundController ) {

	return {

		data: typewriterData,

		draw: function( deferred ){

			console.log('drawing typewriter!')

			this.drawContainer();

			for (var i = 1; i < this.data.typewriter.numRows+1; i++){
				this.drawRow(i, this.data.rows[i]);
			}
		    
		    var typewriterFadeUp = this.fadeUpTypewriter();
		    
		    var that = this;

		    typewriterFadeUp.done( function( ){

		    	setTimeout( function( ){
		    		that.runDemo ( deferred );	
		    	}, 400);
		    	
			});
		},

		drawContainer: function( ){

			var container = document.createElement('div')
			container.id = 'typewriterContainer';
			document.body.appendChild(container);
			//this is a quite bastard function to gauge the typewriter width based on row 1, which has the most standard keyset - all equal width; equally for the height we just take numRows and multiply it by standard row height

			var typewriterWidth = this.data.rows[1]['numberOfKeys']*this.data.typewriter.standardKeyWidth*this.data.rows[1].standardKeyWidthMultiplier + this.data.rows[1]['numberOfKeys']*this.data.typewriter.inBetweenKeysWidth;

			this.data.typewriterWidth = typewriterWidth;

			var typewriterHeight = this.data.typewriter.numRows * this.data.typewriter.standardKeyHeight + (this.data.typewriter.numRows-1) * this.data.typewriter.inBetweenRowsHeight

			$('#typewriterContainer').css('width', typewriterWidth);
			$('#typewriterContainer').css('height', typewriterHeight);
			
		},

		drawRow: function ( index, rowData ){
			var row = document.createElement('div');
			row.id = 'row' + index;
			row.className = 'typewriterRow';
			document.getElementById('typewriterContainer').appendChild(row);
			row.style.width = this.data.typewriterWidth + 'px'
			var rowHeight = this.data.typewriter.standardKeyHeight * rowData.standardKeyHeightMultipler;
			row.style.height = rowHeight + 'px'
			row.style.marginBottom = this.data.typewriter.inBetweenRowsHeight + 'px';
			row.style.marginLeft = this.data.typewriter.inBetweenKeysWidth/2 + 'px';
			for (var i = 1; i < rowData.numberOfKeys+1; i++) {
				this.drawKey(i, row, rowData);
			}
		},

		drawKey: function ( keyIndex, row, rowData ) {

			//if this isn't a special key in this row...
			var key = document.createElement('div');
			key.className = 'typewriterKey';
			key.style.height = this.data.typewriter.standardKeyHeight*rowData.standardKeyHeightMultipler + 'px';
			key.style.marginRight = this.data.typewriter.inBetweenKeysWidth + 'px';
			key.style.display = 'inline-block';
			key.style.borderRadius = '4px';
			key.style.opacity = '0';

			var styledKey;

			if ( rowData[keyIndex] != undefined ){

				//this -4 business is a terrible hack to deal with the fact that i'm now drawing a borders around typewriter keys. because of the way i determine the keyboard width, it's easier to just subtract a standard width from each key rather than change anything else. it's a demo after all.
				if ( rowData[keyIndex].specialKeyMultiplierWidth != undefined ) {
					key.style.width = this.data.typewriter.standardKeyWidth*(rowData[keyIndex].specialKeyMultiplierWidth) -4 + 'px';
						styledKey = this.styleKey(key, false);
				}
				else if ( rowData[keyIndex].keyName != undefined ) {

					key.style.width = this.data.typewriter.standardKeyWidth*rowData.standardKeyWidthMultiplier -4 + 'px';
					styledKey = this.styleKey(key, true, rowData[keyIndex].keyName, rowData[keyIndex].keyCode)

				}
			}

			else {

				key.style.width = this.data.typewriter.standardKeyWidth*rowData.standardKeyWidthMultiplier -4 + 'px';
				styledKey = this.styleKey(key, false);

			}
			
			row.appendChild(styledKey);

		},

		styleKey: function ( key, magicKey, magicKeyName, magicKeyCode ) {

			if (magicKey == true ) {

				//key.style.border = '1px solid #b3b3b3';
				key.style.backgroundColor = '#a0c3ff';
				key.style.border = '1px solid #a0c3ff';
				key.style.textAlign = 'center';
				key.style.verticalAlign = 'top';
				key.id = 'typewriterKey-' + magicKeyCode;

				var textContainer = document.createElement('div');
				textContainer.innerText = magicKeyName;
				textContainer.style.marginTop = '35%'; //this is a cludge; vertical centering sucks
				textContainer.style.color = 'white';
				key.appendChild(textContainer);
				//key.innerText = magicKeyName;

			}

			else {

				key.style.border = '1px solid #b3b3b3';
			}

			return key

		},

		fadeUpTypewriter: function (  ) {

			var deferred = $.Deferred()

			setTimeout( function(){

				var keys = document.getElementsByClassName('typewriterKey');
				for (var i = 0; i < keys.length; i++){
					keys[i].style.opacity = '1';
				}

			}, 0)

			//wait before we proceed with demo
			setTimeout( function(){
				deferred.resolve();

			}, 1500)

			return deferred.promise();

		},

		runDemo: function ( deferred ) {

			console.log('running demo!');

			var demoNotes = [

				{
					keyCode: '73',
					start: 0,
					duration: 0.3
				},
				{
					keyCode: '85',
					start: 0.5,
					duration: 0.3
				},
				{
					keyCode: '73',
					start: 1,
					duration: 0.3
				},
				{
					keyCode: '85',
					start: 1.5,
					duration: 0.3
				},
				{
					keyCode: '73',
					start: 2,
					duration: 0.3
				},
				{
					keyCode: '84',
					start: 2.5,
					duration: 0.3
				},
				{
					keyCode: '55',
					start: 3,
					duration: 0.3
				},
				{
					keyCode: '54',
					start: 3.5,
					duration: 0.3
				},
				{
					keyCode: '82',
					start: 4,
					duration: 1
				},

			];

			var context = app.context;


			for(i = 0; i < demoNotes.length; i++) {

				soundController.playDemoNote(context, app, demoNotes[i], i, demoNotes.length,deferred);
				
			} 	
			
		}

	}

});