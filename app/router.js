/* globals window */
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('subreddit', {path: '/r/:subreddit'}, function() {
    this.route('link', {path: '/comments/:id/:slug'});
    this.route('new');
    this.route('rising');
    this.route('controversial');
    this.route('top');
    this.route('gilded');
  });
});

window.onclick = function(e) {
  e = e || window.event;
  var t = e.target || e.srcElement;
  t = Ember.$(t).closest('a').get(0);
  if (t && t.href && !Ember.$(t).hasClass('dontintercept') && !Ember.$(t).hasClass('ember-view')){
    var parts = t.href.split(window.location.origin, 2);
    if (parts.length > 1) {
      e.preventDefault();
      try {
        Router.router.transitionTo(parts[1]);
      } catch(err) {
        console.error(err.stack || err);
      }
      return false;
    }
  }
};

export default Router;
