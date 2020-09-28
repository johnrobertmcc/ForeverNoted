class Notebookupdate < ActiveRecord::Migration[5.2]
  def change

    remove_column :notebooks, :user_id
  end
end
