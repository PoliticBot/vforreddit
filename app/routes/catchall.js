import Ember from 'ember';
import ListingRouteMixin from 'vforreddit/mixins/listing-route';
import client from 'vforreddit/client';

export default Ember.Route.extend(ListingRouteMixin, {
  makeApiCall: function(params) {
    var path = params.path || '';
    if (path[path.length - 1] === '/') {
      path = path.slice(0, path.length - 1);
    }
    if (!path) {path = 'hot';}
    return client('/' + path).listing(params);
  }
});
