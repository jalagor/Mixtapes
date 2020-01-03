class AddPreviewToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :preview, :string
  end
end
