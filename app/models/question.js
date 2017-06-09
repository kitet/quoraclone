import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.attr(),
	content: DS.attr(),
	category: DS.attr(),
	note:DS.attr(),
	tag:DS.attr(),
	answers: DS.hasMany('answer',{async: true})
});
