class Update4 < ActiveRecord::Migration[5.2]
  def change
    remove_column :notes, :notebook_id
  end


end
