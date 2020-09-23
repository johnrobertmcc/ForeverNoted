class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/show'

        else
             render json: ['wrong'], status: 400
        end

    
    end

    def destroy

        logout! if current_user
        render json: ["logged out"]

    end
end
