class CreateResumes < ActiveRecord::Migration[6.1]
  def change
    create_table :resumes do |t|
      t.bigint :owner_id
      t.string :title
      t.string :description
      t.string :name

      t.timestamps
    end
  end
end
