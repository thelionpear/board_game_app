class Round < ApplicationRecord
  belongs_to :game_session
  has_many :players 
end
