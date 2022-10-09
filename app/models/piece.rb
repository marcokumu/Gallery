class Piece < ApplicationRecord
    validates :image, presence: true
    validates :title, presence: true, length: { in: 1..30 }
    validates :medium, presence: true, length: { in: 1..50}
    validates :description, length: { maximum: 500}
    validates :worth, numericality: true
    belongs_to :user
    belongs_to :gallery
end