class AddBaseGameToBoardGames < ActiveRecord::Migration[5.2]
  def change
    add_column :board_games, :base_game, :integer
  end
end
