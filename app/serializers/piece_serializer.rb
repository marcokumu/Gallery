class PieceSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :medium, :description, :worth, :user_id, :gallery_id
  belongs_to :user
  belongs_to :gallery
end
