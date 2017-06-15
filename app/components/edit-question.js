import Ember from 'ember';

export default Ember.Component.extend({
	showF: false,
	session: Ember.inject.service(),
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
		cancelQ(question){
			this.sendAction('cancelQ', question);
		}
	}
});
