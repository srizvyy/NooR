class Resume < ApplicationRecord
    # has_many :reviews, dependent: :destroy
    belongs_to :user, class_name: "User", foreign_key: "owner_id"
    has_one_attached :resume_url

end