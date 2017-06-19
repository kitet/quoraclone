import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        signIn: function() {
            this.transitionTo('signin');
        },
        cancelQuestion() {
            this.transitionTo('index');
        },
        saveQuestion(params) {
            //alert('ready to save question');
            debugger;
            params.upvote = 0;
            params.downvote = 0;
            var myUser=params.user;
            var newQuestion = this.store.createRecord('question', params);
            try{
                myUser.get('questions').addObject(newQuestion);
            }
            catch(e){
                console.log(e);
            }
            newQuestion.save().then(function(){
                    return myUser.save();
            });
            //console.log(email);
           
            // newQuestion.save();
            this.transitionTo('index');
        }
    }
});