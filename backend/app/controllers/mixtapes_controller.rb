class MixtapesController < ApplicationController

    def index
        mixtapes = Mixtape.all 
        render json: mixtapes, include: :songs
    end

    def show
        mixtape = Mixtape.find(params[:id])
        render json: mixtape, include: :songs
    end

    def create
        mixtape = Mixtape.create(mixtape_params)
        redirect_to "http://localhost:3001/mixtapeshow.html"
    end

    def update
        mixtape = Mixtape.find(params[:id])
        mixtape.update(mixtape_params)
        render json: mixtape, include: :songs
    end

    def destroy
        mixtape = Mixtape.find(params[:id])
        mixtape.destroy
    end

    private

    def mixtape_params
        params.permit(
            :name
            )
    end
end
