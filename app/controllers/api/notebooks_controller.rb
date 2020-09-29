class Api::NotebooksController < ApplicationController

    
    def index
       
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = Notebook.find(params[:id])
        render 'api/notebooks/notebook'
    end



    def destroy
        @notebook = Notebook.find(params[:id])

        if @notebook.destroy
            redirect_to 'api/users/show'
        else
            render json: [@notebook.errors.full_messages], status: 422
        end

    end

   
    def create


        @notebook = Notebook.new(notebook_params)

        
        if @notebook.save
            render 'api/notebooks/show'
        else
            render json: ["notebooks must have a title status 4fucking22"], status: 422    
        end
        
    end

    def edit
        
        @notebook = Notebook.find(params[:id])

        if @notebook.update(notebook_params)
            render "api/notebooks/show"
        
        else
            render json: [@notebook.errors.full_messages], status: 422

        end
    
    end

    private

    def notebook_params
        params.require(:notebook).permit(:title, :user_id)
    end


end