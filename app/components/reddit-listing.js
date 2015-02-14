import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'sitetable',
  attributeBindings: 'id'.w(),
  rankStart: 0,
  listing: Ember.computed.map('content', function(item, index) {
    return {
      rank: index+this.get('rankStart') + 1,
      content: item
    };
  })
});
