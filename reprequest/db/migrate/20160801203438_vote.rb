class Vote < ActiveRecord::Migration
  def change
    create_table :votes do |table|
      table.string :person_id
      table.string :name
      table.string :eligible
      table.string :missed
    end
  end
end
