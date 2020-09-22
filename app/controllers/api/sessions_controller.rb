class API::SessionsController < ApplicationController
        skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render json: ["logged in"]

        else
             render json: ["Invalid username or password"]
        end

    
    end

    def destroy
        logout! if current_user
        render json: ["logged out"]

    end
end
