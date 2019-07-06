class AddManualFriendNameToFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :manual_friend_name, :string
  end
end
