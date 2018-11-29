class BoardGame < ApplicationRecord
  has_many :game_sessions, through: :game_session_games 
  has_many :rounds 
end
