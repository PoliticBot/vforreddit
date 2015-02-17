import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['subreddit'],
  queryParams: ['access_token'],
  subreddit: Ember.computed.alias('controllers.subreddit.content'),
  user: Ember.computed.alias('model')
});
