/*
handle question details view
handles question edit through redirect to editquestion route
handles new answer compose and saving through to the firebase
*/
import Ember from 'ember';

export default Ember.Route.extend({
    showButton: false,
    session: Ember.inject.service(),
    model(obj) {
        return Ember.RSVP.hash({
            question: this.store.findRecord('question', obj.question_id),
        });
    },
    actions: {
        saveAns(params) {
            var newAns = this.store.createRecord('answer', params);
            var question = params.question;
            question.get('answers').addObject(newAns);
            newAns.save().then(function() {
                return question.save();
            });
            this.transitionTo('question');
        },
        editQuestion(question) {
            var self = this;
            if (this.get('session.isAuthenticated')) {
                var emailinsession = this.get('session.currentUser.email');
                return question.get('user').then((userobj) => {
                    var x = userobj.get('ema');
                    if (emailinsession == x) {
                        //console.log(true);
                        self.transitionTo('editquestion', question.id);
                    } else {
                        alert('Trying to update question posted by someone else not allowed');
                        return false;
                    }
                });
            } else {
                alert('Log in to update');
            }
        }
    }
});