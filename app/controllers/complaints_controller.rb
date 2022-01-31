class ComplaintsController < ApplicationController
    # before_action :set_complaint

    def index
        render json: Complaint.all
    end

    def show 
        if @complaint 
            render json: @complaint
        else 
            render json: { error: "Complaint not found" }, status: :not_found
        end
    end

    def create
        @complaint = current_user.complaints.create!(complaint_params)
        # byebug 
        render json: @complaint, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
    # def create
    #     complaint = Complaint.create(complaint_params)
    #     if complaint.valid?
    #         render json: complaint, status: :created
    #     else
    #         render json: {"errors": complaint. errors.full_messages}, status: :unprocessable_entity
    #     end
    # end

    def update 
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
        complaint = Complaint.find_by(id:params[:id])
        if complaint
            # complaint.category.destroy_all
            complaint.destroy
        else
            render json: {"error": "Complaint not found"}, status: :not_found 
        end
    end

    private 

    def set_complaint 
        @complaint = Complaint.find_by_id!(params[:id])
    end

    def complaint_params 
        params.permit(:title, :desc, :date_observed)
    end
end

