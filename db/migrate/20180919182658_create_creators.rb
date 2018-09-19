class CreateCreators < ActiveRecord::Migration[5.2]
  def change
    create_table :creators do |t|
      t.belongs_to :board_game, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :social_media

      t.timestamps
    end
  end
end
