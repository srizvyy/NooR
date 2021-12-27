class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :title, :image, :description, :language, :github, :livesite, :time

  belongs_to :user
  has_many :reviews

end
