define (function(){

	return {

		control: function(){
			console.log('controlling!')
			$('.key').hover( function(){
				this.style.fill = '#bada55';
			}, function(){
				this.style.fill = this.getAttribute('colour') === 'white' ? '#ffffff' : '#000000';
			});
		}
	}

});