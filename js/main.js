$(function() {
  // TODO: link together the models, collections and services!
  var list_of_models = [
    new window.ServiceModel({title: 'web design', price: 150}),
    new window.ServiceModel({title: 'photography'}),
    new window.ServiceModel({title: 'javascript', price: 250}),
    new window.ServiceModel()
  ]
  var serviceList = new window.ServiceCollection(list_of_models);

  // magic line of code where everything will either
  // break?
  // or 
  // show up on the page!

  var whatever = new window.AppView({
    collection: serviceList
  });

  setInterval(function() {
    var service_idx = Math.floor(Math.random() * 4);
    var service = $('.service').eq(service_idx);
    service.trigger('monster');
  }, 1000);
});