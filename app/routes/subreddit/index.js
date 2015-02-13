import Ember from 'ember';
import client from 'vforreddit/client';

export default Ember.Route.extend({
  model: function() {
    var sub = this.modelFor('subreddit');
    var path = sub.url + 'hot';
    return client(path).listing().then(function(slice) {
      return (slice.children || []).getEach('data');
    });
  }
});
