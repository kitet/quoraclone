import Ember from 'ember';

export default Ember.Component.extend({
	showButton:false;
	afterModel(){
		this.set('showButton', true);
	}
});
