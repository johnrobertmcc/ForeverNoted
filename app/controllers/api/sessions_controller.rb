class API::SessionsController < ApplicationController
        skip_before_action :verify_authenticity_token

    def new
        render json: ['reate new user']
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"

        else
             render json: ["Invalid username or password"]
            new
        end

    
    end

    def destroy
        logout! if current_user
        render json: ["logged out"]

    end
end
