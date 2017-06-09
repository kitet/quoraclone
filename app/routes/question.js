import Ember from 'ember';

export default Ember.Route.extend({
	model(obj){
		return this.store.findRecord('question', obj.question_id);
	},

	actions:{
		saveQuestion(params){
			//alert('ready to save question');
			var  newQuestion=this.store.createRecord('question',params);
			newQuestion.save();
		}
		,
		saveAns(params){
			alert('ready to save');
			var  newAns=this.store.createRecord('answer',params);
			var question=params.question;
			question.get('answers').addObject(newAns);
			newAns.save().then(function(){
				return question.save();
			});
			this.transitionTo('question',question);
		}
	}
});
