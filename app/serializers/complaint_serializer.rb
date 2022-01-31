class ComplaintSerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :date_observed

  has_one :user
  has_many :category
end
