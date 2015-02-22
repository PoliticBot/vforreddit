import Ember from 'ember';
import IndexController from 'vforreddit/controllers/subreddit/index';

export default IndexController.extend({
  queryParams: ['q', 'sort', 'limit'],
  q: '',
  sort: 'top',
  limit: 10,
  working: false,

  nextQuery: function(key, value) {
    if (arguments.length > 1) {
      return value;
    }
    return this.get('q');
  }.property('q'),

  nextQueryDidChange: function() {
    this.set('working', true);
    Ember.run.debounce(this, 'updateQuery', 500);
  }.observes('nextQuery'),

  updateQuery: function() {
    this.set('working', false );
    if (this.get('nextQuery') !== this.get('q')) {
      this.set('q', this.get('nextQuery'));
    }
  }
});
