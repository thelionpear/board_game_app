class RemoveExpansionsFromBoardGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :board_games, :expansions, :string
  end
end
