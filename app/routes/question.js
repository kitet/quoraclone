/*
handle question details view
handles question edit through redirect to editquestion route
handles new answer compose and saving through to the firebase
*/
import Ember from 'ember';

export default Ember.Route.extend({
	ownsQuestion: false,
	session: Ember.inject.service(),
	model(obj){
		return Ember.RSVP.hash({
			question: this.store.findRecord('question', obj.question_id),
		});
	},
	afterModel(){
		
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
			// this.store.findRecord('user','-KmfVScJw-1qJM8DF3DZ').then(function(user){
			// 	console.log(user);
			// });
			var emailinsession=this.get('session.currentUser.email');
			var emailassoc=question.get('user').then((user)=>{
				return user.get('ema');
			});
			if(emailinsession=emailassoc){
				console.log('can edit');
			}
			else{

			}
			//this.transitionTo('editquestion', question.id);
		}
	}
});
