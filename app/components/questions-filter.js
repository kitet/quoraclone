import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['questions-filter'],
	value:'',

	init(){
		this._super(...arguments);
		this.get('filter')('').then((filteredResults)=>this.set('filteredResults', filteredResults));
	},
	actions:{
		handleFilterData(){
			//code to filter my data here
			let filterInputValue=this.get('value');
			let filterAction=this.get('filter');
			filterAction(filterInputValue).then((filterResults)=>this.set('filteredResults',filterResults));
		}
	}
});
