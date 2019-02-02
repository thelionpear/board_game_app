class Api::BoardGamesController < ApplicationController
  before_action :set_board_game, except: [:index, :create]

  def index
    render json: BoardGame.all
  end

  def show
    render json: @board_game
  end

  def create
    board_game = BoardGame.new(board_game_params)
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
    # binding.pry
    @board_game.destroy
  end

  private

  def set_board_game
    @board_game = BoardGame.find(params[:id])
  end

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
