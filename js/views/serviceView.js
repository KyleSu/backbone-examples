$(function() {
  // TODO: define a service view here
  
  var ServiceView = Backbone.View.extend({
    tagName: 'li',
    className: 'service',

    events: {
      'monster': 'toggleService'
    },

    intialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
      this.$('input').prop('checked', this.model.get('checked'));
      return this.$el;
    },

    toggleService: function() {
      this.model.toggle();
    }
  });

  window.ServiceView = ServiceView;
});