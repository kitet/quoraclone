import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.attr(),
	content: DS.attr(),
	category: DS.attr(),
	note:DS.attr(),
	tag:DS.attr(),
	upvote:DS.attr(),
	downvote: DS.attr(),
	timestamp:DS.attr('number'),
	answers: DS.hasMany('answer',{async: true})
	// createdAt: DS.attr('timestamp')
});
