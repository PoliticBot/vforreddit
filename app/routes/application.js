/* globals moment,window */
import Ember from 'ember';
import client from 'vforreddit/client';

function getParamByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.hash.replace(/^#/, '?'));
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export default Ember.Route.extend({
  model: function() {
    var code = getParamByName('access_token');
    console.log('code', code);
    if (code) {
      this.controllerFor('application').set(
        'loginExpires',
        moment().add(parseInt(getParamByName('expires_in')), 'second')
      );

      window.location.hash = '';
      return client.auth(code).then(function() {
        console.log('authed');
        return client('/api/v1/me').get();
      }).then(function(res) {
        console.log('got user', res);
        this.growl.info([
          '<h1>Logged in as',res.name,'</h1>'
        ].join('\n'));
        return res;
      }.bind(this));
    }
    this.growl.info([
      '<h1>Welcome to <em>V for reddit</em></h1><div class="message">',
      '<p>This is still an early and incomplete alpha!</p></div>'
    ].join('\n'), {
      closeIn: 6000
    });
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
      client.deauth().then(function() {
        this.controllerFor('application').set('user', null);
      }.bind(this)).catch(function(e) {
        console.error(e.stack || e);
        alert("Logout is broken due to a Snoocore bug, but if you refresh I forget your token.  So I'll do that now");
        window.location.reload();
      });
    },
    fixedExpando: function(post) {
      this.controller.set('fixedExpando', post);
    },
    closeFixedExpando: function() {
      this.controller.set('fixedExpando', null);
    }
  }
});
