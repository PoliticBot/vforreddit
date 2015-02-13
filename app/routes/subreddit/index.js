import Ember from 'ember';
import client from 'veronica/client';

export default Ember.Route.extend({
  model: function(params) {
    console.log('yo');
    var sub = this.modelFor('subreddit');
    var path = sub.url + 'hot';
    return client(path).listing().then(function(slice) {
      return (slice.children || []).getEach('data');
    });
  }
});
