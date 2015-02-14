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

  listingType: 'hot',

  makeApiCall: function(params) {
    var sub = this.modelFor('subreddit');
    var path = sub.url + this.get('listingType');
    return client(path).listing(params);
  },

  normalizeResponse: function(response) {
    return (response.children || []).getEach('data');
  },

  renderTemplate: function() {
    this.render('subreddit/index', {
      controller: this.controller
    });
  }
});
