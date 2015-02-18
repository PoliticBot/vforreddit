import Ember from 'ember';
import client from 'vforreddit/client';

export default Ember.Controller.extend({
  needs: ['subreddit'],
  queryParams: ['access_token'],
  timeupdater: Ember.inject.service(),
  subreddit: Ember.computed.alias('controllers.subreddit.content'),
  user: Ember.computed.alias('model'),
  setup: function() {this.get('timeupdater.currentMoment');}.on('init'),
  loginUrl: function() {
    return client.getImplicitAuthUrl();
  }.property('user'),
  loginExpiry: function() {
    return this.get('loginExpires');
  }.property('loginExpires', 'timeupdater.currentMoment'),
  updateUserData: function() {
    client('/api/v1/me').get().then(function(user) {
      this.set('user', user);
    }.bind(this)).catch(function() {
      this.growl.alert([
        '<div class="message">Logged out</div>'
      ].join('\n'), {clickToDismiss: true});
      this.set('user', null);
    }.bind(this));
  }.observes('timeupdater.currentMoment')
});
