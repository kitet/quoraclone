import Ember from 'ember';

export default Ember.Route.extend({
	showDetails: true,
	model(){
		return this.store.findAll('question');
	},
	actions:{
		saveQuestion(params){
			//alert('ready to save question');
			params.upvote=0;
			params.downvote=0;		
			var  newQuestion=this.store.createRecord('question',params);
			newQuestion.save();
		},

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
		}
	}
});
