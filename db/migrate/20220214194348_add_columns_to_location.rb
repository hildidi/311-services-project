class AddColumnsToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :address, :string
    add_column :locations, :apartment, :string
  end
end
