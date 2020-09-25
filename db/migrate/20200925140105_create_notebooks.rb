class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.integer :user_id, null:false
      t.string :title, null:false

      t.timestamps
    end
  end
end
