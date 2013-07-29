window.Jrnl = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar, $contents, posts) {
    new Jrnl.Routers.PostsRouter($sidebar, $contents, posts);
    Backbone.history.start();
  }
};