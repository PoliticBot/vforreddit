import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar'
    });
  }
});
