class ResumeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :owner_id, :title, :description, :name, :resume_url, :image

  belongs_to :user
  # has_many :reviews

  def resume_url
    rails_blob_path(object.resume_url, only_path: true) if object.resume_url.attached?
  end

end
