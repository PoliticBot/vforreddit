import Ember from 'ember';
import client from 'vforreddit/client';


export default Ember.Route.extend({
  redirect: function() {
    window.location = client.getImplicitAuthUrl();
  }
});
