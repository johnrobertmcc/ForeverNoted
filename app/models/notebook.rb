class Notebook < ApplicationRecord
    validates :title, presence:true #, uniqueness: {scope: :user_id}

    has_many :notes
    belongs_to :user

    # has_many :tags,
        # through :notes,
        # source :Note

    def notes_with_tags
        fin = []
        
        notes.each do |note|

            tag = {}
            
            if note.tag
                tag['id'] = note.tag.id
                tag['note_id'] = note.id
                fin << tag
            end

        end 

        return fin
    end

end

