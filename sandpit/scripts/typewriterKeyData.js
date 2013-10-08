define( function ( ) {
	 
	 return {
	 	
	 	//rows will be objects, with indexes and an array of keys, each key defining its own width height. a row may also have a default key width, which can be overwritten by the key

	 	typewriter: {

			numRows: 6,
			standardKeyWidth: 60,
			standardKeyHeight: 55,
			inBetweenKeysWidth: 18,
			inBetweenRowsHeight: 14

		},

		rows: {

	 		1: {

	 			standardKeyHeightMultipler: 0.7,
	 			standardKeyWidthMultiplier: 1,
	 			numberOfKeys: 14

	 		},
	 		2: {

	 			standardKeyHeightMultipler: 1,
	 			standardKeyWidthMultiplier: 0.95,
	 			numberOfKeys: 14,
	 			14: {

	 				specialKeyMultiplierWidth: 1.65 

	 			},
	 			3: {
	 				keyName: '2',
	 				keyCode: '50'
	 			},
	 			4: {
	 				keyName: '3',
	 				keyCode: '51'
	 			},
	 			6: {
	 				keyName: '5',
	 				keyCode: '53'
	 			},
	 			7: {
	 				keyName: '6',
	 				keyCode: '54'
	 			},
	 			8: {
	 				keyName: '7',
	 				keyCode: '55'
	 			},
	 			10: {
	 				keyName: '9',
	 				keyCode: '57'
	 			},
	 			11: {
	 				keyName: '0',
	 				keyCode: '48'
	 			},


	 		},
	 		3: {

	 			standardKeyHeightMultipler: 1,
	 			standardKeyWidthMultiplier: 0.95,
	 			numberOfKeys: 14,
	 			1: {

	 				specialKeyMultiplierWidth: 1.65 

	 			},
	 			2: {
	 				keyName: 'Q',
	 				keyCode: '81'
	 			},
	 			3: {
	 				keyName: 'W',
	 				keyCode: '87'
	 			},
	 			4: {
	 				keyName: 'E',
	 				keyCode: '69'
	 			},
	 			5: {
	 				keyName: 'R',
	 				keyCode: '82'
	 			},
	 			6: {
	 				keyName: 'T',
	 				keyCode: '84'
	 			},
	 			7: {
	 				keyName: 'Y',
	 				keyCode: '89'
	 			},
	 			8: {
	 				keyName: 'U',
	 				keyCode: '85'
	 			},
	 			9: {
	 				keyName: 'I',
	 				keyCode: '73'
	 			},
	 			10: {
	 				keyName: 'O',
	 				keyCode: '79'
	 			},
	 			11: {
	 				keyName: 'P',
	 				keyCode: '80'
	 			}
	 		},

	 		4: {

	 			standardKeyHeightMultipler: 1,
	 			standardKeyWidthMultiplier: 0.95,
	 			numberOfKeys: 13,
	 			1: {

	 				specialKeyMultiplierWidth: 1.93

	 			},
	 			13: {

	 				specialKeyMultiplierWidth: 1.93

	 			}


	 		},
	 		5: {

	 			standardKeyHeightMultipler: 1,
	 			standardKeyWidthMultiplier: 0.95,
	 			numberOfKeys: 12,
	 			1: {

	 				specialKeyMultiplierWidth: 2.57

	 			},
	 			12: {

	 				specialKeyMultiplierWidth: 2.57

	 			}


	 		},
	 		6: {

	 			standardKeyHeightMultipler: 1,
	 			standardKeyWidthMultiplier: 0.95,
	 			numberOfKeys: 10,
	 			5: {

	 				specialKeyMultiplierWidth: 6.6

	 			},
	 			
	 		},

			
		}



	 }


});