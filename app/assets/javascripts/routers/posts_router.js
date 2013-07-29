Jrnl.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "posts/:id": "show"
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
    console.log(postModel);
    this.$rootEl.html(postDetailView.render().$el);
  }
});