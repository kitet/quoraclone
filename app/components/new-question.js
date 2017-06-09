import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		saveQ(){
			var params={
				author: this.get('author'),
				category: this.get('category'),
				content: this.get('content'),
				note: this.get('note'),
				tag: this.get('tag'),
			}
			this.sendAction('saveQuestion', params);
		}
	}
});
