class User < ActiveRecord::Base
  has_many :board_games, through: :user_board_games
  has_many :game_sessions 
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
