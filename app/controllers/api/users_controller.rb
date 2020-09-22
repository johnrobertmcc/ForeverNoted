class Api::UsersController < ApplicationController

        skip_before_action :verify_authenticity_token
    

    def new
        @user = User.new
        redirect_to 'api/users/new'
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            flash[:errors] = ["Invalid credentials"]
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
