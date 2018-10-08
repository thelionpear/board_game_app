class CreateGameSessionGames < ActiveRecord::Migration[5.2]
  def change
    create_table :game_session_games do |t|
      t.integer :session_id
      t.integer :board_game_id

      t.timestamps
    end
  end
end
