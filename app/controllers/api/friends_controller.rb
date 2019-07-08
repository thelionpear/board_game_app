class Api::FriendsController < ApplicationController
  def index
    render json: Friend.all
  end

  def show
    render json: @friend
  end

  def create
    friend = Friend.new
    if friend.save
      render json: friend
    else
      render json: friend.errors
    end
  end

  def update
    if @friend.update(friend_params)
      render json: @friend
    else
      render_error(@friend)
    end
  end

  def destroy
    @friend.destroy
  end

  private

  def friend_params
    params.require(:friend).permit(
      :manual_friend_name,
      :friend_id,
      :user_id
    )
  end
end
