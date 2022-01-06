class Review < ApplicationRecord
    belongs_to :project
    belongs_to :user
    # belongs_to :resume

    #  validates_uniqueness_of :user_id, :scope => :project_id
end
