$(function() {
  // TODO: create a main application view to encapsulate services
  
  var AppView = Backbone.View.extend({

    // Base the view on an existing element
    el: $('#main'),

    initialize: function() {

      // Cache these selectors
      this.total = $('#total span');
      this.list = $('#services');

      // Listen for the change event on the collection.
      // This is equivalent to listening on every one of the 
      // service objects in the collection.
      this.listenTo(this.collection, 'change', this.render);

      // Create views for every one of the services in the
      // collection and add them to the page

      this.collection.each(function(service){

        var view = new window.ServiceView({ model: service });
        this.list.append(view.render().el);

      }, this); // "this" is the context in the callback
    },

    render: function(){

      // Calculate the total order amount by agregating
      // the prices of only the checked elements

      var total = 0;

      _.each(this.collection.getChecked(), function(elem){
        total += elem.get('price');
      });

      // Update the total price
      this.total.text('$' + total);
    }

  });

  window.AppView = AppView;
});