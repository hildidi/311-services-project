class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:login]

    # setting a new session in the session hash
    def login #'/login'
        user = User.find_by_username(params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok    
      else 
        render json: {error: "Auth creds not valid"}, status: :unauthorized
      end
    end
  
    def logout 
      session.delete :user_id
    end
  end
  