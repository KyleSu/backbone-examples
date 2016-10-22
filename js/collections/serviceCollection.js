$(function() {
  /**
   * This Backbone collection keeps track of Services (models).
  */
  var ServiceList = Backbone.Collection.extend({

    model: window.Service,

    /**
     * User defined helper function to return all models with the attribute 
     * 'checked' = true
     * @return {[Models <Iterable>]} Backbone iterable list of Models
     */
    getChecked: function() {
      return this.where({checked:true});
    }
  });

  window.ServiceList = ServiceList;
  
});
