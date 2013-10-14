define( [], function( ){

	return {

		extend: function( obj1, obj2 ) {

			//extends obj1 with the properties and functions of obj2

			for (var key in obj2) {
				obj1[key] = obj2[key];
			}

			return obj1

		}

	}


});