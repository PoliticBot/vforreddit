import Ember from 'ember';
import ListingRouteMixin from 'vforreddit/mixins/listing-route';
import client from 'vforreddit/client';

export default Ember.Route.extend(ListingRouteMixin, {
  makeApiCall: function(params) {
    return client('/hot').listing(params);
  }
});
