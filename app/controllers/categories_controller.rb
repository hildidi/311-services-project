class CategoriesController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Category.all
    end

    def show
        @category = Category.find_by(id:params[:id])
        if @category
            params[:category_id]=@category.id
        else
            render json: {"error": "AN ERROR!"}
        end
    end

end
