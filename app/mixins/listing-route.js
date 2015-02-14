import Ember from 'ember';
import client from 'vforreddit/client';

export default Ember.Mixin.create({
  queryParams: {
    after: {
      refreshModel: true
    },
    before: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.makeApiCall(params).then(this.normalizeResponse.bind(this));
  },

  makeApiCall: function(params) {
    var sub = this.modelFor('subreddit');
    var path = sub.url + 'hot';
    return client(path).listing(params);
  },

  normalizeResponse: function(response) {
    return (response.children || []).getEach('data');
  }
});
