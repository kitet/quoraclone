import Ember from 'ember';

export default Ember.Component.extend({
	showForm:false,
	actions:{
		saveA(){
			var params={
				editor:this.get('editor'),
				jibu: this.get('jibu'),
				question: this.get('question')
			}

			this.sendAction('saveAns',params);
			this.set('showForm', false);
		},
		showNewAnswerButton(){
			this.set('showForm', true);
		}
	}
});
