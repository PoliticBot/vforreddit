import Ember from 'ember';
import client from 'vforreddit/client';

export default Ember.Route.extend({
  model: function(params) {
    var sub = this.modelFor('subreddit');
    return client(sub.url + 'comments/' + params.id).get().then(function(result) {
      return {
        link: result[0].data.children[0].data,
        comments: result[1].data.children.getEach('data')
      };
    });
  }
});
