class UsersController < ApplicationController
skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        users = User.all
        render json: users, include: :pieces, status: :ok
    end

    def show
        render json: @current_user, include: :pieces, status: :ok
    end

    def destroy
        user = @current_user
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end

end
