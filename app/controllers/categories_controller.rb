class CategoriesController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Category.all
    end

    def category
        Category.find_by(id: params[:id])
    end

end
