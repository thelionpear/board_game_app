class CreateBoardGames < ActiveRecord::Migration[5.2]
  def change
    create_table :board_games do |t|
      t.string :title
      t.string :expansions
      t.string :creator
      t.integer :min_players
      t.integer :max_players
      t.string :play_history
      t.integer :time_needed
      t.boolean :played_this_year
      t.boolean :played_this_month
      t.boolean :played
      t.string :edition
      t.string :year_released
      t.string :company
      t.string :awards

      t.timestamps
    end
  end
end
