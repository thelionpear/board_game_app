class CreateGameSessionPlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :game_session_players do |t|
      t.integer :player_id
      t.integer :game_session_id

      t.timestamps
    end
  end
end
