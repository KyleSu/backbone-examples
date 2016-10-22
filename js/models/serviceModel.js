$(function() {
  // TODO: define a service model here
  
  var ServiceModel = Backbone.Model.extend({
    initialize: function() {
      console.log('Made a new service, with title: ' + this.get('title'));
    },

    defaults: {
      'title': 'New service',
      'price': 100,
      'checked': false,
    },

    toggle: function() {
      this.set('checked', !this.get('checked'));
    }
  });

  window.ServiceModel = ServiceModel;

});