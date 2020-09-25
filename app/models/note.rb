class Note < ApplicationRecord

    validates :notebook_id, presence: true, uniqueness: true
    # validates :body, date
    validates :title, presence: true
    validates :date, presence: true


    belongs_to :notebook
    belongs_to :user


    # generate notebook id?


    # generate date?
end
