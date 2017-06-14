import Ember from 'ember';

export function questionTitle(item_content/*, hash*/) {
	var newtitle="Question: "+item_content;
  return newtitle;
}

export default Ember.Helper.helper(questionTitle);
