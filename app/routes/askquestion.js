import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    actions: {
        signIn: function() {
            this.transitionTo('signin');
        },
        cancelQuestion() {
            this.transitionTo('index');
        },
        saveQuestion(params) {
            //alert('ready to save question');
            params.upvote = 0;
            params.downvote = 0;
            var newQuestion = this.store.createRecord('question', params);
            newQuestion.save();
            this.transitionTo('index');
        }
    }
});