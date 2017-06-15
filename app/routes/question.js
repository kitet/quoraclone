import Ember from 'ember';

export default Ember.Route.extend({
	model(obj){
		return Ember.RSVP.hash({
			question: this.store.findRecord('question', obj.question_id),
		});
	},

	actions:{
		saveAns(params){
			var  newAns=this.store.createRecord('answer',params);
			var question=params.question;
			question.get('answers').addObject(newAns);
			newAns.save().then(function(){
				return question.save();
			});
			this.transitionTo('question');
		},
		editQuestion(question){
			this.transitionTo('editquestion', question.id);
		}
	}
});
