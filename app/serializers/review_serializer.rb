class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :like, :comments, :user_id, :project_id, :name

  def name 
    self.object.user.username
  end

end
