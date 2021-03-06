/*
the page the loads
*/
import Ember from 'ember';

export default Ember.Route.extend({
	showDetails: true,
	actions:{
		upVote(item){	
			var votes=parseInt(item.get('upvote'));
			//console.log(item.get('upvote'));
			votes+=1;
			item.set('upvote', votes);
			item.save();
			this.set('showDetails', true);
		},
		hideUpVoteDetails(){
			this.set('showDetails', false);
		}
		,
		downVote(item){
			var votes=parseInt(item.get('downvote'));
			//console.log(item.get('upvote'));
			votes+=1;
			item.set('downvote', votes);
			item.save();
		},
		askQuestion(){
			this.transitionTo('askquestion');
		}
	}
});
