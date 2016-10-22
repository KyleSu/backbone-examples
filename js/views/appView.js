$(function() {
  /**
   * App-level Backbone View to encapsulate the outer view of the application.
   */
  
  var AppView = Backbone.View.extend({

    // The element for this view already exists in HTML, so we reference it here
    el: $('#main'),

    initialize: function() {

      // Cache these selectors
      this.total = $('#total span');
      this.list = $('#services');

      // Listen for the change event on the underlying collection.
      // This is equivalent to listening on every one of the 
      // service objects in the collection.
      this.listenTo(this.collection, 'change', this.render);

      // Create views for every one of the services in the
      // collection and add them to the page

      this.collection.each(function(service) {
        // Each ServiceView is instantiated with a single ServiceModel
        var view = new window.ServiceView({ model: service });

        // Render the newly-minted view, and append its virtual element to the 
        // actual page DOM using jQuery.
        this.list.append(view.render().el);

      }, this); // "this" is the context in the callback
    },

    render: function() {

      // Calculate the total order amount by agregating
      // the prices of only the checked elements

      var total = 0;
      var checkedServices = this.collection.getChecked();

      checkedServices.forEach(function(checkedService) {
        total += checkedService.get('price');
      });

      // Update the total price in the DOM.
      this.total.text('$' + total);
    }

  });

  window.AppView = AppView;
});
