import Ember from 'ember';
import IndexController from 'vforreddit/controllers/subreddit/index';

export default IndexController.extend({
  queryParams: ['query'],
  query: '',
  working: false,

  nextQuery: function(key, value) {
    if (arguments.length > 1) {
      return value;
    }
    return this.get('query');
  }.property('query'),

  nextQueryDidChange: function() {
    this.set('working', true);
    Ember.run.debounce(this, 'updateQuery', 500);
  }.observes('nextQuery'),

  updateQuery: function() {
    this.set('working', false );
    if (this.get('nextQuery') !== this.get('query')) {
      this.set('query', this.get('nextQuery'));
    }
  }
});
