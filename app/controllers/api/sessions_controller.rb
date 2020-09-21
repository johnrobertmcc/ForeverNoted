class API::SessionsController < ApplicationController
        skip_before_action :verify_authenticity_token

    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            redirect_to users_url

        else
            flash[:errors] = ["Invalid username or password"]
            new
        end

    
    end

    def destroy
        logout! if current_user
        redirect_to new_session_url
    end
end
