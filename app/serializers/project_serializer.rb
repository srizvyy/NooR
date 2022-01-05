class ProjectSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :owner_id, :title, :image, :description, :language, :github, :livesite, :time, :pic_urls

  belongs_to :user
  has_many :reviews

  def pic_urls
    rails_blob_path(object.pic_urls, only_path: true) if object.pic_urls.attached?
  end

  # def pic_urls
  #   if object.pic.attached?
  #     {
  #       url: rails_blob_url(object.pic)
  #     }
  #   end
  # end

end
