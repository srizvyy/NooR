class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews 
    has_many :projects, through: :reviews 
    has_many :project_owned, class_name: "Project", foreign_key: "owner_id", dependent: :destroy 

    validates :username, presence: true, uniqueness: true 
    validates :email, presence: true, uniqueness: true
    


end
