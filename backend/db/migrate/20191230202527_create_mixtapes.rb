class CreateMixtapes < ActiveRecord::Migration[6.0]
  def change
    create_table :mixtapes do |t|
      t.string :name

      t.timestamps
    end
  end
end
