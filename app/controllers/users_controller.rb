class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :show]
 
    def index
        render json: User.all
    end

    # signup => 'users/ POST
    def create
        user = User.create!(user_params)
        session[:user_id]=user.id #logs our user in
        render json: user, status: :created
    end

    def show 
        # byebug
        if current_user
            # byebug
            render json: current_user, status: :ok
        else
            # byebug
            render json: "Nobody has logged in", status: :unauthorized
        end
    end

    def destroy 
        user = User.find_by_id(params[:id])
        user.destroy 
        head :no_content 
        rescue ActiveRecord::RecordNotFound => error 
            render json: {error: error.message}, status: :not_found
        
    end

    private
    def user_params
        params.permit(:username, :email, :password)
    end
end
