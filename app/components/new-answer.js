import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		saveA(){
			var params={
				author:this.get('aauthor'),
				content: this.get('acontent'),
				question: this.get('question')
			}

			this.sendAction('saveAns',params);
		}
	}
});
