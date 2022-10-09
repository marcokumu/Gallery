class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image_url, :bio
  has_many :pieces, dependent: :destroy
  has_many :galleries, through: :pieces
end
