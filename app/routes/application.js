import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function() {
      var store=this.store;
      this.get('session').open('firebase', { 
      	provider: 'password',
      	email:'newton@gmail.com',
      	password: 'newton789'
      }).then(function(data) {
          // // console.log(data.uid);
          //const user=store.query('user', {orderBy: 'uid',uid: data.uid});
          // // console.log(user.username);
          // console.log(user);
      })
      .catch(function(error){
        var errorCode=error.code;
        if(errorCode=='auth/wrong-password'){
          console.log('Wrong password');
        }
          console.log(error);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
