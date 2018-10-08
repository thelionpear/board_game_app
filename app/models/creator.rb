class Creator < ApplicationRecord
  # belongs_to :board_game
  has_many :board_games
end
