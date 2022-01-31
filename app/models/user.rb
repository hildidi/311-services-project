class User < ApplicationRecord
    has_secure_password

    has_many :complaints
    has_many :categories, through: :complaints
    # U -< C >- Categ   

    #Validation Macros 
    validates :username, presence: true, on:[:create]
    validates :email, presence: true
    validates :email, uniqueness: {case_sensitive: false, message: "That email is already associated to another account"}
    validates :password, presence: true    
end
