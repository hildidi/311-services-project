class UserShowSerializer < ActiveModel::Serializer
  attributes :username, :email

  has_many :complaints
end
