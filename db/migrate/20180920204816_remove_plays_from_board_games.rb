class RemovePlaysFromBoardGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :board_games, :played, :boolean
    remove_column :board_games, :played_this_month, :boolean
    remove_column :board_games, :played_this_year, :boolean
  end
end
