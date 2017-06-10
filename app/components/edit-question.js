import Ember from 'ember';

export default Ember.Component.extend({

	showF: false,
	actions:{
		showForm(){
			this.set('showF', true);
		},
		saveQuestion(question){
			var params={
				author: this.get('author'),
				category: this.get('category'),
				content: this.get('content'),
				note: this.get('note'),
				tag: this.get('tag'),
			}
			this.sendAction('editQuestion',question, params);
			this.set('showF', false);
			this.set('author',"");
			this.set('category',"");
			this.set('content',"");
			this.set('note',"");
			this.set('tag',"");
		}
		,
		cancelQ(){
			this.set('showF', false);
		}
	}
});
