//general 'publisher subscriber' module; when used in conjunction with 'extend', will turn any object into one that can publish and subscribe to events;

define([], function(){

	return {

		subscribers: [],
		publisher: '',

		trigger: function(eventName) {
			for (var i = 0; i < this.subscribers.length; i++){
				this.subscribers[i].on(eventName);
			}
		},

		on: function(eventName){
			if (this.hasOwnProperty(eventName)){
				return this[eventName]();
			}
		}
	}

});
