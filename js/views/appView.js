$(function() {
  // TODO: create a main application view to encapsulate services
  var AppView = Backbone.View.extend({
    el: $('#main'), 

    initialize: function() {
      this.listenTo(this.collection, 'change', this.render);

      this.collection.each(function(service) {
        var view = new window.ServiceView({ model: service });
        $('#services').append(view.render());

      });
    },

    render: function() {
      var checked_models = this.collection.getChecked();
      var total = 0;

      checked_models.forEach(function(checked_model) {
        total += checked_model.get('price');
      });

      $('#total').text('$' + total);
    },

  });

  window.AppView = AppView;
});