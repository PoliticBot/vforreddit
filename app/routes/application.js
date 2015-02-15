import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar'
    });
  },

  actions: {
    fixedExpando: function(post) {
      this.controller.set('fixedExpando', post);
    },
    closeFixedExpando: function() {
      this.controller.set('fixedExpando', null);
    }
  }
});
