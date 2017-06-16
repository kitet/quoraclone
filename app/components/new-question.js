import Ember from 'ember';

export default Ember.Component.extend({
    showF: false,
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
            this.set('showF', false);
            this.set('author', "");
            this.set('category', "");
            this.set('content', "");
            this.set('note', "");
            this.set('tag', "");
        },
        showForm() {
            //var checkUser=this.get('session');
            //console.log('skgj');
            //this.set('showF',true);
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