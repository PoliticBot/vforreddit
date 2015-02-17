import Ember from 'ember';
import client from 'vforreddit/client';

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.hash.replace(/^#/, '?'));
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export default Ember.Route.extend({
  model: function() {
    var code = getParameterByName('access_token');
    console.log('code', code);
    if (code) {
      window.location.hash = '';
      return client.auth(code).then(function() {
        console.log('authed');
        return client('/api/v1/me').get();
      }).then(function(res) {
        console.log('got user', res);
        return res;
      }.bind(this));
    }
  },

  renderTemplate: function() {
    this.render();
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar'
    });
  },

  actions: {
    logout: function() {
      window.locaiton.reload();
    },
    fixedExpando: function(post) {
      this.controller.set('fixedExpando', post);
    },
    closeFixedExpando: function() {
      this.controller.set('fixedExpando', null);
    }
  }
});
