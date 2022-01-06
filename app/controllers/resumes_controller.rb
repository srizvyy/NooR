class ResumesController < ApplicationController

     def index 
        render json: Resume.all
    end

    def show 
        resume = find_resume
        render json: resume
    end

    def create
        resume = Resume.create!(resume_params)
        render json: resume
    end

    def update
        resume = find_resume
        resume.update!(resume_params)
        render json: resume
    end

    def destroy
        resume = find_resume
        resume.destroy!
        head :no_content
    end

    private 

    def find_resume
        Resume.find(params[:id])
    end


    def resume_params
       
        params.permit(:owner_id, :title, :description, :name, :resume_url)
    end

end
