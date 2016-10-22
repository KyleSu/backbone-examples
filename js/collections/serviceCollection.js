$(function() {
  // TODO: define a service collection here
  
  var ServiceCollection = Backbone.Collection.extend({
    model: window.ServiceModel,

    getChecked: function() {
      return this.where({checked: true});
    }
  });

  window.ServiceCollection = ServiceCollection;

});