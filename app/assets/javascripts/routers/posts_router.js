Jrnl.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "posts/new" : "new",
    "posts/:id" : "show",
    "posts/:id/edit" : "edit"
  },

  initialize: function($sidebar, $contents, posts) {
    this.$sidebar = $sidebar;
    this.$contents = $contents;
    this.collection = new Jrnl.Collections.Posts(posts);
  },

  index: function() {
    var postsListView = new Jrnl.Views.PostsIndexView({
      collection: this.collection
    });
    this.$sidebar.html(postsListView.render().$el);
    this.$contents.html("");
  },

  show: function(id) {
    var postModel = this.collection.findWhere({id: parseInt(id)});
    var postDetailView = new Jrnl.Views.PostDetailView({
      model: postModel,
      collection: this.collection
    });
    this.$contents.html(postDetailView.render().$el);
  },

  new: function() {
    var postModel = new Jrnl.Models.Post();
    postModel.url = "/posts"
    var postFormView = new Jrnl.Views.PostFormView({
      model: postModel,
      collection: this.collection
    });
    this.$contents.html(postFormView.render().$el);
  },

  edit: function(id) {
    var postModel = this.collection.findWhere({id: parseInt(id)});
    var postFormView = new Jrnl.Views.PostFormView({
      model: postModel
    });
    this.$contents.html(postFormView.render().$el);
  }
});