import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('question', params.id);
	},
	actions:{
		editQuestion(question, params){
			Object.keys(params).forEach(function(key)
			{
				if(params[key]!==undefined){
					question.set(key, params[key]);
				}
			});
			question.save();
			this.transitionTo('question', question.id);
		},
		cancelQ(question){
			this.transitionTo('question', question.id);
		}
	}
});
