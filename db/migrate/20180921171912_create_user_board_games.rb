class CreateUserBoardGames < ActiveRecord::Migration[5.2]
  def change
    create_table :user_board_games do |t|
      t.integer :user_id
      t.integer :board_game_id
      t.boolean :played
      t.boolean :played_this_month
      t.boolean :played_this_year

      t.timestamps
    end
  end
end
