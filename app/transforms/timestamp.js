import DS from 'ember-data';

export default DS.DateTransform.extend({
	serialize: function(){
		if(date===Firebase.ServerValue.TIMESTAMP){
			return date;
		}
		return this._super(date);
	}
});