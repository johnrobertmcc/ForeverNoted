class Api::NotesController < ApplicationController

    def index
        @notes = current_user.notes
        render :index
    end

    def show
        @note = Note.find(params[:id])
        render :show
    end

    def destroy
        @note = Note.find(params[:id])
        # debugger
        if !@note.destroy
            render json: [@note.errors.full_messages], status: 422
        end
        
    end

   
    def create
     
        @note = Note.new(note_params)

        if @note.save
            render 'api/notes/show'
        else  
            render json: ["notes must have a title"], status: 422    
        end
        
    end

    def update
  
        @note = Note.find(params[:id])

        if @note.update(note_params)

            render "api/notes/show"
        
        else

            render json: [@note.errors.full_messages], status: 422

        end
    
    end

    private

    def note_params
        params.require(:note).permit(:body, :title, :user_id, :notebook_id)
    end


end