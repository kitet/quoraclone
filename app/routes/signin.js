import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		signIn(userdetails){
			var store=this.store;
	      		this.get('session').open('firebase', { 
		      	provider: 'password',
		      	email:userdetails.email,
		      	password: userdetails.password
      		}).then(function(data) {
          		this.transitionToRoute('index');
      		})
      		.catch(function(error){
	        var errorCode=error.code;
	        if(errorCode=='auth/wrong-password'){
	          alert('Wrong password');
	        }
	          alert(error);
	      	});
		},
		cancelSignIn(){
			this.transitionTo('index');
		}
	}
});
