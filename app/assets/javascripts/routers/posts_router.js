Jrnl.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "posts/new" : "new",
    "posts/:id" : "show",
    "posts/:id/edit" : "edit"
  },

  initialize: function($rootEl, posts) {
    this.$rootEl = $rootEl;
    this.collection = new Jrnl.Collections.Posts(posts);
  },

  index: function() {
    var postsListView = new Jrnl.Views.PostsIndexView({
      collection: this.collection
    });
    this.$rootEl.html(postsListView.render().$el);
  },

  show: function(id) {
    var postModel = this.collection.findWhere({id: parseInt(id)});
    var postDetailView = new Jrnl.Views.PostDetailView({
      model: postModel
    });
    this.$rootEl.html(postDetailView.render().$el);
  },

  new: function() {
    var postModel = new Jrnl.Models.Post();
    postModel.url = "/posts"
    var postFormView = new Jrnl.Views.PostFormView({
      model: postModel,
      collection: this.collection
    });
    this.$rootEl.html(postFormView.render().$el);
  },

  edit: function(id) {
    var postModel = this.collection.findWhere({id: parseInt(id)});
    var postFormView = new Jrnl.Views.PostFormView({
      model: postModel
    });
    this.$rootEl.html(postFormView.render().$el);
  }
});