class CreateBoardGames < ActiveRecord::Migration[5.2]
  def change
    create_table :board_games do |t|
      t.string :title
      t.string :expansions
      #removed
      t.string :creator
      t.integer :min_players
      t.integer :max_players
      #removed
      t.string :play_history
      t.integer :time_needed
      #removed
      t.boolean :played_this_year
      #removed
      t.boolean :played_this_month
      #removed
      t.boolean :played
      #removed
      t.string :edition
      #removed
      t.string :year_released
      t.string :company
      #removed 
      t.string :awards

      t.timestamps
    end
  end
end
