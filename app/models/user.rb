class User < ActiveRecord::Base
  has_many :user_board_games, :dependent => :destroy
  has_many :board_games, through: :user_board_games
  # User.joins(:board_games).where("board_games.id == 'user.id'")
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  has_many :game_sessions
  has_many :friends
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
