class CreateMixtapeSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :mixtape_songs do |t|
      t.references :song, null: false, foreign_key: true
      t.references :mixtape, null: false, foreign_key: true

      t.timestamps
    end
  end
end
