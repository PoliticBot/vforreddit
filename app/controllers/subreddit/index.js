import Ember from 'ember';
import ListingMixin from 'vforreddit/mixins/listing';

export default Ember.ArrayController.extend(ListingMixin, {
  listing: Ember.computed.alias('arrangedContent')
});
