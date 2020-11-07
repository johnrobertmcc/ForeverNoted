class UpdateTags < ActiveRecord::Migration[5.2]
  def change

    remove_column :tags, :note_id
    add_column :tags, :note_id, :integer
  end
end
