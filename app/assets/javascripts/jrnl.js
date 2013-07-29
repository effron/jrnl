window.Jrnl = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, posts) {
    new Jrnl.Routers.PostsRouter($rootEl, posts);
    Backbone.history.start();
  }
};