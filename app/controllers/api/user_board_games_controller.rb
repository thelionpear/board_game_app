class Api::UserBoardGamesController < ApplicationController
  def destroy
    @user = User.find(params[:user_id])
    @user_board_game = @user.user_board_games.find(params[:board_game_id])
    @user_board_game.destroy
  end
end
