Jrnl.Views.PostsIndexView = Backbone.View.extend({
  template: JST['posts/index'],
  tagName: "ul",
  className: "posts-list",

  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  render: function(){
    var that = this
    this.$el.html(that.template({posts:that.collection}));
    return this;
  }
});