import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'sitetable',
  attributeBindings: 'id'.w(),
  rankStart: 1,
  listing: Ember.computed.map('content', function(item, index) {
    return {
      rank: index+this.get('rankStart'),
      content: item
    };
  })
});
