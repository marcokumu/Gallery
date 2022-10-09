class Gallery < ApplicationRecord
    has_many :pieces
    has_many :users, through: :pieces
end
