class RemoveYearReleasedFromBoardGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :board_games, :year_released, :string
    remove_column :board_games, :play_history, :string
  end
end
