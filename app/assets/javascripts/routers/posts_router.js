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
    this.postsListView = new Jrnl.Views.PostsIndexView({
      collection: this.collection
    });
    this.prevPostDetailView;
  },

  index: function() {
    var that = this;
    this.$sidebar.html(this.postsListView.render().$el);
    if(this.prevPostDetailView) {
      var rendered = this.prevPostDetailView.render().$el;
      rendered.fadeOut("slow", function(){
        that.$contents.html("");
      });
      this.prevPostDetailView = undefined;
    }
  },

  show: function(id) {
    var that = this;
    var postModel = this.collection.findWhere({id: parseInt(id)});
    var postDetailView = new Jrnl.Views.PostDetailView({
      model: postModel,
      collection: this.collection
    });
    
    var loadPost = function(){
      that.prevPostDetailView = postDetailView;

      that.$sidebar.html(that.postsListView.render().$el);
      var rendered = postDetailView.render().$el;
      rendered.hide().fadeIn();
      that.$contents.html(rendered);
    }
    if (this.prevPostDetailView){
      var fadeThisOut = this.prevPostDetailView.render().$el;
      fadeThisOut.fadeOut("fast", loadPost);
    }
    else{ 
      loadPost();
    }
  },

  new: function() {
    var postModel = new Jrnl.Models.Post();
    postModel.url = "/posts"
    var postFormView = new Jrnl.Views.PostFormView({
      model: postModel,
      collection: this.collection
    });
    this.$sidebar.html(this.postsListView.render().$el);
    this.$contents.html(postFormView.render().$el);
  },

  edit: function(id) {
    var postModel = this.collection.findWhere({id: parseInt(id)});
    var postFormView = new Jrnl.Views.PostFormView({
      model: postModel
    });
    this.$sidebar.html(this.postsListView.render().$el);
    this.$contents.html(postFormView.render().$el);
  }
});