Jrnl.Views.PostFormView = Backbone.View.extend({
  template: JST["posts/edit"],
  events: {
    "click .edit-button" : "editPost"
  },

  render: function() {
    var that = this;
    this.$el.html(that.template({post: that.model}));
    return this;
  },

  editPost: function() {
    var that = this;
    var formData = $('.edit-post').serializeArray();
    var formObject = {}
    _.each(formData, function(field){
      formObject[field.name] = field.value
    })

    var error = function(model, xhr, options){
      var errors = JSON.parse(xhr.responseText).errors;
      var errorsText = "";

      if(errors.title) {
        errorsText += "title " + errors.title[0] + "<br>";
      }
      if(errors.body) {
        errorsText += "body " + errors.body[0];
      }
      $('.errors').html(errorsText);
    };

    var success = function(model){
      console.log(that.collection);
      Backbone.history.navigate("#/posts/" + model.id);
    }

    if (this.model.isNew()){
      this.collection.create(formObject, {
        success: success,
        error: error,
      })
    }
    else {
      this.model.save(formObject, {
        success: success,
        error: error
      })
    }
  }
});