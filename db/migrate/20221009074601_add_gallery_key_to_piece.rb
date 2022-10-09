class AddGalleryKeyToPiece < ActiveRecord::Migration[6.1]
  def change
     add_column :pieces, :gallery_id, :integer
  end
end
