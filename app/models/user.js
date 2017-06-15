import DS from 'ember-data';

export default DS.Model.extend({
	uid:DS.attr(),
	ema: DS.attr(),
	username: DS.attr(),
	questions: DS.hasMany('question',{async:true})
});
