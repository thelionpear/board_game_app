class BoardGame < ApplicationRecord
  has_many :game_sessions, through: :game_session_games 
  has_many :users, through: :user_board_games
  has_many :rounds 
end
