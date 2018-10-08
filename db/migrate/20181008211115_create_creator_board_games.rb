class CreateCreatorBoardGames < ActiveRecord::Migration[5.2]
  def change
    create_table :creator_board_games do |t|
      t.integer :creator_id
      t.integer :board_game_id

      t.timestamps
    end
  end
end
