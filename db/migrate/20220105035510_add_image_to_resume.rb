class AddImageToResume < ActiveRecord::Migration[6.1]
  def change
    add_column :resumes, :image, :string
  end
end
