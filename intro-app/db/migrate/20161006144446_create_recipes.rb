class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :chef
      t.time :cooktime
      t.integer :serves
      t.text :description
      t.boolean :favorite

      t.timestamps null: false
    end
  end
end
