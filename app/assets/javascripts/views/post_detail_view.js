Jrnl.Views.PostDetailView = Backbone.View.extend({
  template: JST["posts/show"],
  render: function() {
    var that = this;
    this.$el.html(that.template({post: that.model}));
    return this;
  }
});