class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :game_sessions
      t.string :games_won

      t.timestamps
    end
  end
end
