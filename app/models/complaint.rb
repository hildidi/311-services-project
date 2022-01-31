class Complaint < ApplicationRecord
  belongs_to :user
  belongs_to :category

  #Validation Macros 
  validates :title, presence: true, on:[:create, :update]
  validates :desc, presence: true, on:[:create, :update]
  validates :date_observed, presence: true, on:[:create, :update]
end
