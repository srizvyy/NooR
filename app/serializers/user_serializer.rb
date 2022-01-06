class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :img

  has_many :reviews
end
