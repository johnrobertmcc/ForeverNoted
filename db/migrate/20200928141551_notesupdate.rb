class Notesupdate < ActiveRecord::Migration[5.2]
  def change

    add_column :notes, :user_id, :integer
    add_column :notes, :notebook_id, :integer
  end
end
