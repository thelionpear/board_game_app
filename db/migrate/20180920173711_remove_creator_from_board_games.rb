class RemoveCreatorFromBoardGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :board_games, :creator, :string
    remove_column :board_games, :awards, :string
    remove_column :board_games, :edition, :string
  end
end
