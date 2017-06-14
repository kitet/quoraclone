import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		signIn(){
			var user={
				email:this.get('email'),
				password:this.get('password')
			};
			this.sendAction('signIn',user);
			// this.set('email')='';
			// this.set('password')='';
		},
		cancelSignIn(){
			this.sendAction('cancelSignIn');
		}
	}
});
