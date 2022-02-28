class CategoriesController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Category.all
    end

    def create 
        @newCategory = current_user.categories.new(cate_params)
        if @newCategory.save
            render json: @newCategory, status: :created
        else
            # byebug
            render json: {error: @newCategory.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def show
        @category = Category.find_by(id:params[:id])
        if @category
            params[:category_id]=@category.id
        else
            render json: {"error": "AN ERROR!"}
        end
    end

    private 
    
    def cate_params
        params.permit[:category]
    end

end
