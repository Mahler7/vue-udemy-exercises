class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.text :text
      t.integer :question_id
      t.integer :user_id

      t.timestamps
    end
  end
end
