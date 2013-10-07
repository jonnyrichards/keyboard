define( function ( ) {
	 
	 return {
	 	
	 	//rows will be objects, with indexes and an array of keys, each key defining its own width height. a row may also have a default key width, which can be overwritten by the key

	 	typewriter: {

			numRows: 6,
			standardKeyWidth: 60,
			standardKeyHeight: 55,
			inBetweenKeysWidth: 20,
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

	 			}

	 		},
	 		3: {

	 			standardKeyHeightMultipler: 1,
	 			standardKeyWidthMultiplier: 0.95,
	 			numberOfKeys: 14,
	 			1: {

	 				specialKeyMultiplierWidth: 1.65 

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

	 				specialKeyMultiplierWidth: 6.75

	 			},
	 			
	 		},

			
		}



	 }


});