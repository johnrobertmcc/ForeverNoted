class Note < ApplicationRecord
    validates :body, presence: true
    validates :title, presence: true
    validates :user_id, presence: true
    # validates :tag

    belongs_to :notebook
    belongs_to :user
    has_one :tag

end
