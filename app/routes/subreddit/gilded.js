import Ember from 'ember';
import ListingRouteMixin from 'vforreddit/mixins/listing-route';

export default Ember.Route.extend(ListingRouteMixin, {
  listingType: 'gilded'
});
