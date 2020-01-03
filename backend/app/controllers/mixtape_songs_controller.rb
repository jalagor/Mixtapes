class MixtapeSongsController < ApplicationController

    def index
        mixtapesongs = MixtapeSong.all
        render json: mixtapesongs
    end

    def show
        mixtapessong = MixtapeSong.find(params[:id])
        render json: mixtapesong
    end

    def create
        mixtapesong = MixtapeSong.create(song_id: params[:song_id], mixtape_id: params[:mixtape_id])
        render json: mixtapesong
    end

    def destroy
        mixtapesong = MixtapeSong.find(params[:id])
        mixtapesong.destroy
    end

end
