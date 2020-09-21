class Api::UsersController < ApplicationController

        skip_before_action :verify_authenticity_token
    

    def new
        @user = User.new
        redirect_to 'api/users/new'
    end

    def create

        @user = User.new(user_params)

        if @user.save
            login!(@user)
            redirect_to users_url

        else
            flash[:errors] = @user.errors.full_messages
            render :new
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
