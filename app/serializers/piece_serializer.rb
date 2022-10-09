class PieceSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :medium, :description, :worth, :user_id
end
