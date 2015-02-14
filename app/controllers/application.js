import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['subreddit'],
  subreddit: Ember.computed.alias('controllers.subreddit.content')
});
