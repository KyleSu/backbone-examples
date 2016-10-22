$(function() {
  /**
   * Backbone View to encapsulate the HTML representation of a single service.
   */
  
  var ServiceView = Backbone.View.extend({
    tagName: 'li', // each service is a list item (<li></li>) in HTML

    events:{
      'click': 'toggleService'
    },

    initialize: function() {
      // this view listens to all change events on the underlying model and 
      // re-renders whenever an event fires.
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      // NOTE: this can be made much cleaner using templating services like 
      // Handlebars or Mustache

      this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
      this.$('input').prop('checked', this.model.get('checked'));

      // Returning the object is a good practice
      // that makes chaining possible
      return this;
    },

    /**
     * User defined helper function to toggle the 'checked' attribute of the 
     * underlying model.
     */
    toggleService: function() {
      this.model.toggle();
    }
  });

  window.ServiceView = ServiceView;
});
