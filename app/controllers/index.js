import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		filterByCategory(params){
			if(params!==''){
				return this.store.query('question', {orderBy: 'category', equalTo: params});
			}else{
				return this.store.query('question', {orderBy: 'timestamp'}).then(function(ourarray){
					return ourarray.toArray().reverse();
				});
				//return this.store.query('question', {limitToFirst: 20});
			}
		}
	}
});
