class ComplaintsController < ApplicationController
    before_action :set_complaint#, only: [:show, :update, :destroy]
    # before_action :is_authorized, only: [:show, :update, :destroy]
    before_action :is_authorized, except: [:index, :create, :display_user_complaints]

    def index
        render json: Complaint.all
    end

    def show 
        # @complaint = Complaint.find_by(id:params[:id])
        if @complaint 
            render json: @complaint
        else 
            render json: {error: "Complaint not found" }, status: :not_found
        end
    end

     def create      
        @category = Category.find_by(category:params[:category_name])
            # byebug
        if @category
            params[:category_id]=@category.id 
        else 
            render json: {error: "Error!"}
        end 
        #   byebug
        @newComplaint=current_user.complaints.new(complaint_params)
        if @newComplaint.save
            render json: @newComplaint, status: :created
        else
            # byebug
            render json: {error: @newComplaint.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def update 
        # @complaint = Complaint.find_by(id:params[:id])
        if @complaint
            if @complaint.update(complaint_params)
            render json: @complaint, status: :ok
            else 
                render json: {error: @complaint.errors.full_messages}
            end 
        else  
            render json: {error: "This complaint does not exist"}, status: :not_found
        end
    end

    def destroy 
        # @complaint = Complaint.find_by(id:params[:id])
        if @complaint
            # complaint.category.destroy_all
           @complaint.destroy
        else
            render json: {"error": "Complaint not found"}, status: :not_found 
        end
    end

    def display_user_complaints
        # byebug
        @complaint = current_user.complaints
        render json: @complaint
    end

    private 

    def set_complaint 
        # byebug
        @complaint = Complaint.find_by(id:params[:id])
    end

    def is_authorized
        #going to check if user owns the complaints that being modified
        # permitted = @complaint.user == current_user #before adding admin
        permitted = current_user.admin? || @complaint.user == current_user 
        render json: {error: "You don't have permission to perform that action"}, status: :forbidden unless permitted
    end

    # strong params > security feature that allows to list what attributes are allowed to be used and saved in the DB.
    def complaint_params 
        params.permit(:title, :desc, :date_observed, :category_id, :user_id)
    end

end

 