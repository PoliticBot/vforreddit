import Ember from 'ember';

export default Ember.Mixin.create({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.user')
});
