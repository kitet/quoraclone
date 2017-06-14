import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        signIn(userdetails) {
            var self = this;
            this.get('session').open('firebase', {
                    provider: 'password',
                    email: userdetails.email,
                    password: userdetails.password
                }).then(function() {
                    self.transitionTo('index');
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    if (errorCode == 'auth/wrong-password') {
                        alert('Wrong password');
                    }
                    alert(error);
                });
        },
        cancelSignIn() {
            this.transitionTo('index');
        }
    }
});