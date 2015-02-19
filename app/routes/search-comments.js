import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model: function(params) {
    console.log('model', params);
    var url = 'http://earth.fizzlefoo.com/api/api.php?sort=score&q=';
    url += encodeURIComponent(params.query);
    if (!params.query) {return [];}
    return Ember.$.ajax({
      url: url,
      dataType: 'json'
    }).then(function(res) {
      return res.data;
    });
  }
})
