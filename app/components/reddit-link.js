import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'thing'.w(),
  classNameBindings: 'type even odd'.w(),

  even: function() {
    return this.get('rank') % 2 === 0;
  }.property('rank'),

  odd: Ember.computed.not('even'),

  unknownProperty: function (key) {
    var content = Ember.get(this, 'content');
    if (content) {
      return Ember.get(content, key);
    }
  },

  type: function() {
    if (this.get('content.title')) {
      return 'link';
    } else {
      return 'comment';
    }
  }.property('content.title')
});
