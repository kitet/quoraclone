import Ember from 'ember';

export default Ember.Controller.extend({
	showModal:false,
	actions:{
		submit(){
			alert('submit');
		},
		open(){
			alert('open');
		},
		close(){
			//alert('close');
			this.set('showModal', false);
		},
		delete(){
			alert('delete');
		},
		save(){
			alert('save');
		},
		showModal(){
			this.set('showModal', true);
		}
	}
});
