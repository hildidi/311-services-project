class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user # before anything else inside of an action runs, it'll invoke this auth_user method before hitting any of the routes.
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


  private 

  def authenticate_user 
      render json: {error: "Not authorized"}, status: :unauthorized unless current_user 
  end

  def record_invalid(invalid)
      render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity 
  end

  def record_not_found(error)
      render json: {error: error.message}, status: :unprocessable_entity
  end

  def current_user # needs to change once authentication is set up
      @current_user ||= User.find_by_id(session[:user_id]) # @current_user ||=  memorizes the request because it memorizes the request, omitting the call to the DB. 
  end
end
