define (function(){

	return {

		fill: function(keyCode, app){

			var key = app.data.keyCodes[keyCode];
			var el = $('#' + key)[0];
			el.style.fill = '#a0c3ff'

		},

		unfill: function(keyCode) {
			var key = app.data.keyCodes[keyCode];
			var el = $('#' + key)[0];
			el.style.fill = el.getAttribute('colour') === 'white' ? '#ffffff' : '#000000';
		}
	}

});