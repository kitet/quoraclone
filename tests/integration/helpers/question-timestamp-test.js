
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('question-timestamp', 'helper:question-timestamp', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{question-timestamp inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

