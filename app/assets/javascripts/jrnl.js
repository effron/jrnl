window.Jrnl = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, posts) {
    var postCollection = new Jrnl.Collections.Posts(posts)
    var postsListView = new Jrnl.Views.PostsIndexView({
      collection: postCollection
    });
    $rootEl.html(postsListView.render().$el)
    console.log('Hello from Backbone!');
  }
};