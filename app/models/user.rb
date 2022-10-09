class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, length: { in: 6..15 }
    validates :password_digest, presence: true
    validates :bio, length: { maximum: 500 }
    has_many :pieces, dependent: :destroy
    has_many :galleries, through: :pieces
    has_secure_password
end
