/*
  handle sign up form submission 
*/

import Ember from 'ember';

export default Ember.Route.extend({
	firebaseApp: Ember.inject.service(),
	actions:{
	signUp(userobj){
        const auth = this.get('firebaseApp').auth();
        auth.createUserWithEmailAndPassword(userobj.email, userobj.password).then((userResponse) => {
        //to save to our database users
        const user = this.store.createRecord('user', {
          uid:userResponse.uid,
          email: userResponse.email,
          username:userobj.displayName
        });
        return user.save();
        }).catch(function(error){
        	var erroCode=error.code;
        	var errorMessage=error.message;
        	if(erroCode=='auth/weak-password'){
        		console.log('password is too weak');
        	}
        	else{
        		console.log(error);
        	}
        });
    //sign in the just created user

    	this.transitionTo('index');
    },
    cancelSignUp(){
      this.transitionTo('index');
    }
	}
});
