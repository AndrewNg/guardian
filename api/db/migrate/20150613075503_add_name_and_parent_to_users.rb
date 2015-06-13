class AddNameAndParentToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :parent, :boolean
  end
end
