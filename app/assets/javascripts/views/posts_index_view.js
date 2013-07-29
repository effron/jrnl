Jrnl.Views.PostsIndexView = Backbone.View.extend({
  template: JST['posts/index'],
  tagName: "ul",
  className: "posts-list",
  events: {
    "click button.delete-post" : "deletePost"
  },

  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change:title", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  render: function(){
    var that = this
    this.$el.html(that.template({posts:that.collection}));
    return this;
  },

  deletePost: function(el){
    var post = this.collection.findWhere({id: parseInt($(el.target).attr("data-id"))});
    post.destroy();
  }
});