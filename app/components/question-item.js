import Ember from 'ember';

export default Ember.Component.extend({
	showUpvoteCount: false,
	showDownVoteDetails: false,
	actions:{
		upVote(item){
			this.set('showUpvoteCount', true);	
			this.sendAction('upVote', item);
		},
		hideUpVoteDetails(){
			this.set('showUpvoteCount', false);
			this.set('showDownVoteDetails', false);
		}
		,
		downVote(item){
			this.set('showDownVoteDetails', true);	
			this.sendAction('downVote', item);
		}
	}
});
