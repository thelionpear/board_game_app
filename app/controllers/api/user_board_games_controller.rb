class Api::UserBoardGamesController < ApplicationController
  def destroy 
    @user.board_game.destroy 
  end 

end
