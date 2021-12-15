class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :like, :comments, :user_id, :project_id
end
