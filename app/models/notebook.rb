class Notebook < ApplicationRecord

    # validates :user_id, presence: true
    validates :title, presence:true, uniqueness: {scope: :user_id}

    has_many :notes
    belongs_to :user
end

