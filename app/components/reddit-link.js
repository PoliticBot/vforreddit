import Ember from 'ember';

export default Ember.Component.extend({
  expand: false,
  expandoClass: 'selftext',
  tagName: 'div',
  classNames: 'thing'.w(),
  classNameBindings: 'type even odd'.w(),

  expandable: function() {
    if (this.get('imageUrl')) {
      return true;
    }
    if (this.get('selftext')) {
      return true;
    }
    return false;
  }.property('imageUrl'),

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

  isDirectImageUrl: function() {
    return this.get('url').match(/\.(jpg|jpeg|png|gif)$/i);
  }.property('url'),

  imageUrl: function() {
    if (this.get('isDirectImageUrl')) {
      return this.get('url');
    }
  }.property('isDirectImageUrl', 'url'),

  type: function() {
    if (this.get('content.title')) {
      return 'link';
    } else {
      return 'comment';
    }
  }.property('content.title'),

  actions: {
    toggleExpand: function() {
      console.log('toggleExpand');
      this.toggleProperty('expand');
    }
  }
});
