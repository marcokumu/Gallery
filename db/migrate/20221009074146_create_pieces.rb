class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.string :image
      t.string :title
      t.string :medium
      t.text :description
      t.integer :worth
      t.integer :user_id

      t.timestamps
    end
  end
end
