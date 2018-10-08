class GameSession < ApplicationRecord
  belongs_to :user
  has_many :rounds
  has_many :board_games, through: :game_session_games
  has_many :players, through: :player_game_sessions 
end
