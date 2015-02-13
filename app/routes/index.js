import Ember from 'ember';
import client from 'vforreddit/client';

export default Ember.Route.extend({
  model: function() {
    return client('/hot').listing().then(function(slice) {
      return (slice.children || []).getEach('data');
    });
  }
});
