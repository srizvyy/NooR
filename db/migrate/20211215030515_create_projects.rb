class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.bigint :owner_id
      t.string :title
      t.string :image
      t.string :description
      t.string :language
      t.string :github
      t.string :livesite
      t.string :time

      t.timestamps
    end
  end
end
