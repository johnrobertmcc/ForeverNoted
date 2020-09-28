class Notebook < ApplicationRecord
    validates :title, presence:true #, uniqueness: {scope: :user_id}

end

