class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.string :board_game
      t.string :players
      t.string :winner
      t.belongs_to :game_session, foreign_key: true

      t.timestamps
    end
  end
end
