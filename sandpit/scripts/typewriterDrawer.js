define(['typewriterKeyData'], function ( typewriterData ) {

	return {

		data: typewriterData,

		draw: function(){

			console.log('drawing typewriter!')

			this.drawContainer();

			for (var i = 1; i < this.data.typewriter.numRows+1; i++){
				this.drawRow(i, this.data.rows[i]);				
			}

		},

		drawContainer: function(){

			//this is a quite bastard function to gauge the typewriter width based on row 1, which has the most standard keyset - all equal width; equally for the height we just take numRows and multiply it by standard row height

			var typewriterWidth = this.data.rows[1]['numberOfKeys']*this.data.typewriter.standardKeyWidth*this.data.rows[1].standardKeyWidthMultiplier + this.data.rows[1]['numberOfKeys']*this.data.typewriter.inBetweenKeysWidth;

			this.data.typewriterWidth = typewriterWidth;

			var typewriterHeight = this.data.typewriter.numRows * this.data.typewriter.standardKeyHeight + (this.data.typewriter.numRows-1) * this.data.typewriter.inBetweenRowsHeight

			$('#typewriterContainer').css('width', typewriterWidth);
			$('#typewriterContainer').css('height', typewriterHeight);
			$('#typewriterContainer').css('backgroundColor', '#f2f2f2')
			$('#typewriterContainer').css('paddingTop', this.data.typewriter.inBetweenRowsHeight)
			//$('#typeWriterContainer').css('width', )

		},

		drawRow: function ( index, rowData ){
			console.log('drawing row' + index);
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

			if (rowData[keyIndex] != undefined){
				key.style.width = this.data.typewriter.standardKeyWidth*(rowData[keyIndex].specialKeyMultiplierWidth) + 'px';
			}
			else {
				key.style.width = this.data.typewriter.standardKeyWidth*rowData.standardKeyWidthMultiplier + 'px';
			}
			
			key.className = 'typewriterKey';
			
			key.style.height = this.data.typewriter.standardKeyHeight*rowData.standardKeyHeightMultipler + 'px';
			key.style.marginRight = this.data.typewriter.inBetweenKeysWidth + 'px';
			key.style.display = 'inline-block';
			key.style.borderRadius = '4px';
			key.style.backgroundColor = '#cccccc';


			row.appendChild(key);

		}

	}

});