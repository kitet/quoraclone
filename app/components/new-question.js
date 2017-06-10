import Ember from 'ember';

export default Ember.Component.extend({
	showF:false,
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
			this.set('showF', false);
			this.set('author',"");
			this.set('category',"");
			this.set('content',"");
			this.set('note',"");
			this.set('tag',"");
		},
		showForm(){
			this.set('showF',true);
		},
		cancel(){
			this.set('showF',false);
		}

	}
});
