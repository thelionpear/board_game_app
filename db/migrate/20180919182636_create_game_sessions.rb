class CreateGameSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :game_sessions do |t|
      t.belongs_to :user, foreign_key: true
      t.string :players
      t.string :session_date
      t.string :board_games
      t.string :rounds

      t.timestamps
    end
  end
end
