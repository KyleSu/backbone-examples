$(function() {
  /**
   * This is a Backbone model to represent individual Services
   */
  
  var Service = Backbone.Model.extend({

    /**
     * Runs once after attributes have been assigned, but before any other user 
     * actions can take place on this model.
     */
    initialize: function() {
      console.log('Creating a new service for ' + this.get('title'));
    },

    defaults:{
      title: 'My service',
      price: 100,
      checked: false
    },

    // User defined helper function for checking/unchecking a service
    toggle: function() {
      this.set('checked', !this.get('checked'));
    }
  });

  window.Service = Service;
});
