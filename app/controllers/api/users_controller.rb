class Api::UsersController < ApplicationController

        # skip_before_action :verify_authenticity_token
    

    def create
        @user = User.new(user_params)
        debugger
        if @user.save
            debugger
            login!(@user)
            render :show
        else
            debugger
            flash[:errors] = ["Invalid credentials"]
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
