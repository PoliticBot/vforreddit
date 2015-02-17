/* globals moment */
import Ember from 'ember';
import client from 'vforreddit/client';

export default Ember.Controller.extend({
  needs: ['subreddit'],
  queryParams: ['access_token'],
  subreddit: Ember.computed.alias('controllers.subreddit.content'),
  user: Ember.computed.alias('model'),
  currentMoment: function() {return moment();}.property(),
  loginExpiry: function() {
    return this.get('loginExpires');
  }.property('loginExpires', 'currentMoment'),
  poll: function() {
    this.notifyPropertyChange('currentMoment');
    repeat = repeat.bind(this);
    if (!this.get('user')) {return repeat();}

    return client('/api/v1/me').get().then(function(user) {
      this.set('user', user);
    }.bind(this)).then(repeat);

    function repeat() {if (!Ember.testing) {Ember.run.later(this, 'poll', 30*1000);}}
  }.on('init')
});
