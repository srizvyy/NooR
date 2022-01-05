class Project < ApplicationRecord
    has_many :reviews, dependent: :destroy
    belongs_to :user, class_name: "User", foreign_key: "owner_id"
    # belongs_to :owned_by, class_name: "User", foreign_key: "owner_id"
    has_one_attached :pic_urls
    
    # def pic_urls
    #     Rails.application.routes.url_helpers.url_for(pic) if pic.attached?
    # end
    
end
