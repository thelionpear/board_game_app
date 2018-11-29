class Api::BoardGamesController < ApplicationController

  def index
    render json: BoardGame.all
  end

  def show
    render json: @board_games
  end

  def create
    board_game = BoardGame.new 
    if board_game.save
      render json: board_game 
    else
      render json: board_game.errors
    end 
  end

  def update
    if @board_game.update(board_game_params)
      render json: @board_game 
    else 
      render_error(@board_game)
    end 
  end

  def destroy 
    @board_game.destroy 
  end 

  private 

  # def set_board_game 
  #   @board_game = Board_Game.find(params[:id])
  # end 

  def board_game_params
    params.require(:board_game).permit(
    :title,
    :min_players,
    :max_players,
    :base_game,
    :time_needed,
    :company 
    )
  end 

end
