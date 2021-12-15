class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :like
      t.string :comments
      t.integer :user_id
      t.integer :project_id

      t.timestamps
    end
  end
end
