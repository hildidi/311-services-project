class LocationSerializer < ActiveModel::Serializer
  attributes :id, :borough, :neighborhood, :zip
end
