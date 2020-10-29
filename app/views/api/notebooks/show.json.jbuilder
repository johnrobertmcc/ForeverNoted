json.partial! "api/notebooks/notebook", notebook: @notebook

# @notebook.notes.each do |note|

#     json.notes do 
        
#         json.set! note.id do
            
#             json.partial! 'api/notes/note', note: note
        
#         end 

#     end

# end