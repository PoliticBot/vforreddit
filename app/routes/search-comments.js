import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },

  model: function(params) {
    var url = 'http://api.fizzlefoo.com/search/comments?q=';
    if (!params.q) {return [];}
    url += encodeURIComponent(params.q);
    url += '&sort=' + encodeURIComponent(params.sort);
    url += '&limit=' + encodeURIComponent(params.limit);
    return Ember.$.ajax({
      url: url,
      dataType: 'json'
    }).then(function(res) {
      return res.data;
    });
  }
});
