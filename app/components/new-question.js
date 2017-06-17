import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    actions: {
        saveQ() {
            var params = {
                author: this.get('author'),
                category: this.get('category'),
                content: this.get('content'),
                note: this.get('note'),
                tag: this.get('tag'),
                timestamp: new Date().getTime(),
                user: this.get('user')
            }
            this.sendAction('saveQuestion', params);
            this.set('author', "");
            this.set('category', "");
            this.set('content', "");
            this.set('note', "");
            this.set('tag', "");
        },
        showForm() {
            this.sendAction('askQuestion');
        },
        cancel() {
            this.sendAction('cancelQuestion');
        },
        signIn() {
            //redirect to sign in page
            this.sendAction('signIn', );
        }

    }
});