Jrnl.Views.PostDetailView = Backbone.View.extend({
  template: JST["posts/show"],
  events: {
    "click button.delete-post" : "deletePost",
    "click button.edit-post" : "editPost"
  },
  render: function() {
    var that = this;
    this.$el.html(that.template({post: that.model}));
    return this;
  },

  editPost: function(el){
    var id = parseInt($(el.target).attr("data-id"));
    Backbone.history.navigate("#/posts/" + id + "/edit");
  },

  deletePost: function(el){
    var post = this.collection.findWhere({id: parseInt($(el.target).attr("data-id"))});
    post.destroy();
    Backbone.history.navigate("#/")
  }
});