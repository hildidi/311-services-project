class Category < ApplicationRecord
    has_many :complaints
    has_many :users, through: :complaints

    validates :category, presence: true
end

# Categories -< Complaints >- Users
