class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :pieces
  has_many :users, through: :pieces
end
