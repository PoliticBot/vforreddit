import Ember from 'ember';
import client from 'vforreddit/client';

export default Ember.Route.extend({
  queryParams: {
    after: {
      refreshModel: true
    }
  },
  model: function(params) {
    var sub = this.modelFor('subreddit');
    var path = sub.url + 'hot';
    return client(path).listing(params).then(function(slice) {
      return (slice.children || []).getEach('data');
    });
  }
});
