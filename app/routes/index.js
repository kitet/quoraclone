import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('question');
	},
	actions:{
		saveQuestion(params){
			//alert('ready to save question');
			var  newQuestion=this.store.createRecord('question',params);
			newQuestion.save();
		}
	}
});
