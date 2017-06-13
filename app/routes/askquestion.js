import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	actions:{
		signIn: function() {
		      var store=this.store;
		      var ses=this.get('session');
		      ses.open('firebase', { 
		      	provider: 'password',
		      	email:'newton@gmail.com',
		      	password: 'newton789'
		      }).then(function(data) {
		      		//show sign in success message
		      })
		      .catch(function(error){
		        var errorCode=error.code;
		        if(errorCode=='auth/wrong-password'){
		          console.log('Wrong password');
		        }
		          console.log(error);
		      });
    		},
    	cancelQuestion(){
    		  this.transitionTo('index');
    		},
    	saveQuestion(params){
			//alert('ready to save question');
			params.upvote=0;
			params.downvote=0;		
			var  newQuestion=this.store.createRecord('question',params);
			newQuestion.save();
			this.transitionTo('index');
			}
		}
});
