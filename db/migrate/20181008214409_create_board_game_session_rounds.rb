class CreateBoardGameSessionRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :board_game_session_rounds do |t|
      t.integer :board_game_id
      t.string :game_session_id
      t.integer :round_id

      t.timestamps
    end
  end
end
