define([], function(){

	return {

		draw: function ( ){

			this.create();
			this.attachEvents();

		},

		create: function ( ) {

			//set up tunelock container
			var container = document.createElement('div');
			container.id = 'tuneLockContainer';
			container.style.opacity = '0';

			container.style.height = '120px';
			container.style.width = '100%';
			container.style.display.verticalAlign = 'middle'
			container.style.textAlign = 'center'
			container.style.marginBottom = '30px'

			document.getElementById('main').appendChild(container);

			//set up tunelock div itself
			var tuneLock = document.createElement('div');
			//tuneLock.setAttribute('type','text');
			tuneLock.id = 'tuneLock';
			tuneLock.style.textAlign = 'center'			
			tuneLock.style.float = 'left'
			tuneLock.style.height = '100%';
			//tuneLock.style.margin = '20%';

			tuneLock.style.width = '300px';
			//tuneLock.style.border = '1px solid #e6e6e6';
			//calculate margin on tunelock div
			var tuneLockLeftMargin = (screen.width - tuneLock.style.width.replace('px', ''))/2
			tuneLock.style.marginLeft = tuneLockLeftMargin + 'px';
			//tuneLock.style.padding = '30px';
			tuneLock.style.boxSizing = 'border-box';

			container.appendChild(tuneLock);

			//set up clear button container
			
			//clear button container
			var tuneLockClearButtonContainer = document.createElement('div');
			tuneLockClearButtonContainer.id = 'tuneLockClearButtonContainer';
			tuneLockClearButtonContainer.style.marginLeft = '20px'
			tuneLockClearButtonContainer.style.height = '100%'
			tuneLockClearButtonContainer.style.float = 'left';

			container.appendChild(tuneLockClearButtonContainer);

			//clear button itself

			var tuneLockClearButton = document.createElement('div');
			tuneLockClearButton.id = 'tuneLockClearButton';
			tuneLockClearButton.style.width = '80px'
			tuneLockClearButton.style.height = '40px';

			//tuneLockClearButton.style.backgroundColor = 'green'
			//tuneLockClearButton.style.marginTop = '30%';
			//tuneLockClearButton.style.padding = '25px';
			tuneLockClearButton.style.boxSizing = 'border-box';
			tuneLockClearButton.innerText = "Clear";
			tuneLockClearButton.style.paddingTop = '8px';
			tuneLockClearButtonContainer.appendChild(tuneLockClearButton);

			//set margin top - depending on parent's height
			var pHeight = tuneLockClearButton.parentNode.offsetHeight;
			tuneLockClearButton.style.marginTop = (pHeight - tuneLockClearButton.style.height.replace('px', ''))/2 + 'px';

			
			container.style.opacity = '1';
			//var tuneLockClearButton = document.createElement('div');


		},

		attachEvents: function ( ) {
			
			var that = this;

			var clearButton = document.getElementById('tuneLockClearButtonContainer');
			clearButton.addEventListener('click', function ( ){
				that.clear();
			}, false);

			$('#tuneLockClearButton').mouseover(function(){
				$(this).css('backgroundColor', '#4285f4');
			}).mouseout(function(){
				$(this).css('backgroundColor', '#a0c3ff');
			})
		},

		clear: function( ) {
			document.getElementById('tuneLock').innerText = '';
		}

	}

});