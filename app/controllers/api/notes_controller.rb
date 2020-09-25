class Api::NotesController < ApplicationController

    def show
        @note = Note.find(params[:id])
        render 'api/notes/note'
    end



    def destroy
        @note = Note.find(params[:id])

        if @note.destroy
            redirect_to 'api/users/show'
        else
            render json: [@note.errors.full_messages], status: 422
        end

    end

   
    def create

        @note = Note.new(note_params)

        if @note.save
            login!(@note)
            render 'api/notes/show'
        else
            render json: ["notes must have a title"], status: 422    
        end
        
    end

    def edit
        
        @note = Note.find(params[:id])

        if @note.update(note_params)
            render "api/notes/show"
        
        else
            render json: [@note.errors.full_messages], status: 422

        end
    
    end

    private

    def note_params
        params.require(:note).permit(:body, :title)
    end


end