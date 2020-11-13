class CreateNoteTags < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :note_id
    add_column :tags, :note_ids, :integer, array: true, default: []
    add_column :notes, :tag_id, :integer
  end
end
