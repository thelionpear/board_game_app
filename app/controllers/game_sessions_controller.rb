class GameSessionsController < ApplicationController
  before_action :set_user 
 
  def index
    render json: @user.game_sessions
  end

  def show
    render json: @game_session
  end

  def create
    game_session = @user.game_sessions.new(game_session_params)

    if game_session.save
      render json: game_session
    else 
      render_error(game_session)
    end 

  end

  def update
    if @game_session.update(game_session_params) 
      render json: @game_session
    else 
      render_error(@game_session)
    end 

  end

  def destroy 
    @game_session.destroy 
  end 

  private 

  def set_user 
    @user = User.find(params[:user_id])
  end 

  def set_game_session 
    @game_session = Game_Session.find(params[:id])
  end 

  def game_session_params
    params.require(:game_session).permit(
    :user_id; 
    :session_date; 
    :players; 
    :board_games; 
    :rounds; 
    )
  end 

end
