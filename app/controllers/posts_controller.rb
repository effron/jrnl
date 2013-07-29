class PostsController < ApplicationController

  respond_to :json
  respond_to :html, only: [:index]

  def index
    @posts = Post.all
    respond_with(@posts)
  end

  def show
    @post = Post.find(params[:id])
    respond_with(@post)
  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      respond_with(@post)
    else
      respond_with(@post, status: 422)
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes
      respond_with(@post)
    else
      respond_with(@post, status: 422)
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    respond_with(@post)
  end
end