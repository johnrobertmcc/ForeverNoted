class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :notebook_id, null:false
      t.string :body, null:false
      t.string :title, null:false
      t.date :date, null:false

      t.timestamps
    end

  end
end
