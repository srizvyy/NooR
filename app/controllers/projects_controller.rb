class ProjectsController < ApplicationController

    def index 
        render json: Project.all
    end

    def show 
        project = find_project
        render json: project
    end

    def create
        project = Project.create!(project_params)
        render json: project
    end

    def update
        project = find_project
        project.update!(project_params)
        render json: project
    end

    def destroy
        project = find_project
        project.destroy!
        head :no_content
    end

    private 

    def find_project
        Project.find(params[:id])
    end


    def project_params
       
        params.permit(:owner_id, :title, :description, :language, :github, :livesite, :time, :pic_urls)
    end

end
