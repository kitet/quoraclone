/*
handle question details view
handles question edit through redirect to editquestion route
handles new answer compose and saving through to the firebase
*/
import Ember from 'ember';

export default Ember.Route.extend({
    showButton: false,
    showEditButton: false,
    session: Ember.inject.service(),
    model(obj) {
        return Ember.RSVP.hash({
            question: this.store.findRecord('question', obj.question_id),
        });
    },
    afterModel(model) {
        //console.log(model.question);
        var self = this;
        try {
            if (this.get('session.isAuthenticated')) {
                var emailinsession = this.get('session.currentUser.email');
                return model.question.get('user').then((userobj) => {
                    var x = userobj.get('ema');
                    if (emailinsession == x) {
                        console.log('show button');
                        //self.transitionTo('editquestion', question.id);
                        self.set('showEditButton', true);
                        console.log(self.get('showEditButton'));
                    } else {
                        console.log('dont show button');
                        //alert('Trying to update question posted by someone else not allowed');
                        //return false;
                    }
                });
            } else {
                //alert('Log in to update');
            }
        } catch (e) {
            console.log(e);
        }
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
            //go edit question
            this.transitionTo('editquestion', question.id);
        }
    }
});